import React , { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = { name, email, message };
    console.log(formData); 
    alert('Formulaire soumis avec succès !'); 
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <div className="w-[850px] h-[1345px] -top-[490px] -left-[205px] rounded-[20px] bg-black ml-[250px] mt-[40px]">
        <p className="font-['Roboto_Slab'] text-[40px] font-bold leading-[52.75px] text-left text-white ml-[30px] mt-[10px]">Contact</p>
        <div><hr className="w-[200px] border border-solid mt-[-20px] mr-[400px] ml-[220px] text-[rgba(250,82,82,1)]"/></div>

        <form className="w-[730px] h-[788px] border-2 border-[#212425] rounded-[20px] mt-[60px] ml-[55px] " onSubmit={handleSubmit}>
          <div><p className="font-poppins text-[25px] font-normal leading-[41px] text-[#a6a6a6] ml-[20px] mt-[10px]">I’M ALWAYS OPEN TO DISCUSSING PRODUCT</p></div>
          <div><p className="font-poppins text-[25px] font-semibold leading-[41px] text-[#ededed] ml-[20px]">DESIGN WORK OR PARTNERSHIPS.</p></div>

          <div><label className="font-dm-sans text-[20px] font-medium leading-[20.83px] tracking[-0.025em] text-[#a6a6a6] ml-[50px] mt-[50px]" htmlFor="name">Name *</label></div>
          <div>
          <input
              id="name"
              type="text"
              className="block w-[630px] h-[40px] mt-3 p-2 border border-[#333] rounded-[6px] bg-[#1a1a1a] text-white ml-[50px]"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          
          <div><label className="font-dm-sans text-[20px] font-medium leading-[20.83px] tracking[-0.025em] text-[#a6a6a6] ml-[50px] mt-[50px]" htmlFor="email">Email *</label></div>
          <div>
          <input
              id="email"
              type="email"
              className="block w-[630px] h-[40px] mt-3 p-2 border border-[#333] rounded-[6px] bg-[#1a1a1a] text-white ml-[50px]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />  
          </div>

          <div><label className="font-dm-sans text-[20px] font-medium leading-[20.83px] tracking[-0.025em] text-[#a6a6a6] ml-[50px] mt-[50px]" htmlFor="message">Message *</label></div>
          <div>
          <textarea
              id="message"
              className="block w-[630px] h-[120px] mt-3 p-2 border border-[#333] rounded-[6px] bg-[#1a1a1a] text-white ml-[50px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-[120px] h-[40px] p-[12px_34px] mt-10 ml-[50px] rounded-[12px] border-2 border-[#a6a6a6] bg-[#000] text-[#f0f8ff]">
            Submit
          </button>
        </form>

        <div className="w-[850px] h-[68px] top-[787px] left-[-205px] rounded-b-[20px] mt-[400px] bg-[#0d0d0d]">
          <p className="font-poppins text-[16px] font-normal leading-[28px] text-[#a6a6a6] text-center mt-[30px]">© 2021 All Rights Reserved by ib-themes.</p>
        </div>
     </div>

    </div>
  );
}

export default Contact;
