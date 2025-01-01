



import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";

export default function Main() {
  return (
    <div>
      <div className="w-full h-[1000px] bg-black bg-[url('/bg.jpg')] bg-cover bg-center">
        <h1 className="text-white text-center text-4xl font-serif pt-[20%] sm:text-5xl md:text-6xl">
          Welcome to My Blogs
        </h1>
        <p className="text-center text-white w-[90%] md:w-[600px] mx-auto mt-4 font-serif text-base sm:text-lg md:text-xl">
          In today s fast-paced world, Information Technology (IT) is the backbone of innovation and efficiency. From cloud computing and AI-driven solutions to cybersecurity and seamless connectivity, IT is transforming how we live, work, and grow.
        </p>
        <div className="flex justify-center items-center mt-5">
          <button className="w-[180px] h-[60px] rounded-md hover:bg-blue-950 text-gray-600 font-serif bg-white text-bold font-bold">
            <Link href="/Blogs">Explore Blogs</Link>
          </button>
        </div>
        <div className="flex gap-6 justify-center items-center mt-6">
        <Link href={"/."}><FaLinkedin className="w-[30px] h-[30px] bg-white animate-bounce delay-0 sm:w-[40px] sm:h-[40px]" /></Link>
        <Link href={"/."}> <FaGithub className="w-[30px] h-[30px] bg-white animate-bounce delay-0 sm:w-[40px] sm:h-[40px]" /></Link>
        <Link href={"/."}><FaFacebookSquare className="w-[30px] h-[30px] bg-white animate-bounce delay-0 sm:w-[40px] sm:h-[40px]" /></Link>
        </div>
      </div>
    </div>
  );
}
