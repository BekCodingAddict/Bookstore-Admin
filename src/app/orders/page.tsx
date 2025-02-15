const orders = [
  {
    id: 1,
    customerName: "John Doe",
    bookTitle: "Atomic Habits",
    quantity: 2,
    totalPrice: 44,
    orderDate: "2025-02-15",
    status: "Shipped",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    bookTitle: "The Subtle Art of Not Giving a F*ck",
    quantity: 1,
    totalPrice: 22,
    orderDate: "2025-02-14",
    status: "Processing",
  },
  {
    id: 3,
    customerName: "Mike Johnson",
    bookTitle: "Dare to Lead",
    quantity: 3,
    totalPrice: 66,
    orderDate: "2025-02-13",
    status: "Delivered",
  },
];

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Orders</h2>

        <table className="min-w-full table-auto text-left">
          <thead className="border-b bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-sm text-gray-600">Order ID</th>
              <th className="px-4 py-2 text-sm text-gray-600">Customer</th>
              <th className="px-4 py-2 text-sm text-gray-600">Book Title</th>
              <th className="px-4 py-2 text-sm text-gray-600">Quantity</th>
              <th className="px-4 py-2 text-sm text-gray-600">Total Price</th>
              <th className="px-4 py-2 text-sm text-gray-600">Order Date</th>
              <th className="px-4 py-2 text-sm text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-600">{order.id}</td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {order.customerName}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {order.bookTitle}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {order.quantity}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  ${order.totalPrice}
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {order.orderDate}
                </td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      order.status === "Shipped"
                        ? "bg-green-100 text-green-600"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {order.status}
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
