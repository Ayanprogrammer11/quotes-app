// {
//       _id: "ytCMTCxPfR",
//       content:
//         "It is not so much our friends' help that helps us, as the confidence of their help.",
//       author: "Epicurus",
//       tags: ["Friendship"],
//       authorSlug: "epicurus",
//       length: 83,
//       dateAdded: "2020-02-22",
//       dateModified: "2023-04-14",
//     },
import { FaQuoteLeft } from "react-icons/fa";

function QuoteItem({ quote }) {
  return (
    <li className="quote flex flex-col justify-center rounded-lg p-4 bg-[#262629] text-white">
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
        <ul className="tags flex gap-2">
          {quote.tags.map((tag, i) => (
            <li className="tag py-1 px-2 bg-main rounded-md text-sm" key={i}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default QuoteItem;
