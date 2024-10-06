import { useState } from "react";

const AddUsers = ({ addUser }) => {
  const [addBtn, setAddBtn] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, username, email, phone });

    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setAddBtn(true);
  };

  const handleToggle = () => {
    setAddBtn(!addBtn);
  };
  return (
    <>
      {addBtn ? (
        <div className="w-2/4 m-auto">
          <button
            className="bg-primary text-white p-2 rounded-xl ml-80 mb-1"
            onClick={handleToggle}
          >
            Add user
          </button>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full mx-72">
              <input
                type="text"
                placeholder="Name"
                className="border-2 border-gray-500 mr-3 rounded-lg px-3 h-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="User Name"
                className="border-2 border-gray-500 mr-3 rounded-lg px-3 h-10"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-gray-500 mr-3 rounded-lg px-3 h-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Phone"
                className="border-2 border-gray-500 mr-3 rounded-lg px-3 h-10"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {!addBtn ? (
                <button className="bg-white text-primary p-2 rounded-xl mb-1 h-10 flex items-center">
                  Submit
                </button>
              ) : null}
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default AddUsers;
