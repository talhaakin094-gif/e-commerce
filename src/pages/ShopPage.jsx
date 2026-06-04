import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function ShopPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.product);
    const { category, subcategory } = useParams();
    const filteredProducts = subcategory ? products?.filter((item) => item.tags[0] === subcategory) : products
    const currentProducts = filteredProducts?.slice(firstIndex, lastIndex) || [];
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    return (
        <div className="bg-white max-w-[1050px] mx-auto">
            <div className="grid grid-cols-4 gap-8 pb-20">
                {currentProducts.map((item, i) => (
                    <Link key={i} to={`/shop/${category}/${subcategory}/${item.title}/${item.id}`} className="cursor-pointer">
                        <img src={item.images[0]} className="w-full h-[240px] object-cover"/>
                        <h3 className="text-[16px] font-bold text-[#252B42] mt-6 text-center">{item.title}</h3>
                        <p className="text-[14px] font-semibold text-[#737373] mt-2 text-center">{item.description}</p>
                        <p className="text-[#23856D] font-bold">{item.price}</p>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center py-20">
                <button onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)} className="border px-4">prev</button>
                <button onClick={() => setCurrentPage(1)} className="border px-4">1</button>
                <button onClick={() => setCurrentPage(2)} className="border px-4">2</button>
                <button onClick={() => setCurrentPage(3)} className="border px-4">3</button>
                <button onClick={() => setCurrentPage(4)} className="border px-4">4</button>
                <button onClick={() => setCurrentPage(5)} className="border px-4">5</button>
                <button onClick={() => setCurrentPage(6)} className="border px-4">6</button>
                <button onClick={() => setCurrentPage(7)} className="border px-4">7</button>
                <button onClick={() => setCurrentPage(8)} className="border px-4">8</button>
                <button onClick={() => setCurrentPage(9)} className="border px-4">9</button>
                <button onClick={() => setCurrentPage(10)} className="border px-4">10</button>
                <button onClick={() => setCurrentPage(11)} className="border px-4">11</button>
                <button onClick={() => currentPage < 11 && setCurrentPage(currentPage + 1)} className="border px-4">next</button>
            </div>
        </div>
    );
}

export default ShopPage;