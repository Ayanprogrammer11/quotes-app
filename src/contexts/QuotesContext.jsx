import { createContext, useContext, useReducer, useState } from "react";

const QuotesContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "stopLoading":
      return { ...state, isLoading: false };
    case "homepageQuotes/loaded":
      return { ...state, homepageQuotes: action.payload, isLoading: false };
    case "searchQuotes/loaded":
      return { ...state, searchQuotes: action.payload, isLoading: false };
  }
}

const initialState = {
  homepageQuotes: [],
  searchQuotes: [],
  isLoading: false,
  query: "",
};

const BASE_URL = "https://api.quotable.io";

function QuotesProvider({ children }) {
  const [{ homepageQuotes, searchQuotes, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function fetchQuotes() {
    dispatch({ type: "loading" });
    const res = await fetch(`${BASE_URL}/quotes/random?limit=10`);
    const response = await res.json();
    console.log(response);
    dispatch({ type: "homepageQuotes/loaded", payload: response });
  }

  async function searchQuery(query) {
    dispatch({ type: "loading" });
    const res = await fetch(`${BASE_URL}/search/quotes?query=${query}`);
    const response = await res.json();
    console.log(response);
    dispatch({ type: "searchQuotes/loaded", payload: response.results });
  }

  function fakeLoading() {
    // dispatch({ type: "loading" });
    // setTimeout(function () {
    //   dispatch({ type: "stopLoading" });
    // }, 2000);
  }
  return (
    <QuotesContext.Provider
      value={{
        fetchQuotes,
        searchQuery,
        searchQuotes,
        homepageQuotes,
        isLoading,
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
