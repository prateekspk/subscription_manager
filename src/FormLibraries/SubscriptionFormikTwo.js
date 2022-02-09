import { Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';


export default function SubscriptionFormikTwo() {




  return <div>
<Formik
initialValues={{
    email: 'foobar@example.com',
    password: 'foobar',
  }}
  validationSchema={yup.object({
    email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  })}
  onSubmit={(values)=>{
      alert(JSON.stringify(values)) 
  }}
>
<form >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>


</Formik>


  </div>;
}
