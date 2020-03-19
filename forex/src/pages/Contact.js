import React from 'react'
 const Contact = () => {
    return (
        <div>
             <section id="contact">
  
  <h1 className="section-header">CONTACT</h1>
  
  <div className="contact-wrapper">
    
     
    
    <form className="form-horizontal"   action="POST" data-netlify="true">
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value=""/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value=""/>
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"></textarea>
      <div data-netlify-recaptcha="true">

      </div>
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="button">
          <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
     
    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Nairobi |KE </span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel" title="Give me a call">+254 712477675</a></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">forexbiz@gmail.com</a></span></i></li>
          
        </ul>

        
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
        </ul>
      

        <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
</section>

            
 

</div>
        
    )
}
export default Contact;