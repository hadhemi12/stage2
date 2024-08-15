import React from 'react';

function Contact() {
  return (
    <div>
      <div className="w-[850px] h-[1345px] -top-[490px] -left-[205px] rounded-[20px] bg-black ml-[250px] mt-[40px]">
        <p className="font-['Roboto_Slab'] text-[40px] font-bold leading-[52.75px] text-left text-white ml-[30px] mt-[10px]">Contact</p>
        <div><hr className="w-[200px] border border-solid mt-[-20px] mr-[400px] ml-[220px] text-[rgba(250,82,82,1)]"/></div>
        <div className="w-[730px] h-[788px] border-2 border-[#212425] rounded-[20px] mt-[60px] ml-[55px] ">
          <div><p className="font-poppins text-[25px] font-normal leading-[41px] text-[#a6a6a6] ml-[20px] mt-[10px]">I’M ALWAYS OPEN TO DISCUSSING PRODUCT</p></div>
          <div><p className="font-poppins text-[25px] font-semibold leading-[41px] text-[#ededed] ml-[20px]">DESIGN WORK OR PARTNERSHIPS.</p></div>

          <div><p className="font-dm-sans text-[20px] font-medium leading-[20.83px] tracking[-0.025em] text-[#a6a6a6] ml-[50px] mt-[50px]">Name *</p></div>
          <div><hr className="w-[630px] h-[1px] border border-solid mt-[35px] border-[#333] rounded-tl-[6px] mr-[400px] ml-[70px] "/></div>

          <div><p className="font-dm-sans text-[20px] font-medium leading-[20.83px] tracking[-0.025em] text-[#a6a6a6] ml-[50px] mt-[50px]">Email *</p></div>
          <div><hr className="w-[630px] h-[1px] border border-solid mt-[35px] border-[#333] rounded-tl-[6px] mr-[400px] ml-[70px] "/></div>

          <div><p className="font-dm-sans text-[20px] font-medium leading-[20.83px] tracking[-0.025em] text-[#a6a6a6] ml-[50px] mt-[50px]">Message *</p></div>
          <div><hr className="w-[630px] h-[1px] border border-solid mt-[35px] border-[#333] rounded-tl-[6px] mr-[400px] ml-[70px] "/></div>

          <div className="w-[120px] h-[40px] p-[12px_34px] gap-[10px] rounded-[12px] border-2 border-[#a6a6a6] bg-[#000] text-[#f0f8ff] mt-[100px] ml-[50px]">
            <p className="font-poppins text-[20px] font-medium leading-[26px] text-center text-white mt-[-5px] mr-[25px]">submit</p>
          </div>
        </div>
        <div className="w-[850px] h-[68px] top-[787px] left-[-205px] rounded-b-[20px] mt-[400px] bg-[#0d0d0d]">
          <p className="font-poppins text-[16px] font-normal leading-[28px] text-[#a6a6a6] text-center mt-[30px]">© 2021 All Rights Reserved by ib-themes.</p>
        </div>
     </div>

    </div>
  );
}

export default Contact;
