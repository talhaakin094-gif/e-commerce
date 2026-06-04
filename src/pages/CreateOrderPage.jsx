import { useEffect, useState } from "react";
import api from "../api/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function CreateOrderPage() {
    const [addresses, setAddresses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    useEffect(() => {
        api.get("/user/address")
            .then((res) => {
                setAddresses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const onSubmit = async (data) => {
        try {
            let res
        if (editingAddress) {
            res = await api.put("/user/address", {
                ...data,
                id: editingAddress.id
            });
        setAddresses(
            addresses.map((item) => item.id === editingAddress.id ? res.data : item));
        } else {
            res = await api.post("/user/address", data);
            setAddresses([...addresses, res.data]);
        }
            setShowForm(false);
        } catch (error) {
            console.log(error);
        }
    };
    const [editingAddress, setEditingAddress] = useState(null);
    const handleEdit = (address) => {
        setEditingAddress(address);
        setShowForm(true);
        setValue("title", address.title);
        setValue("name", address.name);
        setValue("surname", address.surname);
        setValue("phone", address.phone);
        setValue("city", address.city);
        setValue("district", address.district);
        setValue("neighborhood", address.neighborhood);
    };
     const handleDelete = async (address) => {
        try {
            await api.delete(`/user/address/${address.id}`);
            setAddresses(
                addresses.filter((item) => item.id !== address.id)
            );
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="max-w-[1000px] mx-auto p-10">
            <div className="flex flex-col gap-6">
                {addresses.map((address) => (
                    <div key={address.id} className="border rounded p-6 mb-4">
                        <p className="font-bold text-lg mb-2">{address.title}</p>
                        <p>{address.name}</p>
                        <p>{address.city}</p>
                        <button onClick={() => handleEdit(address)} className="mt-4 border px-4 py-2 rounded">Edit</button>
                        <button onClick={() => handleDelete(address)} className="border px-4 py-2 rounded">Delete</button>
                        <button onClick={() => setSelectedAddress(address)} className="mt-4 border px-4 py-2 rounded">Select</button>
                    </div>
                ))}
            </div>
            {selectedAddress && (
                <p className="border rounded p-4 bg-green-50">Selected Address: {selectedAddress.title}</p>
            )}
            <div className="mt-6 flex flex-col gap-6 items-center">
                <div className="flex gap-4 mt-6">
                {showForm && (
                    <form onSubmit={handleSubmit(onSubmit)} className="border rounded p-6 flex flex-col gap-4">
                        <input placeholder="Title" {...register("title")} className="border p-3 rounded"/>
                        <input placeholder="Name" {...register("name")} className="border p-3 rounded"/>
                        <input placeholder="Surname" {...register("surname")} className="border p-3 rounded"/>
                        <input placeholder="Phone" {...register("phone")} className="border p-3 rounded"/>
                        <input placeholder="City" {...register("city")} className="border p-3 rounded"/>
                        <input placeholder="District" {...register("district")} className="border p-3 rounded"/>
                        <textarea placeholder="Neighborhood" {...register("neighborhood")} className="mt-2 text-gray-600"/>
                        <button type="submit">Save Address</button>
                    </form>
                )}
                </div>    
                <div className="flex gap-4 mt-6">
                    <button onClick={() => setShowForm(!showForm)} className="px-6 py-3 border rounded hover:border-orange-500">Add Address</button>
                    <button onClick={() => navigate("/payment", {state: {selectedAddress}})} className="px-6 py-3 bg-orange-500 text-white rounded">Continue</button>
                </div>
            </div>
        </div>
    );
}

export default CreateOrderPage;