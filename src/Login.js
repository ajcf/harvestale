import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
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
          <Box component="form" onSubmit={handleSubmit} className="login-card">
            <div className="login-card-title">Participants Only</div>
            <div className="login-card-subtitle">
              Enter the password to access the participant schedule
            </div>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false); }}
              error={error}
              helperText={error ? 'Incorrect password' : ''}
              FormHelperTextProps={{ role: 'alert' }}
              margin="normal"
              inputProps={{ autoComplete: 'current-password' }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#fffbf0',
                  '& fieldset': { borderColor: '#ddd0a8' },
                  '&:hover fieldset': { borderColor: '#8c671d' },
                  '&.Mui-focused fieldset': { borderColor: '#8c671d' },
                },
                '& .MuiInputLabel-root': { color: '#7a6040' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#8c671d' },
                '& .MuiInputBase-input': { color: '#3d2e1e', fontSize: '1rem' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 1,
                backgroundColor: '#8c671d',
                color: '#fff',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                '&:hover': { backgroundColor: '#775718' },
              }}
            >
              Enter
            </Button>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
