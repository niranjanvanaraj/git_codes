import { useEffect, useState } from "react";
import  {getUsers}  from "./getUsers";
import UserCard from "./UserCard";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers() .then((e)=>setUsers(e))
    setLoading(false);
  }, []);
  console.log()

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      {users.slice(0, 5).map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;