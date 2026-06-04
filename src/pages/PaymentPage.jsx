import { useEffect, useState } from "react";
import api from "../api/api";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCart } from "../store/cartSlice";
import { toast } from "react-toastify";
function PaymentPage () {
    const [showForm, setShowForm] = useState(false);
    const { register, handleSubmit, setValue } = useForm();
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [ccv, setCcv] = useState("");
    const [editingCard, setEditingCard] = useState(null);
    const location = useLocation();
    const selectedAddress = location.state.selectedAddress;
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const products = cart.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.description
    }));
    useEffect(() => {
        api.get("/user/card")
            .then((res) => {
                setCards(res.data);
            })
            .catch((err) => {console.log(err);
            });
    }, []);
    const onSubmit = async (data) => {
        try {
            let res
            if(editingCard) {
                res = await api.put("/user/card", {...data, id: editingCard.id});
            } else {
                res = await api.post("/user/card", data);
            }
            setShowForm(false);
        } 
        catch (error) {
            console.log(error);
        }
    };
    const handleEdit = (card) => {
        setEditingCard(card);
        setValue("card_no", card.card_no);
        setValue("expire_month", card.expire_month);
        setValue("expire_year", card.expire_year);
        setValue("name_on_card", card.name_on_card);
        setShowForm(true);
    };
    const handleDelete = async (card) => {
        try {
            await api.delete(`/user/card/${card.id}`);
            setCards(
                cards.filter((item) => item.id !== card.id)
            );
        } catch (error) {
            console.log(error);
        }
    };
    const handleCreateOrder = async () => {
        if (!ccv) {
            toast.error("Please enter CCV");
            return;
        }
        const totalPrice = cart.reduce((total, item) => total + item.product.price * item.count, 0);
        try {
            const payload = {
                address_id: selectedAddress.id,
                order_date: new Date().toISOString(),
                card_no: selectedCard.card_no,
                card_name: selectedCard.name_on_card,
                card_expire_month: selectedCard.expire_month,
                card_expire_year: selectedCard.expire_year,
                card_ccv: Number(ccv),
                price: totalPrice,
                products
            };
            await api.post("/order", payload);
            const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
            oldOrders.push({
                id: Date.now(),
                order_date: new Date().toISOString(),
                price: totalPrice,
                products: cart
            });
            localStorage.setItem("orders", JSON.stringify(oldOrders));
            toast.success("Order created successfully!");
            dispatch(setCart([]));
            setSelectedCard(null);
        } catch (error) {
            toast.error("Order could not be created!");
        }
    }
    return (
        <div className="max-w-[1200px] mx-auto p-10">
            {cards.map((card) => (
                <div key={card.id} className="border rounded p-6 mb-4 bg-white">
                    <p className="font-bold text-lg">{card.name_on_card}</p>
                    <p className="mt-2">{card.card_no}</p>
                    <p className="mt-2">{card.expire_month}/{card.expire_year}</p>
                    <div className="flex gap-3 mt-4">
                        <button onClick={() => handleEdit(card)} className="border px-4 py-2 rounded">Edit</button>
                        <button onClick={() => handleDelete(card)} className="border px-4 py-2 rounded">Delete</button>
                        <button onClick={() => setSelectedCard(card)} className="border px-4 py-2 rounded">Select</button>
                    </div>
                </div>
            ))}
            {selectedCard && (
                <div className="bg-green-50 border border-green-300 rounded p-4 mb-6">
                    <p className="font-semibold text-green-700">Selected Card: {selectedCard.name_on_card}</p>
                    <input type="text" placeholder="CCV" value={ccv} onChange={(e) => setCcv(e.target.value)} className="border p-3 rounded mt-4"/>
                </div>
            )}
            {showForm && (
                <form onSubmit={handleSubmit(onSubmit)} className="border rounded p-6 bg-white mb-6">
                    <div className="grid grid-cols-2 gap-4">
                        <input placeholder="Card Number" {...register("card_no")} className="border p-3 rounded"/>
                        <input placeholder="Expire Month" {...register("expire_month")} className="border p-3 rounded"/>
                        <input placeholder="Expire Year" {...register("expire_year")} className="border p-3 rounded"/>
                        <input placeholder="Name On Card" {...register("name_on_card")} className="border p-3 rounded"/>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button type="submit" className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600 transition">Save Card</button>
                    </div>
                </form>
            )}
            <div className="flex justify-end gap-4 mt-6">
                <button onClick={() => setShowForm(!showForm)} className="px-6 py-3 border rounded">Add Card</button>
                <button onClick={handleCreateOrder} className="px-6 py-3 bg-orange-500 rounded hover:bg-orange-600 transition">Create Order</button>
            </div>
        </div>
    )
}

export default PaymentPage
