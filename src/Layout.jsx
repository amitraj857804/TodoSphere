import React from "react";
import { Outlet } from "react-router-dom";
import { TodoForm } from "./components";


function Layout() {
  return (
    <>
   
      <TodoForm />
      <Outlet />
      
    </>
  );
}

export default Layout;
