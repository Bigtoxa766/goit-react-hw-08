import { useDispatch } from "react-redux";
import { UserMenu } from "../components/UserMenu/UserMenu";
import { useAuth } from "../redux/hooks/useAuth";
import { logout } from "../redux/auth/operations";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  return (
    <div>
      <h1>Welcone {user.name}</h1>
      <button type="button" onClick={() => {
        dispatch(logout())
      }}>Log Out</button>
    </div>)
    
  
}