import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount, removeFromCart, toggleChecked } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
function CartPage() {
    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const selectedItems = cart.filter((item) => item.checked);
    const productsTotal = selectedItems.reduce((total, item) => total + item.product.price * item.count, 0);
    const shipping = productsTotal > 150 ? 0 : 29.99;
    const discount = 0;
    const grandTotal = productsTotal + shipping - discount;
    const navigate = useNavigate();
    return (
        <div className="max-w-[1400px] mx-auto flex gap-8 p-10">
            <div className="flex-1 flex flex-col gap-6">
                {cart.map((item) => (
                <div key={item.product.id} className="border rounded p-6 flex items-center justify-between bg-white">
                    <input type="checkbox" checked={item.checked} onChange={() => dispatch(toggleChecked(item.product.id))} />
                    <img src={item.product.images[0]} className="w-40 h-40 object-cover" />
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold">{item.product.title}</h3>
                        <p className="text-lg font-bold mt-2">${item.product.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => dispatch(decreaseCount(item.product.id))} className="w-8 h-8 border rounded">-</button>
                        <span className="font-semibold">{item.count}</span>
                        <button onClick={() => dispatch(increaseCount(item.product.id))} className="w-8 h-8 border rounded">+</button>
                        <button onClick={() => dispatch(removeFromCart(item.product.id))} className="px-3 py-1 border rounded text-red-500">Delete</button>
                    </div>
                </div>
                ))}
            </div>
            <div className="w-[320px] border rounded p-6 h-fit sticky top-5">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="flex justify-between mb-3">
                    <span>Products</span>
                    <span>${productsTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-3">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-3">
                    <span>Discount</span>
                    <span>${discount.toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                </div>
                <button onClick={() => navigate("/create-order")} className="bg-orange-500 text-white w-full p-3 rounded mt-6 cursor-pointer">Create Order</button>
            </div>
        </div>
    )
}

export default CartPage;