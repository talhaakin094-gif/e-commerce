import { data } from "../data/data";
import { useState } from "react";
import { useParams } from "react-router-dom";
function ShopPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = data.bestSellerProducts.slice(firstIndex, lastIndex);
    const filteredProducts = currentProducts.filter((item) => item.category === category)
    const { category } = useParams();
    return (
        <div className="bg-white max-w-[1050px] mx-auto">
            <div className="py-10">
                <h1 className="text-[40px] font-bold text-[#252B42]">Shop</h1>
                <div className="flex gap-3 pt-4">
                    <p className="font-bold text-[#252B42]">Home</p>
                    <p className="text-[#737373]">{">"}</p>
                    <p className="font-bold text-[#737373]">Shop</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="w-[220px]">
                    <h3 className="font-bold text-[20px]">Categories</h3>
                    <div className="text-[#737373]">
                        <p>Foods</p>
                        <p>Drinks</p>
                        <p>Desserts</p>
                        <p>Snacks</p>
                    </div>
                </div>
                <select className="h-10">
                    <option>Popularity</option>
                    <option>Price Low</option>
                    <option>Price High</option>
                </select>
            </div>
            <div className="grid grid-cols-4 gap-8 pb-20">
                {currentProducts.map((item, i) => (
                    <div key={i}>
                        <img src={item.image} className="w-full h-[240px] object-cover"/>
                        <h3 className="text-[16px] font-bold text-[#252B42] mt-6 text-center">{item.title}</h3>
                        <p className="text-[14px] font-semibold text-[#737373] mt-2 text-center">{item.subtitle}</p>
                        <div className="flex justify-center gap-3 mt-3">
                            <p className="text-[#BDBDBD] font-bold">{item.oldPrice}</p>
                            <p className="text-[#23856D] font-bold">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex">
                <button onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} className="border px-4">prev</button>
                <button onClick={() => setCurrentPage(1)} className="border px-4">1</button>
                <button onClick={() => setCurrentPage(2)} className="border px-4">2</button>
                <button onClick={() => setCurrentPage(3)} className="border px-4">3</button>
                <button onClick={() => currentPage < 3 && setCurrentPage(currentPage + 1)} className="border px-4">next</button>
            </div>
        </div>
    );
}

export default ShopPage;