

import React from "react";
import Card from "@/components/Card/Card";
import {posts} from "../../lib/data"
import Link from "next/link";

const Blog = () => {
     
  return (
    <div className="px-4 md:px-8 lg:px-16  bg-[url('/bg.jpg')] pt-1 bg-cover opacity- h-auto">
    <div className="px-5 py-10">
      <div className=" px-5 rounded-lg">
        <h1 className="text-center text-5xl font-bold text-white my-20">
          Information Technology..
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {posts.map((post, index) => (
            <Link href ={`/Blogs/${post.id}`}>
            <Card
              key={index}
              id={post.id}
              image={post.image}
              title={post.title}
              description={post.description}
              
            />
            </Link>
          ))}
        </div>
        </div>
        </div>
      </div>
    
  );
};
export default Blog;