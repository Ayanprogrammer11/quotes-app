import { useNavigate } from "react-router-dom";

function TagItem({ tag }) {
  const navigate = useNavigate();
  return (
    <li
      className="tag"
      onClick={() =>
        navigate(
          `/app/tags/${tag
            .split(" ")
            .map((word) => word[0].toLowerCase() + word.slice(1))
            .join(" ")}`
        )
      }
    >
      {tag}
    </li>
  );
}

export default TagItem;
