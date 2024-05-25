import { useEffect } from "react";
import { useQuotes } from "../contexts/QuotesContext";
import QuoteItem from "./QuoteItem";
import Skeleton from "./Skeleton";

function QuotesList() {
  const { fetchQuotes, isLoading, homepageQuotes } = useQuotes();
  useEffect(function () {
    fetchQuotes();
  }, []);

  if (isLoading) return <Skeleton nums={10} />;
  return (
    <div className="quotes-container mt-8 p-2">
      <ul className="quotes-list flex flex-col gap-6">
        {homepageQuotes.map((quote) => (
          <QuoteItem quote={quote} key={quote._id} />
        ))}
      </ul>
    </div>
  );
}

export default QuotesList;
