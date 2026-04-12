import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const PASSWORD = process.env.REACT_APP_PARTICIPANT_PASSWORD || 'harvest2026';

const Login = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === PASSWORD) {
      localStorage.setItem('harvestale_auth', 'true');
      history.push('/participants/schedule');
    } else {
      setError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
        <Typography variant="h5" gutterBottom>Participants Only</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: 300 }}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            error={error}
            helperText={error ? 'Incorrect password' : ''}
            margin="normal"
            inputProps={{ 'aria-label': 'Password' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
            Enter
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Login;
