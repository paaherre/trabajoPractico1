import React from 'react';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

const pages = ['Preguntas frecuentes', 'Contáctanos', 'Prensa', 'Conferencias', 'Términos y condiciones', 'Privacidad', 'Estudiantes']

const Footer = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#343A40', height: '8vh', bottom: '0px', marginTop: '2vh' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{ marginX: '30px' }}>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  fontSize: '0.7rem',
                  color: 'white'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer 