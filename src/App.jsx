import React from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import {UserProvider} from "./context/Context.jsx";

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>Directory App</h1>
        <SearchBar />
        <UserList />
      </div>
    </UserProvider>
  );
};

export default App;
