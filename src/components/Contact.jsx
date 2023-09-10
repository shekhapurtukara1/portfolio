import React from 'react'
import "../componentStyling/Contact.css"
const Contact = () => {
  return (
    <div className='contact-container'>
      <h2 className='contact-heading'>Contact</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2981919735475!2d78.38881797471278!3d17.493273299747035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9186c9216501%3A0x5b92f2e1fd8fc012!2sJawaharlal%20Nehru%20Technological%20University%20Hyderabad!5e0!3m2!1sen!2sin!4v1692528692797!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}}
       allowFullScreen="" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
       </iframe>
       <div className="form-containter">
            <form action="https://formspree.io/f/meqbgeql" method="POST" className='contact-form'>
              <div className="name-field">
              <label htmlFor="name">Name :</label>
              <input type="text" placeholder='Name' 
              name='name'
              className='input-txt'
               autoComplete='off'
              required
              />
              </div>
              <div className="email-field">
              <label htmlFor="mail">Email :</label>
              <input type="email" placeholder='Email' 
              className='input-mail'
              name='name'
               autoComplete='off'
              required
              />
              </div>
              <textarea name="message" placeholder="Message" className='text-area' cols={30} rows={6}></textarea>
              <input type="submit" className='submit-btn'/>
            </form>
       </div>
    </div>
  )
}

export default Contact