


import { FaFacebook ,FaInstagram, FaTwitter,FaLinkedin }  from "react-icons/fa";

export default function Footer(){
    return(
        <div>
              

    
            
         <div className="w-[1500px] h-[684px] p-[80px] gap-[80px]  bg-green-950 ">
            
                
            <div className="w-[1120px] h-[82px] justify-between  flex ">
                <div className="w-[500px] h-[51px]">

                <h2 className="font-Roboto font-semibold leading-[27px] text-white">ADDRESS</h2>
                <p className="font-Roboto font-medium leading-[24px] text-white">Plot No 1/47 Willayatabad Manghopir Road, Karachi , Pakistan.</p>
                </div>
                  <div className="w-[400px] h-[82px] gap-[20px] ">
                <input className="border border-black bg-white w-[265px] h-[48px] rounded-[5px] p-[12px] gap-8px" type="email" placeholder="Enter your Email"></input>
                <button className="w-[119px] h-[48px] rounded-[5px] border pt-[12px] pr-[24px] pb-[12px] pl-[24px] ml-[10px] gap-[8px] border-black bg-white" type="button">Subscribe</button>
                 <p className="font-Roboto font-normal leading-[18px] bg- decoration-underline mt-[20px] text-white ">By subscribing you agree to with our Privacy Policy</p> 
            </div>
            </div>

       
        <div className="W-[1120PX] h-[225px] gap-[40px] flex  mt-[40px] ">
            <div className="w-[250px] h-[225px] gap-[16px] ">
                {/* <Image src={logo} alt="" width={130} height={40}/> */}
            </div>
            <div className="w-[250px] h-[225px] gap-[16px] text-white ">
                <h2 className="font-semibold text-Regular leading-[24px]">AGILE HELP CENTER</h2>
                <ul>
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">021 32555557</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Cellphone:
                 0345-6878326</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">WhatsApp:
                 0345-6878326</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Email:customer@dr-rashel-official.com
                 </li>
            
                 </ul>
            </div>
            <div className="w-[250px] h-[225px] gap-[16px] text-white">
            <h2 className="font-semibold text-Regular leading-[24px]">Policies</h2>
                <ul>
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Return & Refund Policy</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Privacy Policy</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Shipping Policy</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Operational Hours</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Terms of Service</li>
                 </ul>
            </div>
            <div className="w-[250px] h-[225px] gap-[16px] text-white ">
            <h2 className="font-semibold text-Regular leading-[24px]">About Us</h2>
                <ul>
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Contact</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Help/Support</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">FAQ</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Terms and Conditions</li>
                 
                 <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Partners</li>
                 </ul>
            </div>
        </div>
        <div className="w-[1120px] h-[1px] bg-white mt-[70px]"></div>
        <div className="w-[1120px] h-[57px] gap-[32px] "></div>

            <div className="w-[1120px] h-[24px] justify-between  flex">
                <div className="w-[900px] h-[21px] gap-24px  flex">
          <h1 className="font-Roboto font-normal leading-[21px] mr-4 text-white ">2023 Ddsgnr All right reserved.</h1>

            <div className="W-[345px] h-[21px] gap-[24px]   font-normal">
                <ul className="flex gap-[20px] font-Roboto leading-[21px] font-sm text-white">
                    <li className="underline">Privacy Policy</li>
                    <li className="underline ">Terms of Service</li>
                    <li className="underline">Cookies Settings</li>
                </ul>
                </div>
</div>
                <div className="icons w-[132px] h-[24px] gap-[20px]  flex ml-[100px] text-white">
            <FaFacebook/>
            <FaInstagram/>
            <FaTwitter/>
            <FaLinkedin/>
                    
                </div>
            
        </div>
       </div>
        </div>
    )
}
    
  