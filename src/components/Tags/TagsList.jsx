import { useQuotes } from "../../contexts/QuotesContext";
import TagItem from "./TagItem";

function TagsList({ index }) {
  const { quotes } = useQuotes();
  return (
    <ul className="tags flex gap-2">
      {quotes[index].tags.map((tag, i) => (
        <TagItem tag={tag} key={i} />
      ))}
    </ul>
  );
}

export default TagsList;
