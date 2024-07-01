import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const FetchUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUser);
      });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = {
      id: 0,
      name: "sachin",
    };
    setUsers([newUser, ...users]);
    axios
      .post("https://jsonplaceholder.typicode.com/users/", newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUser);
      });
  };
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-4" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUser;
