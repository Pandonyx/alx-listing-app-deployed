// components/common/Search.tsx
import React from "react";


const Search = () => {
  return (
    <div className="flex items-center w-full max-w-4xl mx-auto bg-white border border-gray-300 rounded-full shadow-sm">
      {/* ── Location ─────────────────────────────── */}
      <div className="flex flex-col flex-1 px-6 py-4">
        <label className="text-xs font-semibold leading-none" htmlFor="location">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Search for destination"
          className="text-sm placeholder-gray-400 bg-transparent focus:outline-none"
        />
      </div>

      {/* vertical divider */}
      <div className="w-px h-10 bg-gray-200" />

      
      <button
        type="button"
        className="flex flex-col px-6 py-4 hover:bg-gray-50 focus:outline-none"
      >
        <span className="text-xs font-semibold leading-none">Check in</span>
        <span className="text-sm text-gray-400">Add date</span>
      </button>

      <div className="w-px h-10 bg-gray-200" />

      
      <button
        type="button"
        className="flex flex-col px-6 py-4 hover:bg-gray-50 focus:outline-none"
      >
        <span className="text-xs font-semibold leading-none">Check out</span>
        <span className="text-sm text-gray-400">Add date</span>
      </button>

      <div className="w-px h-10 bg-gray-200" />

      
      <button
        type="button"
        className="flex flex-col px-6 py-4 hover:bg-gray-50 focus:outline-none"
      >
        <span className="text-xs font-semibold leading-none">People</span>
        <span className="text-sm text-gray-400">Add guest</span>
      </button>

      
      <button
        type="submit"
        className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb400] hover:bg-[#ffa000] focus:outline-none"
        aria-label="Search"
      >
        <img src="/assets/icons/Magnifer.svg" alt="Search" size={18} className="text-white" />
      </button>
    </div>
  );
};

export default Search;
