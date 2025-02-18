"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const service = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // const array =[1,11,2,1.5,8,4,"hi"]

  // const arraysort = () =>{
  //   const arrayfilter = array.filter(item => typeof item === "number")
  // //const arr = arrayfilter.sort(a,b => a+b)
  // const arr = arrayfilter.sort((a, b) => b - a); // Correct sorting function
  //   return arr
  // }
  // const arrayshow = arraysort (array);
  // console.log(arrayshow)
  const [id, setId] = useState(1);
  const [posts, setPosts] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?id=${id}`
      );
      console.log("API Response:", response.data); 
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // ✅ Runs on mount & when `userId` changes
  useEffect(() => {
    fetchdata();
  }, [id]);

  return (
    <div>
      {" "}
      <div>
        <h1>Posts for User ID: {id}</h1>
        <button onClick={() => setId(id + 1)}>Next User</button>

        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
      <div className="h-24 md:h-screen md:bg-blue-950 bg-red-600 text-center flex justify-center items-center">
        <h6 className="text-xl text-white ">
          This is a sample Next.js About Us page
        </h6>
        <div
          style={{ display: "flex", flexDirection: "column", fontSize: "18px" }}
        >
          <button onClick={decrementCount}>-</button> {count}{" "}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default service;
