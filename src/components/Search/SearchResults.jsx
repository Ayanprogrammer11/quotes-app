import { useEffect } from "react";

import SearchResult from "./SearchResult";
import { useSearchParams } from "react-router-dom";
import { useQuotes } from "../../contexts/QuotesContext";
import Skeleton from "../Skeleton";

function SearchResults() {
  const { searchQuery, isLoading, searchQuotes } = useQuotes();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(function () {
    searchQuery(searchParams.get("q"));
  }, []);

  if (isLoading) return <Skeleton nums={10} />;
  return (
    <div className="quotes-container mt-8 p-2">
      <ul className="quotes-list flex flex-col gap-6">
        {searchQuotes?.map((quote) => (
          <SearchResult quote={quote} key={quote?._id} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
