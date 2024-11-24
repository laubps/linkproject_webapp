import { Container, Box} from '@mui/material';
import { styled } from '@mui/material/styles';

// Main
export const MainContainer = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        marginTop: 20,
        boxSizing: 'border-box',
        backgroundColor: 'background.main',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        px: 14,
}));

// Contenedor del Formulario
export const FormContainer = styled(Box)(({ theme }) =>
    theme.unstable_sx({
        alignItems: 'stretch',
        backgroundColor: 'common.white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '50%',
        width: '40%',
        p: 7,
        gap: 6,
        overflow: 'hidden',
}));   

// Contenedor para el Titulo
export const FormTitle = styled(Container)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
}));

// Contenedor para inputs
export const FormInput = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

// Contenedor para el botón
export const FormButton = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

// Pie de formulario
export const FormFooter = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
}));