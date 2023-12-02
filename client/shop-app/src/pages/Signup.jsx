import React from 'react'

const Signup = () => {
  return (
    <section className='signup-section'>
      <form className="signup-form">
        <div className='signup-user-name'>
          <label htmlFor="user-name">Name:</label>
          <input type="text" name="user-name" className='user-name-input' />
        </div> 
        <div className='signup-user-email'>
          <label htmlFor="user-email">Email:</label>
          <input type="email" name="user-email" className='user-email-input' />
        </div>
        <div className='signup-user-password'>
          <label htmlFor="user-password">Password:</label>
          <input type="password" name="user-password" className='user-password-input' />
        </div>
        <div className='signup-user-confirm-password'>
          <label htmlFor="user-confirm-password">Confirm Password:</label>
          <input type="password" name="user-confirm-password" className='user-confirm-password-input' />
        </div>
        <div className='signup-user-contact'>
          <label htmlFor="user-contact">Phone Number:</label>
          <input type="number" name="user-contact" className='user-contact-input' />
        </div>
        <div className='signup-user-submit'>
          <input type="submit" name="user-submit" className='user-submit-input' />
        </div>

        




      </form>

    </section>
  )
}

export default Signup