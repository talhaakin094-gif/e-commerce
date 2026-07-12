import { Search, ShoppingCart, Heart, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/clientSlice";
import api from "../api/api";
import { useDispatch } from "react-redux";
import md5 from "md5";
function Header() {
  const [shopCat, setShopCat] = useState(false)
  const [groceries, setGroceries] = useState(false)
  const [beauty, setBeauty] = useState(false)
  const [parfume, setParfume] = useState(false)
  const [furniture, setFurniture] = useState(false)
  const { cart } = useSelector((state) => state.cart);
  const { user, isLoggedIn } = useSelector((state) => state.client);
  const [openCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    dispatch(logout());
  };
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1380px] h-[91px] mx-auto flex items-center justify-between px-9">
        <div className="flex items-center gap-14">
          <h1 className="inline-block rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-6 py-2 text-3xl font-black text-white shadow-xl hover:scale-105 transition duration-300 cursor-pointer">🥬 The Grocery</h1>
          <nav className="flex items-center gap-5 text-[14px] leading-[24px] font-semibold text-[#737373]">
            <Link to="/">Home</Link>
            <div className="flex relative items-center gap-1 cursor-pointer">
              <Link to="/shop">Shop</Link>
              <ChevronDown onClick={() => setShopCat(!shopCat)} size={20} strokeWidth={3} className="cursor-pointer text-white bg-green-500 rounded-full p-1.5 animate-pulse hover:animate-none hover:scale-125 transition-all shadow-lg" />
              {shopCat && (
                <div className="absolute top-full flex flex-col z-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-gray-200">
                  <p onClick={() => setGroceries(!groceries)}>Groceries⭐</p>
                  {groceries && (
                    <div className="mt-2 flex flex-col gap-2 rounded-xl bg-emerald-50 p-3 shadow-lg border border-emerald-200">
                      <Link to="/shop/groceries/fruits" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Fruits</Link>
                      <Link to="/shop/groceries/vegetables" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Vegetables</Link>
                      <Link to="/shop/groceries/meat" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Meat</Link>
                      <Link to="/shop/groceries/pet supplies" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Pet Supplies</Link>
                      <Link to="/shop/groceries/cooking essentials" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Cooking Essentials</Link>
                      <Link to="/shop/groceries/dairy" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Dairy</Link>
                      <Link to="/shop/groceries/seafood" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Seafood</Link>
                      <Link to="/shop/groceries/condiments" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Condiments</Link>
                      <Link to="/shop/groceries/desserts" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Desserts</Link>
                      <Link to="/shop/groceries/beverages" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Beverages</Link>
                      <Link to="/shop/groceries/condiments" className="rounded-md hover:bg-emerald-100 hover:text-emerald-700 transition">Condiments</Link>
                    </div>
                  )}
                  <Link onClick={() => setBeauty(!beauty)} to="/shop/beauty/beauty">Beauty</Link>
                  <Link onClick={() => setParfume(!parfume)} to="/shop/fragrances/fragrances">Parfume</Link>
                  <Link onClick={() => setFurniture(!furniture)} to="/shop/furniture/furniture">Furniture</Link>
                </div>
              )}
            </div>
            <a href="/">About</a>
            <a href="/">Blog</a>
            <a href="/">Contact</a>
            <a href="/">Pages</a>
          </nav>
        </div>
        <div className="flex items-center gap-6 text-[#23A6F0] text-[14px] leading-[24px] font-semibold">
          <div className="flex items-center gap-1 cursor-pointer">
            <User size={16} strokeWidth={2.3} />
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <img src={`https://www.gravatar.com/avatar/${md5(user.email.trim().toLowerCase())}`} className="w-8 h-8 rounded-full"/>
                <span>{user.name}</span>
                <button onClick={handleLogout} className="cursor-pointer">Logout</button>
                <Link to="/orders">Orders</Link>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login">Login</Link>
                <span>/</span>
                <Link to="/signup">Register</Link>
              </div>
            )}
          </div>
          <Search size={18} strokeWidth={2.3} className="cursor-pointer" />
          <div className="flex relative items-center gap-1 cursor-pointer">
            <Link to="/cart" onClick={() => setOpenCart(!openCart)}><ShoppingCart size={18} strokeWidth={2.3} /></Link>
            {openCart && (
            <div className="absolute top-full right-0 z-2">
              {cart.map((item) => (
                <div key={item.product.id}>
                  <img src={item.product.images[0]}/>
                  <p>{item.product.title}</p>
                  <p>{item.count}</p>
                </div>
              ))}
            </div>
            )}
            <span>{cart.length}</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Heart size={18} strokeWidth={2.3} />
            <span>1</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;