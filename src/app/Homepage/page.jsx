"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/shopping.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  const router = useRouter();
  // Initialize data as an empty array
  const [data, setData] = useState([]);

  const getThemelist = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/getThemeList`
      );
      console.log(response?.data);
      setData(response?.data); // Assuming it's an array
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getThemelist();
  }, []);

  return (
    <div>
      Welcome to the Homepage!
      <div className="container">
        {data.map((img, index) => (
          <div key={index} className="grid-item">
           <Link href={`/${img.layoutname.replace(/\s+/g, '').toLowerCase()}`}>

              <Image
                src={img.image}
                alt={img.image}
                //   layout="fill"
                //   objectFit="cover"
                width={800}
                height={500}
              />
            </Link>
            <div className="title">{img.layoutname}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
