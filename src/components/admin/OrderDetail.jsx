import { useContext } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, orderDelete } = context;

    return (
        <div className="py-5">
            <h1 className="text-xl text-pink-300 font-bold mb-5">All Orders</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {getAllOrder.map((order) => (
                    <div key={order.id} className="bg-white shadow-md rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-pink-400">Order ID: {order.id}</span>
                            <span className={`text-md text-green-600 font-bold ${order.status === 'Delivered' ? 'text-green-600' : 'text-red-600'}`}>{order.status}</span>
                        </div>
                        
                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Items</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {order.cartItems.map((item, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <img src={item.productImageUrl} alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                                        <div>
                                            <p className="text-md font-bold text-gray-700">{item.title}</p>
                                            <p className="text-sm text-gray-500">{item.category}</p>
                                            <p className="text-sm text-gray-500">Price: ₹{item.price}</p>
                                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">Delivery Information</h2>
                            <p className="text-sm text-gray-500"><span className="font-bold">Name:</span> {order.addressInfo.name}</p>
                            <p className="text-sm text-gray-500"><span className="font-bold">Address:</span> {order.addressInfo.address}, {order.addressInfo.pincode}</p>
                            <p className="text-sm text-gray-500"><span className="font-bold">Phone Number:</span> {order.addressInfo.mobileNumber}</p>
                            <p className="text-sm text-gray-500"><span className="font-bold">Email:</span> {order.email}</p>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-500"><span className="font-bold">Order Date:</span> {order.date}</p>
                            <button onClick={() => orderDelete(order.id)} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderDetail;
