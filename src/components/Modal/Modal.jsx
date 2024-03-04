import { useState } from 'react';
import Modal from 'react-modal';
import css from './Modal.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
   
  },
};
Modal.setAppElement('#root');

export const ContactModal = ({onDelete}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = ()=> {
    setIsOpen(false);
  }

  return (
     <div >
      <button onClick={openModal}>Delete contact</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Modal"
      >
        <div>Are you shure you want to delete this contact?</div>
        <div className={css.modalBtn_wrapper}>
          <button onClick={closeModal}>No</button>
        <button onClick={onDelete}>Yes</button>
        </div>
      </Modal>
    </div>
  );
}