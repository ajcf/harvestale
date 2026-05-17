import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import PublicHeader from './Components/Header/PublicHeader';

const PASSWORD = process.env.REACT_APP_PARTICIPANT_PASSWORD || 'harvest2026';

const Login = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.toLowerCase() === PASSWORD.toLowerCase()) {
      localStorage.setItem('harvestale_auth', 'true');
      history.push('/participants/schedule');
    } else {
      setError(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="not_home">
        <PublicHeader />
        <div className="content-wrapper">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
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
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff8e3',
                    '& fieldset': { borderColor: 'rgba(47, 79, 79, 0.35)' },
                    '&:hover fieldset': { borderColor: 'darkslategray' },
                  },
                  '& .MuiInputLabel-root': { color: 'darkslategray' },
                  '& .MuiInputBase-input': { color: 'darkslategray' },
                }}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                Enter
              </Button>
            </Box>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
