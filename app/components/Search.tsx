"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}`);
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex w-50 justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="bg-white p-2 w-80 text-xl rounded-xl"
      />
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        GO
      </button>
    </form>
  );
}
