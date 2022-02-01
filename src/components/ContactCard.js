import img from '../image/user.png';
import { Link } from 'react-router-dom';
import './ContactCard.css';
const ContactCard =(props)=>{

    return (
        <div className='contact-card' key={props.id}>
            <div className='info'>
                    <div className='imgbox'>
                        <img src={img}/>
                    </div>
                    <Link to={`/contact/${props.id}`}>
                    <div className='contentbox' >
                        <h3>{props.name}</h3>
                        <div>{props.email}</div>
                    </div>
                    </Link>
            </div>
            <div className='icon' onClick={()=> {
                props.confirmDialouge(props.id);
            }}>

            <i class="far fa-trash-alt"></i>
            </div>
        </div>

       
        
    )
}

export default ContactCard;