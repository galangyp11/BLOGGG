import { userModel, userProps } from "../models/userModel";
import { GetServerSideProps } from "next";

export const getServerSideProps = (async (context: any) => {
  const response = await fetch("http://localhost:3011/users");
  const dataUser: userModel = await response.json();

  console.info(dataUser);
  return {
    props: { dataUser },
  };
}) satisfies GetServerSideProps<{
  dataUser: userModel;
}>;
