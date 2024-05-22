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
      <div className="">
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    </main>
  );
}
