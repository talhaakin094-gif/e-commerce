import { useParams } from "react-router-dom";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../store/productSlice";
import { addToCart } from "../store/cartSlice";
function ProductDetailPage() {
    const { product, loading } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const { productId } = useParams();
    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [productId])
    return (
        <div className="flex flex-col items-center max-w-[1050px] mx-auto gap-8 p-20">
            <h1 className="text-3xl font-bold text-center">{product?.title}</h1>
            <img src={product?.images?.[0]} className="w-[350px] h-[350px] object-cover rounded-lg" />
            <p className="text-gray-600 text-center max-w-[700px]">{product?.description}</p>
            <p className="text-3xl font-bold text-orange-500">${product?.price}</p>
            <button onClick={() => dispatch(addToCart(product))} className="px-8 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition cursor-pointer">Add To Cart</button>
        </div>
    )
}

export default ProductDetailPage;
