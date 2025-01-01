
"use client";

import {posts} from "@/lib/data"
import Image from "next/image"
import React, { useState } from 'react';
export default function BlogPostpage({params}:{params:{blogid:string}}){

    const Data =  posts.find((blog)=>blog.id === params.blogid)
    console.log(Data)
      
    //  Comment state
    const [comments, setComments] = useState<{ text: string; author: string }[]>([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

    if(!Data){
        return(
            <div>
                No blog post Available
            </div>
        )
    }


    
  // Function to handle adding a comment
  const handleAddComment = () => {
    if (newComment.trim() !== '' && author.trim() !== '') {
      setComments((prevComments) => [
        ...prevComments,
        { text: newComment, author },
      ]);
      setNewComment('');
      setAuthor('');
    }
  };


    return(
        <div>

<div className="flex mt-9 justify-center items-center px-4 md:px-8 lg:px-16">
    <Image src={Data.image} alt={Data.title} width={1000} height={500} className="w-full max-w-[1000px] h-auto" />
</div>

<h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl font-serif mt-6">{Data.title}</h1>
<div className="flex justify-center items-center px-4 md:px-8 lg:px-16">
    <p className="mt-7 text-gray-500 font-serif text-base md:text-lg lg:text-2xl w-full max-w-[1000px] h-auto">{Data.description}</p>
</div>

{/* Comment Section */}
<div className="bg-white px-4 md:px-8 lg:px-16">
    {/* Displaying Comments */}
    <ul className="space-y-4 pb-3">
        {comments.map((comment, index) => (
            <li key={index} className="p-4 rounded-lg shadow-md bg-gray-100">
                <p className="text-gray-800">
                    <span className="font-bold text-blue-500">{comment.author}</span>
                    <span className="text-gray-600"> says:</span>
                </p>
                <p className="mt-2 text-gray-700">{comment.text}</p>
            </li>
        ))}
    </ul>

    {/* Add Comment Form */}
    <div className="flex justify-center items-center mt-6">
        <div className="p-6 rounded-lg shadow-lg bg-yellow-100 w-full max-w-[1000px]">
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-4">Add a Comment</h3>
            <div className="space-y-4">
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your Name"
                    className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment..."
                    className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
                <button
                    onClick={handleAddComment}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 w-full"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>


            
        </div>
    )
}