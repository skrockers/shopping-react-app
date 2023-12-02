import React from 'react'

const LoginBanner = ({srcUrl}) => {
  return (
    <section className="image-ads-section">
      <div className='login-ads-banner'>
        <img src={srcUrl} alt="" />
      </div>

    </section>
  )
}

export default LoginBanner;