import { useEffect, useState } from "react";
function OrdersPage() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrders);
    }, []);
    const clearOrders = () => {
    localStorage.removeItem("orders");
    setOrders([]);
    };
    return (
        <div className="max-w-[1200px] mx-auto p-10">
            <div className="flex justify-end mb-6">
            <button onClick={clearOrders} className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-red-700 transition">Delete All Orders</button>
        </div>
            {orders.map((order) => (
                <div key={order.id} className="border rounded p-5 mb-5">
                    <p>Order ID: {order.id}</p>
                    <p>Date: {order.order_date}</p>
                    <p>Total: {order.price} TL</p>
                    <div className="mt-4">
                        {order.products.map((item) => (
                            <div key={item.product.id} className="flex items-center gap-4 border-t py-3">
                                <img src={item.product.images[0]} alt={item.product.title} className="w-20 h-20 object-cover"/>
                                <div>
                                    <p>{item.product.title}</p>
                                    <p>{item.product.price} TL</p>
                                    <p>Count: {item.count}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrdersPage;