import { useEffect } from "react";

import SearchResult from "./SearchResult";
import { useSearchParams } from "react-router-dom";
import { useQuotes } from "../../contexts/QuotesContext";
import Skeleton from "../Skeleton";

function SearchResults() {
  const { searchQuery, isLoading, searchQuotes } = useQuotes();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      searchQuery(searchParams.get("q"));
    },
    [searchQuery, searchParams]
  );

  if (isLoading) return <Skeleton nums={10} />;
  return (
    <div className="quotes-container mt-8 p-2 lg:p-6">
      <ul className="quotes-list quotes-list grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 gap-6 lg:gap-8">
        {!searchQuotes.length ? (
          <p className="text-center">
            No Results found for query: {searchParams.get("q")}
          </p>
        ) : (
          searchQuotes?.map((quote) => (
            <SearchResult quote={quote} key={quote?._id} />
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchResults;
