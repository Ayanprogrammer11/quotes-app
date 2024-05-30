import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QuotesProvider } from "./contexts/QuotesContext";
import LandingPage from "./pages/LandingPage";
import AppLayout from "./pages/AppLayout";
import QuotesList from "./components/Quotes/QuotesList";
import SearchResults from "./components/Search/SearchResults";
import TagQuotesList from "./components/TagQuotes/TagQuotesList";

function App() {
  return (
    <QuotesProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<LandingPage />} />
          <Route path="app" element={<AppLayout />}>
            <Route index replace element={<Navigate to={"home"} />} />
            <Route path="home" element={<QuotesList />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="tags/:tag" element={<TagQuotesList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QuotesProvider>
  );
}

export default App;
