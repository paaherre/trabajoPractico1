import React, { useEffect, useState } from 'react';
import './RegistrationForm.css'
import { object, string, number, date } from 'yup';
import { Formik, useFormikContext } from 'formik';
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';

const buyTicketSchema = Yup.object().shape({
  firstname: Yup.string()
    .required('Requerido'),
  lastname: Yup.string()
    .required('Requerido'),
  email: Yup.string().email('Correo inválido').required('Requerido'),
  quantity: Yup.string().required('Requerido'),
  category: Yup.string().required('Requerido'),
});

const RegistrationForm = () => {
  const [formValues, setFormValues] = React.useState({ firstname: '', lastname: '', email: '', quantity: '', category: '', price: 0 })
  const [price, setPrice] = useState(0)

  const calcularResumen = (values) => {
    setFormValues(values)
  }

  const resetValues = () => {
    setFormValues({ firstname: '', lastname: '', email: '', quantity: '', category: '', price: 0 })
  }


  const UpdateValues = () => {
    const { values } = useFormikContext();

    useEffect(() => {
      console.log(values)
      console.log(formValues);
      const totalPrice = (-200 * formValues.category) + 200
      setPrice(totalPrice)
    }, [formValues, values]);
  }


  return (

    <Container>
      <Typography variant="h2" textAlign="center" sx={{ mt: '2vh' }}>VALOR DE TICKET $200</Typography>
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', quantity: '', category: '', price: 0 }}
        validationSchema={buyTicketSchema}
        onReset={(values) => {
          values = { firstname: '', lastname: '', email: '', quantity: '', category: '', price: 0 }
          resetValues(values)
        }}
        onSubmit={(values) => {
          calcularResumen(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleReset,
        }) => (
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <Box sx={{ flexGrow: 1, mt: '3vh' }}>
              <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center" style={{ minWidth: '100%' }}>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    type="input"
                    label="Nombre:"
                    name="firstname"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.firstname}
                  />
                  {errors.firstname && touched.firstname && errors.firstname ?
                    (<Typography variant="span" color="red" sx={{ ml: '10px' }}>* {errors.firstname}</Typography>) : null}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    type="input"
                    label="Apellido"
                    name="lastname"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.lastname}
                  />
                  {errors.lastname && touched.lastname && errors.lastname ?
                    (<Typography variant="span" color="red" sx={{ ml: '10px' }}>* {errors.lastname}</Typography>) : null}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "100%" }}
                    type="input"
                    label="Correo"
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email ?
                    (<Typography variant="span" color="red" sx={{ ml: '10px' }}>* {errors.email}</Typography>) : null}
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Cantidad</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">Categoría</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    style={{ width: "100%" }}
                    type="input"
                    label="Cantidad"
                    name="quantity"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.quantity}
                  />
                  {errors.quantity && touched.quantity && errors.quantity ?
                    (<Typography variant="span" color="red" sx={{ ml: '10px' }}>* {errors.quantity}</Typography>) : null}
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Estudiante</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      style={{ width: "100%" }}
                      type="input"
                      label="Estudiante"
                      name="category"
                      variant="outlined"
                      onChange={handleChange}
                      value={values.category}
                    >
                      <MenuItem value={0.8}>Estudiante</MenuItem>
                      <MenuItem value={0.5}>Trainee</MenuItem>
                      <MenuItem value={0.15}>Junior</MenuItem>
                    </Select>
                  </FormControl>
                  {errors.category && touched.category && errors.category ?
                    (<Typography variant="span" color="red" sx={{ ml: '10px' }}>* {errors.category}</Typography>) : null}
                </Grid>
                <Grid item xs={12} >
                  <Typography variant='h6' sx={{ backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px', color: 'blue' }} className='totalPrice'>Total a Pagar: ${price}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="success" style={{ width: '100%' }} sx={{ padding: '10px' }} type="reset">Borrar</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="success" style={{ width: '100%' }} sx={{ padding: '10px' }} type="submit">Resumen</Button>
                </Grid>
              </Grid>
            </Box>
            <UpdateValues />
          </form>
        )}
      </Formik>
    </Container >
  )
};

export default RegistrationForm