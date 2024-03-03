import {  useSelector } from "react-redux";
import { UserMenu } from "../components/UserMenu/UserMenu";
import { selectUser } from "../redux/auth/selectord";
import { ContactForm } from "../components/ContactForm/ContactForm";

export default function ContactsPage() {

console.log( useSelector(selectUser))
  return (
    <div>
      <UserMenu />
      <ContactForm/>
    </div>
    )
    
  
}