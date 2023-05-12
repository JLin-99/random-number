import "./App.css";
import { useRandom } from "./hooks/useRandom";

export const App = () => {
  const query = useRandom();

  return (
    <div>
      {query.isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <h1>Random number: {query.data}</h1>
      )}
      {!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? "..." : "New number"}
      </button>
    </div>
  );
};
