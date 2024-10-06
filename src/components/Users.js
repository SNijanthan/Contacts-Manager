import { useState } from "react";

const Users = ({ user, removeUser, updateUser }) => {
  const { id, name, username, email, phone } = user;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name, username, email, phone });

  const handleDelete = () => {
    removeUser(id);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      // Reset formData if editing is canceled
      setFormData({ name, username, email, phone });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser(id, formData);
    setIsEditing(false);
  };

  return (
    <tr className="hover">
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border-2 border-gray-500 rounded-lg px-3 h-10"
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="border-2 border-gray-500 rounded-lg px-3 h-10"
            />
          </td>
          <td>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border-2 border-gray-500 rounded-lg px-3 h-10"
            />
          </td>
          <td>
            <input
              type="text"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="border-2 border-gray-500 rounded-lg px-3 h-10"
            />
          </td>
          <td>
            <button
              className="btn btn-sm btn-success mr-3 rounded-lg"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="btn btn-sm btn-error rounded-lg"
              onClick={handleEditToggle}
            >
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{phone}</td>

          <button
            className="btn btn-sm btn-success mr-3 rounded-lg"
            onClick={handleEditToggle}
          >
            Update
          </button>
          <button
            className="btn btn-sm btn-error rounded-lg"
            onClick={handleDelete}
          >
            Delete
          </button>
        </>
      )}
    </tr>
  );
};

export default Users;
