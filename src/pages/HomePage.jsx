import { NavLink } from "react-router-dom";


export default function HomePage() {
  return (
    <div>
      <NavLink to='/registration'>Sign In</NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </div>
  )
}