import { FaQuoteLeft } from "react-icons/fa";
import TagsList from "../Tags/TagsList";

function QuoteItem({ quote, index }) {
  return (
    <li className="quote">
      <div className="quote-header mb-4">
        <div className="flex gap-4 justify-center items-center">
          <FaQuoteLeft />
          <p>{quote.author}</p>
        </div>
      </div>
      <div className="quote-body mb-4 text-center">
        <p className="italic text-lg text-center">{quote.content}</p>
      </div>
      <div className="quote-footer flex gap-2">
        <span>Tags: </span>
        <TagsList index={index} />
      </div>
    </li>
  );
}

export default QuoteItem;
