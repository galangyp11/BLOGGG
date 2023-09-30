import Link from "next/link";

export default function Navbar() {
  return (
    <div className="grid grid-cols-4 h-16 border-b-2 px-4">
      <div className="my-auto col-span-2">
        <Link href={"/"}>
          <p className="text-2xl font-bold text-teal-500 hover:text-teal-600 active:text-teal-700 cursor-pointer w-2">
            BLOGGG
          </p>
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <p className="text-md font-semibold text-slate-500 hover:text-teal-300 active:text-slate-700 cursor-pointer">
          Post
        </p>
      </div>
      <div className="flex justify-end items-center">
        <input
          type="text"
          className="border-2 hover:border-teal-300 ease-in-out duration-200 h-8 rounded-md p-2"
          placeholder="Cari Film..."
        />
      </div>
    </div>
  );
}
