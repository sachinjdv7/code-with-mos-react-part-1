import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import UserService, { User } from "./services/user-service";

const FetchUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const { request, cancle } = UserService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => cancle();
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    UserService.delete(user.id).catch((error) => {
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

    UserService.create(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!!" };

    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    UserService.update(updatedUser).catch((error) => {
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
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUser;
