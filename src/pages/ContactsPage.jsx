import {  useDispatch } from "react-redux";
import { UserMenu } from "../components/UserMenu/UserMenu";
// import { selectUser } from "../redux/auth/selectord";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import { SearchBar } from "../components/SearchBar/SearchBar";

export default function ContactsPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <UserMenu />
      <ContactForm />
      <SearchBar/>
      <ContactList/>
    </div>
    )
    
  
}