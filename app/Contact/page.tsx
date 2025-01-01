







export default function Contact() {
    return (
        <div className="px-4 md:px-8 lg:px-16  h-[800px] bg-black bg-[url('/bg.jpg')] pt-1">
            <div className="max-w-7xl mx-auto mt-8">
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="font-semibold text-2xl md:text-4xl text-white">Get In Touch With Us</h1>
                    <p className=" text-sm md:text-base mt-4 text-white">
                        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-1 gap-8">
                    {/* Left Section */}
                    <div className="space-y-8">
                        {/* Address Box */}
                        
                     
                        {/* Working Hours */}
                        
                    </div>

                    {/* Right Section */}
                    <div>
                        <form className="space-y-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-white">Your Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                                />
                            </div>
                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-white">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Abc@def.com"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                                />
                            </div>
                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-white">Subject</label>
                                <input
                                    type="text"
                                    placeholder="This is optional"
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                                />
                            </div>
                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-white">Message</label>
                                <textarea
                                    placeholder="Hi! I d like to ask about..."
                                   
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
                                ></textarea>
                            </div>
                            <button className="w-full py-3 bg-primary rounded-lg shadow text-white bg-blue-800 hover:bg-blue-900">Submit</button>
                        </form>
                    </div>
                </div>

                
            </div>
        </div>
        
    );
}
