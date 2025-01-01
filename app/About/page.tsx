

import Image from "next/image";

export default function About() {
    return (
        <div>
            {/* Container for Background */}
            <div className="px-4 md:px-8 lg:px-16 min-h-screen bg-black bg-[url('/bg.jpg')] bg-cover bg-center pt-8 pb-8">
                {/* Image Section */}
                <div className="flex justify-center items-center opacity-80 hover:scale-105 transition-transform duration-300">
                    <Image
                        src="/hina.jpg"
                        alt="Hina Alvi"
                        width={200}
                        height={200}
                        className="rounded-full mt-3"
                    />
                </div>

                {/* Content Section */}
                <div className="flex justify-center items-center mt-8">
                    <div className="w-full max-w-[600px] bg-yellow-100 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <h1 className="text-center text-2xl sm:text-3xl font-bold font-serif mt-4 hover:text-blue-700 transition-colors duration-300">
                            HINA ALVI
                        </h1>
                        <p className="mt-6 text-sm sm:text-base font-serif leading-relaxed text-gray-800">
                            My path as a front-end developer started nearly two years ago, transitioning from a web design background. During this time, I have developed a solid skill set in both front-end and back-end development, gaining proficiency in a variety of technologies and tools. I now specialize in creating intuitive, user-friendly interfaces and developing scalable, efficient server-side solutions.
                        </p>
                        <p className="mt-4 text-sm sm:text-base font-serif leading-relaxed text-gray-800">
                            Currently, I am enhancing my expertise through a specialized course in artificial intelligence. This focus reflects my dedication to remaining at the forefront of technological advancements and my enthusiasm for exploring the connections between AI and software development. My aim is to utilize my diverse skills and experiences to contribute to impactful projects and drive innovation in the tech industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
