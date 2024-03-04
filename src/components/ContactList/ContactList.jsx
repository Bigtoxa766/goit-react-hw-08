// import Fuse from 'fuse.js'
import css from './ContactList.module.css'
import { Contact } from "../Contact/Contact"
import {  useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { ContactModal } from '../Modal/Modal';



export const ContactList = () => {
  const filter = useSelector(state => state.filters);
  const { items } = useSelector(state => state.contacts);
  // const fuse = new Fuse(items, {
  //   keys: [
  //     'name',
  //     'number'
  //   ]
  // })

  // const fuseResults = fuse.search();
  // const fuseContactsResults = fuseResults.map(contact => contact.item)

  const filtredContacts = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()));
  
  const dispatch = useDispatch();
  
  return (
    <ul className={css.contact_list}>
      {filtredContacts.map(item => <li key={item.id} className={css.contact_item}>
        <Contact name={item.name} number={item.number} />
        <ContactModal onDelete={() => dispatch(deleteContact(item.id)) } />
      </li>)}
    </ul>
  )
}