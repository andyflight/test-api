"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [ posts, setPosts ] = useState<any[]>([]);
   
  useEffect(() => {
    const fetchPosts = async () => {
        var requestUrl = 'https://jsonplaceholder.typicode.com/posts';
        try {
            const response = await axios.get(requestUrl);
            setPosts(response.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    fetchPosts();
  }, []);

  return (
    <main className="">
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="max-w-5xl w-full rounded-lg shadow-lg bg-white p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
         Posts
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full table-auto rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">User ID</th>
                <th className="py-3 px-6 text-left">Title</th>
                <th className="py-3 px-6 text-left">Body</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap text-gray-900">{post.id}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap text-gray-900">{post.userId}</td>
                  <td className="py-3 px-6 text-left whitespace-nowrap text-gray-900">
                      {post.title}
                    
                  </td>
                  <td className="py-3 px-6 text-left whitespace-pre-line text-gray-900">
                    <p className="text-gray-900">{post.body}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </main>
  );
}

