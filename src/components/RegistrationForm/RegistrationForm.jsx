import { Field, Form, Formik } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from './RegistrationForm.module.css'
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";


const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too short!")
    .max(20, "Too long! 20 symbols max").required("Required"),
  email: Yup.string().email('Must be valid email!')
    .required('Required!'),
  password: Yup.string().min(8, '8 symbols min!')
  .max(50, '50 symbols max!').required('Required')
})


export const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values)
    dispatch(register({
      name: values.username,
      email: values.email,
      password: values.password,
    }))
    actions.resetForm()
  }
  return (
    <Formik initialValues={{
      username: '',
      email: '',
      password: '',
    }}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}>
      <Form className={css.form_container}>
       
        <div className={css.field_wrap}>
          <label htmlFor={nameFieldId}>Username</label>
          <Field id={nameFieldId} type="text" name="username" />
          <ErrorMessage name="username" as="span" />
        </div>
      
        <div className={css.field_wrap}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field id={emailFieldId} type="text" name="email" />
          <ErrorMessage name="email" as="span" />
        </div>
        
        <div className={css.field_wrap}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field id={passwordFieldId} type="text" name="password" />
          <ErrorMessage name="password" as="span" />
        </div>

        <button type="submit">Registration</button>
      </Form>
    </Formik>
  )
}