import Image from "next/image";
import Navbar from "./_components/navbar/Navbar";
import CardTrend from "./_components/homepage/card-trending/CardTrend";
import CardPost from "./_components/homepage/card-post/CardPost";

export default function Home() {
  return (
    <main className="container mx-auto lg:px-4 max-w-screen-xl">
      <div className="my-2">
        <Navbar />
      </div>

      <div className="mt-2 mb-6">
        <CardTrend />
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <CardPost />
        </div>
        <div className="col-span-1 border-2"></div>
      </div>
    </main>
  );
}
