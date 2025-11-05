import React, { useContext, useMemo } from "react";
import { UserContext } from "../context/Context.jsx";


const UserList = () => {
  const { users, search } = useContext(UserContext);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, users]);

  return (
    <ul>
        
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
           <ul key={user.id}>
            <li>{user.name}</li>
          </ul>
        ))
      ) : (
        <p>No users Found</p>
      )}
    </ul>
  );
};

export default UserList;
