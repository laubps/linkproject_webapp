import React from "react";
import { Typography, TextField, Button, Link, Checkbox, FormControlLabel } from "@mui/material";
import { FormContainer, FormTitle, MainContainer, FormInput, FormButton, FormFooter } from './Login.styles';
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Usuario Autenticado Correctamente");
    navigate("");
  }

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <MainContainer>
      <FormContainer>
        <FormTitle>
          <Typography variant="h4" align="center" fontWeight="bold">
            Bienvenido
          </Typography>
          <Typography variant="body1" align="center">
            Por favor inicia sesión para continuar
          </Typography>
        </FormTitle>

        <FormInput>
          <TextField
            id="email"
            label="Correo electrónico"
            type="email"
            placeholder="Correo electrónico"
            fullWidth
            variant="outlined"
          />
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            variant="outlined"
          />
        </FormInput>

        <FormControlLabel
          control={<Checkbox />}
          label="Recordar usuario"
        />

        <FormButton>
          <Button variant="contained" fullWidth color="primary" size="large" onClick={handleLogin}>
            Log In
          </Button>
        </FormButton>

        <FormFooter>
          <Typography variant="body2" align="center">
            ¿Aún no tienes cuenta?{" "}
            <Link onClick={handleSignUpRedirect} style={{ cursor: "pointer" }}>
              Regístrate
            </Link>
          </Typography>
        </FormFooter>
      </FormContainer>
    </MainContainer>
  );
}
