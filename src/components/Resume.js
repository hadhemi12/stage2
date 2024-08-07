import React from 'react';
import './ResumeStyles.css';

function Resume() {
  return (
    <div className='rectangle'>
      <p className='about'>Resume</p>
      <hr />
      <div>
      <img className='image1' src={"https://img.freepik.com/vecteurs-premium/creation-logo-ecole-education_586739-4435.jpg?w=360"} alt='logo1'/>
      <p className='edu'>Education</p>
      </div>
      <img className='image2' src={"https://png.pngtree.com/png-vector/20210617/ourlarge/pngtree-abstract-line-drawing-graduates-with-diploma-and-graduation-cap-png-image_3481155.jpg "} alt='logo2'/>
      <p className='exp'>Experience</p>
      <div className='rectangle1'>
        <p className='p1'>2021-2023</p>
        <br/>
        <p className='p2'>Ph.D in Horriblensess</p><p className='p3'>- ABC University,</p>
        <br/>
        <p className='p4'>Los Angeles, CA </p>
      </div>
      <div className='rectangle2'>
        <p className='pp1'>2019 - Present</p>
        <p className='pp2'>Sr. Software Tester</p>
        <p className='pp3'>Google Inc.</p>
      </div>
      <div className='rectangle3'>
        <p className='f1'> 2017-2021</p>
        <p className='f2'>ComputerScience </p> <p className='f3'>Imperialize </p>
        <p className='f4'>Technical Institute</p>
      </div>
      <div className='rectangle4'>
        <p className='ff1'> 2015-2017</p>
        <p className='ff2'>Cr. Web Developer </p> 
        <p className='ff3'>ib-themes ltd.</p>
      </div>
      <div className='rectangle5'>
        <p className='g1'> 2015-2017</p>
        <p className='g2'>Graphic Designer </p> <p className='g3'>- Web Graphy, </p>
        <p className='g4'>Los Angeles, CA</p>
      </div>
      <div className='rectangle6'>
        <p className='gg1'> 2014-2015</p>
        <p className='gg2'>Jr. Web Developer </p> 
        <p className='gg3'>Creative Gigs.</p> 
      </div>
      <div className='footer'>
        <p className='tit1'>Working Skills</p>
        <p className='tit2'>Knowledges</p>

        <p className='web'>Web Design</p> <p className='p85'>85%</p>
        <div className='r1'></div>
        <div className='r2'></div>

        <p className='mobile'>Mobile App </p> <p className='p85'>55%</p>
        <div className='r1'></div>
        <div className='r3'></div>

        <p className='web'>Illustrator</p> <p className='p85'>65%</p>
        <div className='r1'></div>
        <div className='r4'></div>

        <p className='web'>Photoshope</p> <p className='p85'>72%</p>
        <div className='r1'></div>
        <div className='r5'></div>

        <div className='z1'><p className='mot1'>Digital Design</p></div>
        <div className='z2'><p className='mot2'>Marketing</p></div>
        <div className='z3'><p className='mot3'>Communication</p></div>
        <div className='z4'><p className='mot3'>Social Media</p></div>
        <div className='z5'><p className='mot3'>Time Management</p></div>
        <div className='z6'><p className='mot3'>Flexibility</p></div>
        <div className='z7'><p className='mot3'>Print</p></div>
      </div>
      <p className='fin'>© 2021 All Rights Reserved by ib-themes.</p>

      
      
    </div>
  );
}

export default Resume;
