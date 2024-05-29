import { useEffect } from "react";
import { useQuotes } from "../contexts/QuotesContext";
import QuoteItem from "./QuoteItem";
import Skeleton from "./Skeleton";

function QuotesList() {
  const { fetchQuotes, isLoading, homepageQuotes } = useQuotes();
  useEffect(
    function () {
      fetchQuotes();
    },
    [fetchQuotes]
  );

  if (isLoading) return <Skeleton nums={10} />;
  return (
    <div className="quotes-container mt-8 p-2 lg:p-6">
      <ul className="quotes-list grid grid-cols-1 sm:grid-cols-2 min-[960px]:grid-cols-3 gap-6 lg:gap-8">
        {homepageQuotes.map((quote) => (
          <QuoteItem quote={quote} key={quote._id} />
        ))}
      </ul>
    </div>
  );
}

export default QuotesList;
