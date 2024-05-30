import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        navigate(`/app/search?q=${searchQuery.trim()}`);
      }
    },
    [navigate, searchQuery]
  );

  useEffect(() => {
    const inputElement = inputRef.current;

    const handleKeyPressCallback = (e) => handleKeyPress(e);

    inputElement.addEventListener("keypress", handleKeyPressCallback);

    return () => {
      inputElement.removeEventListener("keypress", handleKeyPressCallback);
    };
  }, [handleKeyPress]);

  return (
    <div className="p-4 mt-6">
      <div className="relative flex items-center justify-center mt-2 w-full">
        <input
          type="email"
          placeholder="Search for Quotes"
          className="block w-full md:w-[70%] lg:w-[50%] py-2.5 text-gray-300 placeholder-gray-400/70 bg-[#454547] border rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 border-gray-600 focus:border-mainTint3 focus:ring-mainTint3 focus:outline-none focus:ring focus:ring-opacity-40"
          ref={inputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
