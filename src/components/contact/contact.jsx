import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <br/>
      <div  id="badge-ribbon" ><a  target="_blank" href="https://www.medreviews.co.il/provider/dr-frenkin-yulia" > תראו מה אומרים עלי  &#128172;</a></div>
      <br/>
      
      <br/>
      <br/>
      <div className="inner-contact">
      <div className="contact-background">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.6420761592963!2d34.80800018491138!3d31.88914768124909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b7118cb168b1%3A0x45ae702297973fa1!2z16nXkNeV15wg15jXqdeo16DXmdeX15XXkdeh16fXmSA2Nywg16jXl9eV15HXldeq!5e0!3m2!1siw!2sil!4v1658873741712!5m2!1siw!2sil" width={300} height={300} style={{border:"0",width:"100%", height:"100%",padding:"5px",opacity:'0.6',}}  ></iframe>
      </div>
      <div className="contact-details" id='contact'>
        <h1>השאר/י פרטים ונחזור אלייך</h1>
        
        <form >
          <h3 >שם</h3>
          <input/>
          <h3>טלפון</h3>
          <input/>
          <button type="submit" className="submit-button">שלח</button>
        </form>
        
      </div>
      </div>
    </div>
  )
}

export default Contact