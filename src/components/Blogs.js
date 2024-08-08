import React from 'react';
import './BlogsStyles.css';
function Blogs() {
  return (
    <div className='rectangle'>
     <p className='tit1'>Blogs</p>
     <hr/>
     <div className='rectangle1'>
     <img className='image' src={"https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oYxKIpgbA7RVnAnCDAA81R8YEbrfKEDEfAfJiJ~tplv-tej9nj120t-origin.webp"} alt='img1'/>
      <p className='travel'>27 April - Inspiration </p>
      <p className='chul'>How to Own Your Audience by 
      <br/>Creating an Email List.</p>
     </div>
     <div className='rectangle2'>
     <img className='image' src={"https://i.pinimg.com/originals/7b/9a/86/7b9a862f7c60a8dac7f7bc69034ee5f1.jpg"} alt='img2'/>
      <p className='land'>06 october - Web Design </p>
      <p className='aura'>the window know to 
      <br/>say beside you</p>
     </div>
     <div className='rectangle3'>
     <img className='image' src={"https://mrwallpaper.com/images/thumbnail/aesthetic-beauty-of-a-beautiful-flower-bhqdkw48kdbe6yue.webp"} alt='img3'/>
      <p className='land'>12 March - Travel Landing </p>
      <p className='aura2'>Everything You Need to Know 
      <br/>About Web Accessibility.</p>
     </div>
     <div className='rectangle4'>
      <img className='image' src={"https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/owDAIgYbV8vEfM7bErRKAAefgABnWAADJAFSiE~tplv-tej9nj120t-origin.webp"} alt='img4'/>
        <p className='land'>15 november - Web Design </p>
        <p className='aura3'>Top 10 Toolkits for Deep Learning 
        <br/>in 2021.</p>
    </div>
    <div className='cercle1'></div>
    <div className='cercle2'></div>
    <div className='cercle3'></div>
    </div>
  );
}

export default Blogs;