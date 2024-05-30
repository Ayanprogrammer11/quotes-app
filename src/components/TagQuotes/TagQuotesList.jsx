import { useEffect } from "react";
import { useQuotes } from "../../contexts/QuotesContext";
import Skeleton from "../Skeleton";
import TagQuotesItem from "./TagQuotesItem";
import { useParams } from "react-router-dom";

function TagQuotesList() {
  const { filterQuotesByTag, isLoading, quotes } = useQuotes();
  const { tag } = useParams();
  useEffect(
    function () {
      filterQuotesByTag(tag);
    },
    [tag, filterQuotesByTag]
  );

  if (isLoading) return <Skeleton nums={10} />;
  return (
    <div className="quotes-container mt-8 p-2 lg:p-6">
      <ul className="quotes-list">
        {quotes?.length === 0 && (
          <p className="text-center">No Quotes found for tag: {tag}</p>
        )}
        {quotes.map((quote, i) => (
          <TagQuotesItem quote={quote} key={quote?._id} index={i} />
        ))}
      </ul>
    </div>
  );
}

export default TagQuotesList;
