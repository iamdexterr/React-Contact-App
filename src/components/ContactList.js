import ContactCard from './ContactCard';
import './ContactList.css';
import { Link } from 'react-router-dom';


const ContactList = (props)=>{

    // const contacts = JSON.parse(localStorage.getItem('contactInfo'));
    const contacts = props.contacts;


    
    const contactList = contacts.map(contact=>{
            return  <ContactCard name={contact.name} email={contact.email} id={contact.id} confirmDialouge={props.confirmDialouge}/>
          })
     
    
   

    return (
        <div className='contactList'>
            <div className='head'>
                <h2>Contact List</h2>
                <Link to='/add'>
                <button className='btn'>Add Contact</button>
                </Link>
            </div>

                {contactList}
        
        </div>
    )

}

export default ContactList;