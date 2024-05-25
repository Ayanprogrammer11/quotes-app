import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  useEffect(
    function () {
      const callback = (e) => {
        if (e.key === "Enter") {
          navigate(`/app/search?q=${searchQuery}`);
        }
      };
      inputRef.current.focus();
      inputRef.current.addEventListener("keypress", callback);
    },
    [searchQuery, navigate]
  );
  return (
    <div className="p-4 mx-auto mt-6">
      <div className="relative flex items-center mt-2">
        <span className="absolute">
          <FaSearch className="w-6 h-6 mx-3 text-gray-500" />
        </span>

        <input
          type="email"
          placeholder="Search for Quotes"
          className="block w-full py-2.5 text-gray-300 placeholder-gray-400/70 bg-[#454547] border rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 border-gray-600 focus:border-mainTint3 focus:ring-mainTint3  focus:outline-none focus:ring focus:ring-opacity-40"
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
