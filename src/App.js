import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./components/Users";
import { URL } from "./utils/constants";
import AddUsers from "./components/AddUsers";

const App = () => {
  const [userData, setUserData] = useState([]);

  // Get Users
  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add users
  const addUser = async (newUser) => {
    try {
      const res = await axios.post(URL, newUser);
      setUserData((userData) => [...userData, res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Removing users
  const removeUser = async (userId) => {
    try {
      await axios.delete(`${URL}/${userId}`);
      setUserData((prevData) => prevData.filter((user) => user.id !== userId));
    } catch (error) {
      console.log(error);
    }
  };

  // Updating users
  const updateUser = async (userId, updatedData) => {
    try {
      const res = await axios.put(`${URL}/${userId}`, updatedData);
      setUserData((prevData) =>
        prevData.map((user) => (user.id === userId ? res.data : user))
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center text-3xl font-thin m-5 mb-4 text-sky-700">
        CONTACTS MANAGER
      </h1>
      <AddUsers addUser={addUser} />
      <div className="my-2 w-5/6 m-auto">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <Users
                  key={user.id}
                  user={user}
                  removeUser={removeUser}
                  updateUser={updateUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
