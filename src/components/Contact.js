import React from 'react';
import './ContactStyles.css';
function Contact() {
  return (
    <div>
      <div className='rectangle'>
        <p className='tit1'>Contact</p>
        <hr/>
        <div className='zonee'>
          <p className='titt1'>I’M ALWAYS OPEN TO DISCUSSING PRODUCT</p>
          <p className='titt2'>DESIGN WORK OR PARTNERSHIPS.</p>
          <p className='name'>Name *</p>
          <hr className='hrr'/>
          <p className='name'>Email *</p>
          <hr className='hrr'/>
          <p className='name'>Message *</p>
          <hr className='hrr'/>
          <div className='zonnee'><p className='sub'>submit</p></div>
        </div>
        <div className='footer'>
      <p className='fini'>© 2021 All Rights Reserved by ib-themes.</p>
    </div>
     </div>

    </div>
  );
}

export default Contact;
