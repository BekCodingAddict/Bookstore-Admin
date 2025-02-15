const users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin",
    registrationDate: "2025-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    role: "Customer",
    registrationDate: "2025-02-05",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michaelj@example.com",
    role: "Admin",
    registrationDate: "2025-02-10",
    status: "Active",
  },
];

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Users</h2>

        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-sm text-gray-600">User ID</th>
              <th className="px-4 py-2 text-sm text-gray-600">Name</th>
              <th className="px-4 py-2 text-sm text-gray-600">Email</th>
              <th className="px-4 py-2 text-sm text-gray-600">Role</th>
              <th className="px-4 py-2 text-sm text-gray-600">
                Registration Date
              </th>
              <th className="px-4 py-2 text-sm text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">{user.id}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">{user.role}</td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {user.registrationDate}
                </td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
