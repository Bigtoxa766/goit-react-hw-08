import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from './LoginForm.module.css'
import { NavLink } from "react-router-dom";


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(login({
      email: form.elements.email.value,
      password: form.elements.password.value
    }))
    form.reset()

  }
  return (
    <form
      className={css.loginForm_container}
      onSubmit={handleSubmit}
      autoComplete="on">
      <div >
        <label className={css.loginForm_label} >
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.loginForm_label} >
        Password
        <input
          type="password"
          name="password" />
      </label>
      </div>
      <button type="submit">Log In</button>
      <NavLink
        className={css.navLink_goBack}
        to='/'>Go back</NavLink>
    </form>
  )
}