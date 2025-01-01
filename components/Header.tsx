
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
    return (
        <div>
            {/* Header Container */}
            <div className="w-full h-[80px] bg-slate-700 ">
       
                 
                {/* Navigation Menu */}
                <div className=" flex justify-center items-center">
                <div className="sm:flex hidden text-white space-x-10 mt-7">


              
                    <Link href="/">Home</Link>
                    <Link href="/Blogs">Blogs</Link>
                    <Link href="/About">About</Link>
                    <Link href="/Contact">Contact</Link>
                

                </div>
                </div>

                <div className="sm:hidden relative">
    <Sheet>
        <SheetTrigger>
            <IoMdMenu className="text-white absolute top-0 right-0" />
        </SheetTrigger>
        <SheetContent className="w-[200px] sm:w-[540px] ml-auto right-0">
            <ul className="space-y-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/Blogs">Blogs</Link></li>
                <li><Link href="/About">About</Link></li>
                <li><Link href="/Contact">Contact</Link></li>
            </ul>
        </SheetContent>
    </Sheet>
</div>


            </div>





        </div>
    );
}
