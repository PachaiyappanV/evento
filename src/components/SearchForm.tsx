"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/events/${searchText}`);
  };
  return (
    <form className=" w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg outline-none bg-white/[7%] px-6 
      ring-accent focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        spellCheck={false}
      />
    </form>
  );
};

export default SearchForm;
