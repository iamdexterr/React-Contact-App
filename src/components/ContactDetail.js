import './ContactDetail.css';
import img from '../image/user.jpg';
import { Link,useParams } from 'react-router-dom';

const ContactDetail = (props) => {

    const {id} =useParams();

    const [selectedContact] = props.contact.filter(cont =>{
        return cont.id ===id;
    })

    console.log(selectedContact)

    return (
        <div>
            <div className='detailCard'>

                <div className='detailImg'>
                    <img src={img} />
                </div>
                <div className='detailContent'>
                    <h3>{selectedContact.name}</h3>
                    <p>{selectedContact.email}</p>
                </div>

            </div>
            <Link to='/'>
            <button className='btn btn2'>Bact to Contact List</button>
            </Link>
        </div>
    )

}

export default ContactDetail;