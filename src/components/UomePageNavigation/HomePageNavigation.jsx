import { NavLink } from "react-router-dom";
import css from './HomePageNavigation.module.css'

export function HomePageNavigation() {
  return (
    <div className={css.homePage_wrapper}>
      <div className={css.navigation_container}>
      <NavLink to='/registration'>Sign In</NavLink>
      <NavLink to='/login'>Log In</NavLink>
    </div>
    <h3>Welcome to Phoneboock App. Here you can storage, add and remove you contacts</h3>
    </div>
  )
}