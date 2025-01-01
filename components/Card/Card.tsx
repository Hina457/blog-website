import React from "react";
import Image from "next/image";

type propCard = {
  id:string,
  image: string;
  title: string;
  description: string;
  
};
const Card = ({image, title, description}: propCard) => {
  return (
    <div className=" justify-center p-2 bg-white items-center border-2 border-secondary rounded-lg  flex flex-col transition-transform hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="h-48 w-full  rounded-md mb-4"
      />
      <h3 className="font-bold text-3xl font-serif text-center py-5 text-black animate-bounce delay-0 ">{title}</h3>
      <p className="mb-5 text-black line-clamp-1 ">{description}</p>
      <div className="flex justify-center items-center ">
        <button
          
          className="rounded-lg bg-gray-400 hover:bg-yellow-100 hover:text-black hover:border-2 hover:border-secondary py-3 px-5"
        > 
          Visit
        </button>
      </div>
    </div>
  );
};

export default Card;