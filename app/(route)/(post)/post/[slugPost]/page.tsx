import React from "react";
import { apiHost } from "@/app/_api/api";
import { useRouter } from "next/router";

// import { userModel, userProps } from "@/app/(SSR)/models/userModel";
// import { InferGetServerSidePropsType, GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(`${apiHost}/users`);
//   const dataUser: userModel = await response.json();

//   // console.info(dataUser);
//   return {
//     props: { dataUser },
//   };
// };

export default function page({ params }: { params: { slugPost: string } }) {
  // const response = await fetch(`${apiHost}/users`);
  // const router = useRouter();
  // const dataFromPreviousPage = router.query;

  // console.log(dataFromPreviousPage);

  return (
    <div>
      <h1>{params.slugPost}</h1>
    </div>
  );
}
