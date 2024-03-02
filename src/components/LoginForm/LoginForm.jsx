import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(login({
      email: form.elements.email.value,
      password: form.elements.password.value
    }))

  }
  return (
    <form  onSubmit={handleSubmit} autoComplete="off">
      <label >
        Email
        <input type="email" name="email" />
      </label>
      <label >
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  )
}