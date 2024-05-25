import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import Main from "../components/Main";

import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="app bg-Bgmain min-h-screen">
      <Navigation />
      <Main>
        <SearchBar />
        {/* <Skeleton nums={5} /> */}
        {/* <QuotesList /> */}
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
