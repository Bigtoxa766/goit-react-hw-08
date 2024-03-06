import { useId } from "react";
import toast from 'react-hot-toast';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { nanoid } from "@reduxjs/toolkit";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 symbols long")
    .max(20, "Maximum 20 symbols")
    .required('This field is required'),
  number: Yup.number()
    .integer('Please enter the integer value')
    .required('This field is required')
})

export const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);
  const contactName = items.map(({ name }) => name);
  const contactNumber = items.map(({ number }) => number);
  
  const handleSubmit = (values, actions) => {

    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    }

    if (contactName.includes(values.name)) {
      toast.error('Contact name already exist')
      actions.resetForm();
      return
    }

    if (contactNumber.includes(values.number)) {
      toast.error('Contact number already exist')
      actions.resetForm();
      return
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik initialValues={{
      name: '',
      number: ''
    }} onSubmit={handleSubmit}
      validationSchema={contactSchema}>
      
      <Form className={css.form_container} >
        <label className={css.form_lable} htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error_message} name="name" component="span" />
        
        <label className={css.form_lable} htmlFor={numberId}>Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage className={css.error_message} name="number" component="span" />
        
        <button className={css.form_btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  )
};