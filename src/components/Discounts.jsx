//import React from 'react';
import { motion } from "framer-motion"
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Card, CardActions, CardContent, Container, Typography } from "@mui/material";

const Discounts = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, mt: '3vh' }} >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <motion.div>
              <Card sx={{ minWidth: 275, border: '1px solid blue' }}>
                <CardContent>
                  <Typography variant="h5" component="div" textAlign="center" fontWeight="550">
                    Estudiante
                  </Typography>
                  <Typography variant="body2" textAlign={'center'} sx={{ mt: 1.5, mb: 2 }}>
                    Tienen un descuento
                  </Typography>
                  <Typography variant="h5" textAlign={'center'} sx={{ mt: 1.5, mb: 2 }} fontWeight="550" >
                    80%
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign={'center'}>
                    * presentar documentación
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275, border: '1px solid green' }}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign="center" fontWeight="550">
                  Trainee
                </Typography>
                <Typography variant="body2" textAlign={'center'} sx={{ mt: 1.5, mb: 2 }}>
                  Tienen un descuento
                </Typography>
                <Typography variant="h5" textAlign={'center'} sx={{ mt: 1.5, mb: 2 }} fontWeight="550" >
                  50%
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign={'center'}>
                  * presentar documentación
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ minWidth: 275, border: '1px solid yellow' }}>
              <CardContent>
                <Typography variant="h5" component="div" textAlign="center" fontWeight="550">
                  Junior
                </Typography>
                <Typography variant="body2" textAlign={'center'} sx={{ mt: 1.5, mb: 2 }}>
                  Tienen un descuento
                </Typography>
                <Typography variant="h5" textAlign={'center'} sx={{ mt: 1.5, mb: 2 }} fontWeight="550" >
                  15%
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" textAlign={'center'}>
                  * presentar documentación
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Discounts 