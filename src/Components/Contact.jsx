import React from 'react'
import  './Contact.css'
import { useState } from 'react'
const Contact = () => {
    const[value, setValue] = useState()
    const [formValue, setFormValue] = useState({name:"", email:"", message:""});


    const handleChange = (key,val) => {
        setFormValue({...formValue, [key]: val})
    }
    const handlemessage = (e,key) => {
        if(key === 'hi'){
            setFormValue({...formValue, message: ''})
            setValue(key)
    }else{
        setFormValue({...formValue, message: "We're interested in your services! Please contact us"})
        setValue(key)
    }
 }
  return (
    <div className='contact-screen'>
        <div className="contact-head">
            <h4>Contact Us</h4>
            <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>

        </div>

        <div className="contact-content">
    <div className="left">
        <div className="radio-box">
        <div className="form-check">
            <input checked={value === 'hi'?true:false} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={(e)=>handlemessage(e,'hi')} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
                Say Hii 
            </label>
        </div>
        <div className="form-check">
            <input checked={value === 'quote'?true:false} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={(e)=>handlemessage(e,'quote')} />
            <label className="form-check-label" htmlFor="flexRadioDefault2" >
               Get a Quote
            </label>
        </div>
        </div>
        
        <label htmlFor="name">Name:</label> <br />
        <input value={formValue?.name} type="text" name="name" id="name" placeholder='Name' onChange={(e)=>handleChange('name',e.target.value)} /> <br />
        
        <label htmlFor="email">Email:</label> <br />
        <input value={formValue?.email} type="email" name="email" id="email" placeholder='Email' onChange={(e)=>handleChange('email',e.target.value)}/> <br />
        
        <label htmlFor="message">Message:</label> <br />
        <textarea  value={formValue?.message} name="message" id="message" cols="30" rows="5" placeholder='Message' onChange={(e)=>handleChange('message',e.target.value)}></textarea> <br />
        
        <button>Submit</button>
    </div>

    {/* Image on the right side */}
    <img src="contact.png" alt="Contact" />
</div>

    </div>
  )
}

export default Contact