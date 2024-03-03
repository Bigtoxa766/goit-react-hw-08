import { useDispatch } from "react-redux"
import { logout } from "../../redux/auth/operations";
import { useAuth } from "../../redux/hooks/useAuth";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <button type="button" onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  );
}