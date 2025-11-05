import React, { createContext, useState, useEffect } from "react";

  const UserContext = createContext();

const UserProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(localStorage.getItem("Search"));

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    localStorage.setItem("Search", search);
  }, [search]);

  return (
    <UserContext.Provider value={{ users, search, setSearch }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider , UserContext};
