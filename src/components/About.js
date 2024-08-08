import React from 'react';
import './AboutStyles.css';

function About(){
  return(
    <div className='rectangle21'>
      <p className='about'>About Me</p>
      <hr />
      <p className='text1'>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web
        <br/> development and print media. I enjoy turning complex problems into simple, 
        <br/>beautiful and intuitive designs.
        <br/>
        <br/>My aim is to bring across your message and identity in the most creative way. 
        <br/>I created web design for many famous brand companies.
      </p>
      <p className='what'>What I do!</p>


      <div className='rectangle-1'>
        <img className='image11' src={"https://png.pngtree.com/element_our/png/20180926/eagle-bird-logo-vector-template.-business-logo-concept-png_113252.jpg"} alt='logo1'/>
        <p className='ui'>Ui/Ux Design</p>
        <p className='lorem'>Lorem ipsum dolor sit amet,
          <br/> consectetuer adipiscing elit,
          <br/> sed diam euismod tincidunt 
          <br/>volutpat.
        </p>
      </div>
      <div className='rectangle-2'>
        <img className='image22' src={"https://www.logologo.com/logos/abstract-isometric-logo-design-free-logo.jpg"} alt='logo2'/>
        <p className='app'>App Development</p>
        <p className='ipsum'>Lorem ipsum dolor sit amet, 
          <br/>consectetuer adipiscing elit,
          <br/> sed diam euismod tincidunt
          <br/> volutpat.
          </p>
      </div>


      <div className='rectangle-3'>
      <img className='image33' src={"https://static.vecteezy.com/ti/vecteur-libre/t1/6998434-photo-camera-icons-photo-camera-icon-vector-design-illustration-photo-camera-simple-sign-photo-camera-logo-vector-vectoriel.jpg"} alt='logo3'/>
        <p className='phot'>Photography</p>
        <p className='dolor'>Lorem ipsum dolor sit amet, 
          <br/>consectetuer adipiscing elit,
          <br/> sed diam euismod tincidunt
          <br/> volutpat.
          </p>
      </div>
      <div className='rectangle-4'>
      <img className='image44' src={"https://img.freepik.com/vecteurs-libre/modele-logo-conectivite-moderne_23-2147934052.jpg"} alt='logo4'/>
        <p className='web'>Web Development</p>
        <p className='sit'>Lorem ipsum dolor sit amet, 
          <br/>consectetuer adipiscing elit,
          <br/> sed diam euismod tincidunt
          <br/> volutpat.
          </p>
      </div>

      <div className='footer1'>
        <p className='client'>Clients</p>
        <img className='f11' src={"https://ih1.redbubble.net/image.1161749151.5634/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"} alt='f1'/>
        <img className='f22' src={"https://as1.ftcdn.net/v2/jpg/03/20/88/34/1000_F_320883488_PMmkQget359WtY6foB1xFN3Wcvus6WTM.jpg"} alt='f2'/>
        <img className='f33' src={"https://img.freepik.com/vecteurs-premium/icone-application-whatsapp-messagerie-populaire-logo-medias-sociaux-illustration-vectorielle_277909-406.jpg?semt=ais_hybrid"} alt='f3'/>
      </div>
      <p className='last'>© 2021 All Rights Reserved by ib-themes.</p>
    </div>
  );
}
export default About;
