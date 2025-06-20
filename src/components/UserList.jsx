function UserList({ filteredData }) {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>

      <ul className="space-y-4">
        {filteredData?.map((user) => (
          <UserRow user={user} key={user.id} />
        ))}
      </ul>
    </div>
  );
}

function UserRow({ user }) {
  return (
    <li className="flex gap-6 justify-between items-center  bg-gray-100 p-4 rounded-xl shadow">
      <span className="font-semibold text-gray-800">{user.name}</span>
      <span className="text-gray-600">{user.email}</span>
      <span className="text-sm text-gray-700">{user.role}</span>
      <span className="text-sm text-gray-700">{user.department}</span>
      <span
        className={`text-xs px-2 py-1 rounded-full ${
          user.status === "Active"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {user.status}
      </span>
    </li>
  );
}

export default UserList;
