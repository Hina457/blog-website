

import Link from "next/link"
export default function Header(){
    return(
        
        <div>
            <div className="w-full h-[80px]  bg-slate-700">
                <ul className="inline-flex text-center ml-[43%] text-white font-serif text-[20px] hover:text-black mt-[24px] gap-7">
                <li className=" animate-bounce delay-0 "><Link href="/."   >Home</Link></li>
                   <li className=" animate-bounce delay-0 "><Link href="/Blogs   ">Blogs</Link></li>
                    <li className=" animate-bounce delay-0 "><Link href="/About   ">About</Link></li>
                    <li className=" animate-bounce delay-0 "><Link href="/Contact  ">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}