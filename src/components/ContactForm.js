import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './ContactForm.css';


const ContactForm =(props)=>{

   const [textInput,setTextInput] = useState('');
   const [emailInput,setEmailInput] = useState('');


   const history = useHistory();




    const textInputHandler =(event)=>{
        setTextInput(event.target.value)
    }

    const emailInputHandler =(event)=>{
        setEmailInput(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(props)
        if(textInput === '' || emailInput ===''){
            alert('All fields are mandatory')
            return;
        }

    
        props.updateContact({name: textInput, email: emailInput});
        setTextInput('');
        setEmailInput('');
       history.push('/');
    }

    return(
        <div className='contactForm'>
            <h2>Add Contact</h2>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor='nameInput'>Name</label>
                    <input type='text' placeholder='Name' value={textInput} onChange={textInputHandler} id='nameInput'/>
                </div>
                <div className='form-control'>
                     <label htmlFor='emailInput'>Email</label>
                    <input type='email' placeholder='Email' id='emailInput' value={emailInput} onChange={emailInputHandler}/>
                </div>

                <button className='btn' type='submit'>Add</button>
            </form>
        </div>
    )
}

export default ContactForm;