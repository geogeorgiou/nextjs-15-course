"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFromReset = () => {
  const reset = () => {
    const form = document.querySelector(".search_form") as HTMLFormElement;
    form?.reset();
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFromReset;
