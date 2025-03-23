"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

// Blog data
const blogData = [
  {
    id: 1,
    image: "/images/blog/2.jpg",
    month: "Apr",
    day: "02",
    tag: "Wedding",
    title: "Crush Your Wedding Day Style!",
    description: "Quality fusce suscipit the conce viviense ante a hendrerit ullamcor risus nise the cursus purus sit amet viverra.",
    link: "/blog/crush-your-wedding-day-style"
  },
  {
    id: 2,
    image: "/images/blog/3.jpg",
    month: "Apr",
    day: "04",
    tag: "Wedding",
    title: "How to be the best bridesmaid ever!",
    description: "Quality fusce suscipit the conce viviense ante a hendrerit ullamcor risus nise the cursus purus sit amet viverra.",
    link: "/blog/best-bridesmaid-ever"
  },
  {
    id: 3,
    image: "/images/blog/1.jpg",
    month: "Apr",
    day: "08",
    tag: "Hairstyle",
    title: "15 Best Bridal Hairstyles Ever",
    description: "Quality fusce suscipit the conce viviense ante a hendrerit ullamcor risus nise the cursus purus sit amet viverra.",
    link: "/blog"
  }
];

const Blog = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-7.5">
        {/* Section header */}
        <div className="mb-12">
          <SectionHeader title="Latest News" subTitle="read news" />
        </div>
        
        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <div key={blog.id} className="group">
              <div className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl overflow-hidden">
                {/* Image container */}
                <div className="relative h-60 overflow-hidden">
                  {/* Date tag */}
                  <div className="absolute top-4 left-4 z-10 bg-black text-white text-center py-2 px-4">
                    <span className="block font-cursive text-xl">{blog.month}</span>
                    <span className="block font-serif text-xl">{blog.day}</span>
                  </div>
                  
                  {/* Blog image */}
                  <div className="relative h-full w-full transform transition-transform duration-500 group-hover:scale-110">
                    <Image 
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <Link 
                      href={blog.link}
                      className="text-gray-600 italic hover:text-gold-accent transition-colors"
                    >
                      {blog.tag}
                    </Link>
                  </div>
                  <h5 className="text-lg uppercase tracking-wide font-medium mb-4">
                    <Link 
                      href={blog.link}
                      className="text-black hover:text-gold-accent transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </h5>
                  <p className="text-gray-600 text-base">{blog.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 