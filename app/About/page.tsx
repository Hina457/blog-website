
import Image from "next/image"

export default function About(){
    return(
        <div>
            
        <div className="px-4 md:px-8 lg:px-16  h-[800px] bg-black bg-[url('/bg.jpg')] pt-1">
              <div className="flex justify-center items-center opacity-80 hover:scale-105">
           <Image src={"/hina.jpg"} alt="pic" width={200} height={200} className="rounded-[70%] mt-3"/>
            </div>
            <div className="flex justify-center items-center mt-5">
            <div className="w-[600px] h-[400px] bg-yellow-100 opacity-55 hover:scale-105">
                
            <h1 className="text-center pt-14 text-3xl font-bold font-serif mt-4 hover:text-blue-700">HINA ALVI</h1>
            <p className="font-serif">
                
            My path as a front-end developer started nearly two years ago, transitioning from a web design background. During this time, I have developed a solid skill set in both front-end and back-end development, gaining proficiency in a variety of technologies and tools. I now specialize in creating intuitive, user-friendly interfaces and developing scalable, efficient server-side solutions.

Currently, I am enhancing my expertise through a specialized course in artificial intelligence. This focus reflects my dedication to remaining at the forefront of technological advancements and my enthusiasm for exploring the connections between AI and software development. My aim is to utilize my diverse skills and experiences to contribute to impactful projects and drive innovation in the tech industry.

</p>
</div>
            </div>
            </div>
        </div>
    )
}