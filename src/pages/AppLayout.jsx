import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import Main from "../components/Main";

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app bg-Bgmain min-h-screen">
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
      <Main>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <SearchBar />
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
