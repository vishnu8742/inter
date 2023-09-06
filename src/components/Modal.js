import './Modal.css'
export default function Modal({close}) {
  return (
    <div className='modal-background'>
    <div className='Modal'>
      <div className="head">
        <button className='cancel-button' onClick={()=>close(false)}>x</button>
      </div>
      <div className="modal-body">
        <form action="" className='modal-form'>
            <label htmlFor="">First Name</label>
            <input type="text" required placeholder='enter your firstname'/>
            <label htmlFor="">Last Name</label>
            <input type="text" required placeholder='enter your lastname'/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='enter your email'/>
            <label htmlFor="">Phone number</label>
            <input type="tel" required placeholder='enter your phonenumber'/>
            <button>submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}
