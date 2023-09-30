"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiHost } from "@/app/_api/api";
import FotoPP from "../../../Image/foto-profile2.jpg";
import FotoPP2 from "../../../Image/doggo.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

// import { userModel, userProps } from "@/app/(SSR)/models/userModel";
// import { InferGetStaticPropsType, GetStaticProps } from "next";

// export const getStaticProps: GetStaticProps = async () => {
//   const response = await fetch("http://localhost:3011/users");
//   const dataUser: userModel = await response.json();

//   // console.info(dataUser);
//   return {
//     props: { dataUser },
//   };
// };

export default function CardPost() {
  const [dataPost, setDataPost] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${apiHost}/users`);
      setDataPost(response.data);
    };
    getData();
  }, []);

  // console.log("data post", dataPost);

  return (
    <div className="grid grid-row gap-4 ">
      {dataPost?.map((data, index) => (
        <div
          key={index}
          className="shadow-md rounded-md max-h-64 p-8 hover:bg-gray-50"
        >
          <div className="grid grid-cols-4 mb-4">
            <div className="col-span-3 h-22 m-auto">
              <p className="text-lg font-semibold text-gray-600">
                {data.judul}
              </p>
            </div>
            <div className="col-span-1 grid grid-cols-3 border-2 border-transparent hover:border-gray-500 rounded-full p-2 m-auto cursor-pointer duration-100 h-22">
              <div className="w-12 p-0 col-span-1">
                <Image
                  src={FotoPP}
                  alt="foto-pp"
                  className="rounded-full w-12 h-12"
                />
              </div>
              <div className="flex items-center col-span-2 w-full">
                <p className="font-semibold text-sm text-gray-500">
                  {data.name}, {data.bio}
                </p>
              </div>
            </div>
          </div>
          <div className="my-2">
            <p>{data.isi}</p>
          </div>
          <div className="flex justify-end mt-2">
            <Link href={{ pathname: `/post/${data.slug}`, query: { data } }}>
              <div className="border-2 rounded-md p-2 w-40 flex items-center group hover:border-gray-500 cursor-pointer">
                <p className="mr-2">Selengkapnya</p>
                <BsArrowRight className="group-hover:translate-x-2 duration-300" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
