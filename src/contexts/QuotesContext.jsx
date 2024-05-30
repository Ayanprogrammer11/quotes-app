import { createContext, useCallback, useContext, useReducer } from "react";

const QuotesContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "stopLoading":
      return { ...state, isLoading: false };
    case "homepageQuotes/loaded":
      return { ...state, quotes: action.payload, isLoading: false };
    case "searchQuotes/loaded":
      return { ...state, quotes: action.payload, isLoading: false };
    case "tagQuotes/loaded":
      return { ...state, quotes: action.payload, isLoading: false };
  }
}

const initialState = {
  quotes: [],
  isLoading: false,
  query: "",
};

const BASE_URL = "https://api.quotable.io";

function QuotesProvider({ children }) {
  const [{ isLoading, quotes }, dispatch] = useReducer(reducer, initialState);

  const fetchQuotes = useCallback(async function fetchQuotes() {
    dispatch({ type: "loading" });
    const res = await fetch(`${BASE_URL}/quotes/random?limit=10`);
    const response = await res.json();
    console.log(response);
    dispatch({ type: "homepageQuotes/loaded", payload: response });
  }, []);

  const searchQuery = useCallback(async function searchQuery(query) {
    dispatch({ type: "loading" });
    const res = await fetch(`${BASE_URL}/search/quotes?query=${query}`);
    const response = await res.json();
    console.log(response);
    dispatch({ type: "searchQuotes/loaded", payload: response.results });
  }, []);

  const filterQuotesByTag = useCallback(async function filterQuotesByTag(tag) {
    dispatch({ type: "loading" });
    const res = await fetch(`${BASE_URL}/quotes?tags=${tag}&minLength=50`);
    const response = await res.json();
    console.log(response);
    dispatch({ type: "tagQuotes/loaded", payload: response.results });
  }, []);

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        isLoading,
        fetchQuotes,
        searchQuery,
        filterQuotesByTag,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
}

function useQuotes() {
  const context = useContext(QuotesContext);
  if (context === undefined)
    throw new Error("QuotesContext value was accessed outside its provider!");
  return context;
}

export { QuotesProvider, useQuotes };
