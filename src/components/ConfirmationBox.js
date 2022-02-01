import './ConfirmationBox.css';

const ConfirmationBox =(props)=>{



    return (
        <div className='confirmPage'>
            <div className='confirmBox'>
                <div className='msg'>
                    Are you really want to Delete!!!
                </div>
                <div className='buttons'>
                     <button className='btn' onClick={()=>{props.getConfirmation(true)}}>Yes</button>
                     <button className='btn btn2' onClick={()=>{props.getConfirmation(false)}}>No</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationBox;