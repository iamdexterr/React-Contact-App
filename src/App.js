import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { uuid } from 'uuidv4';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Header from './components/Header';
import ContactDetail from './components/ContactDetail';
import ConfirmationBox from './components/ConfirmationBox';
import './App.css';

function App() {

  const [contacts,setContacts] = useState([]);
  const [deletingContactId,setDeletingContactId] =useState('');
  const [confirmBox,setConfirmBox] = useState(false);
  // const [confirm,setConfirm] = useState(undefined);



  const updateContact = (contact)=>{
    setContacts([...contacts,{id: uuid(), ...contact}]);
  }

  const getConfirmation =(confirmation)=>{  
    // setConfirm(confirmation);
    if(confirmation===true){
          const newContacts = contacts.filter(contact=>{
            return contact.id != deletingContactId;
          })
          
      
          setContacts(newContacts);
        }
    setConfirmBox(false);
  } 

  const confirmDialouge = (id)=>{
    setDeletingContactId(id);
    setConfirmBox(true);

  }

  // const removeContactHandler =(id)=>{

  //   if(confirm===true){
  //     const newContacts = contacts.filter(contact=>{
  //       return contact.id != id;
  //     })
      
  
  //     setContacts(newContacts);
  //   }
    
  // }
  
  // console.log(confirm)




  useEffect(() => {
    
    const retriveContacts = JSON.parse(localStorage.getItem('contactInfo'));

    if(retriveContacts){
      setContacts(retriveContacts);
    }

  }, [])

  useEffect(() => {
    
    localStorage.setItem('contactInfo',JSON.stringify(contacts));

  }, [contacts])

 




  return (
    <Router>
    <Header/>
    <Switch>

    <Route path='/' exact>
        <ContactList  contacts={contacts} confirmDialouge={confirmDialouge}/>
        {/* <ContactList  contacts={contacts} removeContact={removeContactHandler}/> */}
    
          {confirmBox &&  <ConfirmationBox getConfirmation={getConfirmation}/>}
      </Route>
      
      <Route path='/add' exact>
      <ContactForm updateContact={updateContact}/>  

      </Route>

      <Route path='/contact/:id'>
          <ContactDetail contact={contacts} />
      </Route>

    </Switch> 

    </Router>
  );
}

export default App;
