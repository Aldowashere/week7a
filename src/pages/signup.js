import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { sigInUser } from '../store/userSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    dispatch(sigInUser(userData));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Kayit Ol
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Adresi"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Şifre"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Kayit Ol!
          </Button>
          {error && <Typography color="error">Hata: {error}</Typography>}
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
