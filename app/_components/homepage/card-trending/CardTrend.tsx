import React from "react";

export default function CardTrend() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <div className="border-2 border-teal-500 cursor-pointer rounded-md h-12 flex justify-center items-center hover:bg-teal-500 bg-teal-100 group">
        <p className="font-bold text-lg tracking-wide group-hover:text-teal-100 text-teal-500">
          HEROES
        </p>
      </div>
      <div className="border-2 border-red-500 rounded-md flex justify-center items-center hover:bg-red-500 bg-red-100 group cursor-pointer">
        <p className="font-bold text-lg tracking-wide group-hover:text-red-100 text-red-500">
          BRADD PIT
        </p>
      </div>
      <div className="border-2 border-amber-500 rounded-md flex justify-center items-center hover:bg-amber-500 bg-amber-100 group cursor-pointer">
        <p className="font-bold text-lg tracking-wide group-hover:text-amber-100 text-amber-500">
          90s
        </p>
      </div>
      <div className="border-2 border-purple-500 rounded-md flex justify-center items-center hover:bg-purple-500 bg-purple-100 group cursor-pointer">
        <p className="font-bold text-lg tracking-wide group-hover:text-purple-100 text-purple-500">
          RECOMENDED
        </p>
      </div>
    </div>
  );
}
