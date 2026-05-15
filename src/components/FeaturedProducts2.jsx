function FeaturedProducts2({ featuredProducts }) {
    return (
        <div className="bg-white py-20 max-w-[1050px] mx-auto flex gap-8">
            <div className="flex-1">
                <div className="flex items-center justify-between border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-10">
                        <h2 className="text-[24px] font-bold text-[#252B42]">BESTSELLER PRODUCTS</h2>
                        <div className="flex gap-8">
                            <p className="text-[#737373] font-semibold">Men</p>
                            <p className="text-[#737373] font-semibold">Women</p>
                            <p className="text-[#737373] font-semibold">Accessories</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-[48px] h-[48px] rounded-full border border-gray-300">←</button>
                        <button className="w-[48px] h-[48px] rounded-full border border-gray-300">→</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-10 gap-y-14 mt-10">
                    {featuredProducts.map((item, i)=> (
                        <div key={i} className="text-center">
                            <img src={item.image} className="w-full h-[180px] object-cover"/>
                            <h3 className="text-[16px] font-bold text-[#252B42] mt-6">{item.title}</h3>
                            <p className="text-[14px] font-semibold text-[#737373] mt-2">{item.subtitle}</p>
                            <div className="flex justify-center gap-3 mt-4">
                                <p className="text-[#BDBDBD] font-bold">{item.oldPrice}</p>
                                <p className="text-[#23856D] font-bold">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[240px] relative">
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e" className="w-full h-full object-cover"/>
                <div className="absolute top-8 left-8">
                    <p className="text-[14px] font-bold text-[#252B42]">FURNITURE</p>
                    <p className="text-[14px] font-bold text-[#2DC071] mt-3">5 Items</p>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts2;