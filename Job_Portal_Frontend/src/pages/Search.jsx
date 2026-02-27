import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const location = searchParams.get("location");

  return (
    <div style={{ padding: "40px" }}>
      <h2>Search Results</h2>

      <p>
        <strong>Job:</strong> {title || "Any"}
      </p>
      <p>
        <strong>Location:</strong> {location || "Any"}
      </p>

      <hr />

      <h3>No jobs connected yet</h3>
      <p>This page is ready for backend integration.</p>
    </div>
  );
};

export default Search;
