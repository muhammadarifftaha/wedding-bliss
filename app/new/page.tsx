"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ImageBox = ({ imageProps }) => {
  const { albumId, id, thumbnailUrl, title, url } = imageProps;

  return (
    <div className="flex flex-col items-start justify-center px-4 py-2">
      <Image
        src={url}
        alt={title}
        width={250}
        height={250}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default function New() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/photos",
    }).then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-row flex-wrap items-center justify-center w-4/5">
        {data.map((imageProps, i) => (
          <ImageBox
            imageProps={imageProps}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
