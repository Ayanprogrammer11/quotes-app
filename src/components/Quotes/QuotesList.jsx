import { useEffect } from "react";
import { useQuotes } from "../../contexts/QuotesContext";
import QuoteItem from "./QuoteItem";
import Skeleton from "../Skeleton";

function QuotesList() {
  const { fetchQuotes, isLoading, quotes } = useQuotes();
  useEffect(
    function () {
      fetchQuotes();
    },
    [fetchQuotes]
  );

  if (isLoading) return <Skeleton nums={10} />;
  return (
    <div className="quotes-container mt-8 p-2 lg:p-6">
      <ul className="quotes-list">
        {quotes.map((quote, i) => (
          <QuoteItem quote={quote} key={quote._id} index={i} />
        ))}
      </ul>
    </div>
  );
}

export default QuotesList;
