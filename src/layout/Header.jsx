import { Search, ShoppingCart, Heart, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [shopCat, setShopCat] = useState(false)
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1380px] h-[91px] mx-auto flex items-center justify-between px-9">
        <div className="flex items-center gap-14">
          <h1 className="text-[24px] leading-[32px] font-bold text-[#252B42]">Bandage</h1>
          <nav className="flex items-center gap-5 text-[14px] leading-[24px] font-semibold text-[#737373]">
            <a href="/">Home</a>
              <div onClick={() => setShopCat(!shopCat)} className="flex relative items-center gap-1 cursor-pointer">
                <span>Shop</span>
                <ChevronDown size={16} strokeWidth={2.3} />
                {shopCat && (
                <div className="absolute top-full">
                  <Link to="/shop?category=food">Food</Link>
                  <Link to="/shop?category=cleaning">Cleaning</Link>
                  <Link to="/shop?category=stationary">Stationary</Link>
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
            <span>Login / Register</span>
          </div>
          <Search size={18} strokeWidth={2.3} className="cursor-pointer" />
          <div className="flex items-center gap-1 cursor-pointer">
            <ShoppingCart size={18} strokeWidth={2.3} />
            <span>1</span>
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