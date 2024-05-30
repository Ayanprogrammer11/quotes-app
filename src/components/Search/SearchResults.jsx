import { useEffect } from "react";

import SearchResult from "./SearchResult";
import { useSearchParams } from "react-router-dom";
import { useQuotes } from "../../contexts/QuotesContext";
import Skeleton from "../Skeleton";

function SearchResults() {
  const { searchQuery, isLoading, quotes } = useQuotes();
  const [searchParams] = useSearchParams();

  useEffect(
    function () {
      searchQuery(searchParams.get("q"));
    },
    [searchParams]
  );

  if (isLoading) return <Skeleton nums={10} />;
  return (
    <div className="quotes-container mt-8 p-2 lg:p-6">
      <ul className="quotes-list">
        {!quotes?.length ? (
          <p className="text-center">
            No Results found for query: {searchParams.get("q")}
          </p>
        ) : (
          quotes?.map((quote, i) => (
            <SearchResult quote={quote} key={quote?._id} index={i} />
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchResults;
