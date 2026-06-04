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
          <h1 className="text-[24px] leading-[32px] font-bold text-[#252B42]">Bandage</h1>
          <nav className="flex items-center gap-5 text-[14px] leading-[24px] font-semibold text-[#737373]">
            <Link to="/">Home</Link>
            <div className="flex relative items-center gap-1 cursor-pointer">
              <Link to="/shop">Shop</Link>
              <ChevronDown onClick={() => setShopCat(!shopCat)} size={16} strokeWidth={2.3} />
              {shopCat && (
                <div className="absolute top-full flex flex-col z-2">
                  <p onClick={() => setGroceries(!groceries)}>Groceries</p>
                  {groceries && (
                    <div className="flex flex-col">
                      <Link to="/shop/groceries/fruits">Fruits</Link>
                      <Link to="/shop/groceries/vegetables">Vegetables</Link>
                      <Link to="/shop/groceries/meat">Meat</Link>
                      <Link to="/shop/groceries/pet supplies">Pet Supplies</Link>
                      <Link to="/shop/groceries/cooking essentials">Cooking Essentials</Link>
                      <Link to="/shop/groceries/dairy">Dairy</Link>
                      <Link to="/shop/groceries/seafood">Seafood</Link>
                      <Link to="/shop/groceries/condiments">Condiments</Link>
                      <Link to="/shop/groceries/desserts">Desserts</Link>
                      <Link to="/shop/groceries/beverages">Beverages</Link>
                      <Link to="/shop/groceries/condiments">Condiments</Link>
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
                <Link to="/orders">Orders</Link>
                <button onClick={handleLogout} className="cursor-pointer">Logout</button>
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
            <Link to="/cart"><ShoppingCart size={18} strokeWidth={2.3} /></Link>
            <div className="absolute top-full right-0">
              {cart.map((item) => (
                <div key={item.product.id}>
                  <img src={item.product.images[0]}/>
                  <p>{item.product.title}</p>
                  <p>{item.count}</p>
                </div>
              ))}
            </div>
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