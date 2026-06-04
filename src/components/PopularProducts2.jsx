function PopularProducts2({ popularProducts }) {
    return (
        <div className="bg-white py-20">
            <div className="max-w-[1050px] bg-[#F8F8F8] mx-auto flex gap-8">
                <div className="w-[380px] bg-[#F8F8F8] px-10 py-12">
                    <h2 className="text-[36px] font-bold text-[#252B42] text-center">{popularProducts.mostPopular.title}</h2>
                    <p className="text-[#737373] text-center mt-6 leading-7">{popularProducts.mostPopular.subtitle}</p>
                    <img src="https://i.imgur.com/zqiKJKQ.jpeg" className="w-full h-[280px] object-cover mt-10"/>
                    <h3 className="text-[18px] font-bold text-[#252B42] text-center mt-10">{popularProducts.mostPopular.text}</h3>
                    <div className="flex justify-center gap-3 mt-5">
                        <p className="text-[#BDBDBD] font-bold">{popularProducts.mostPopular.oldPrice}</p>
                        <p className="text-[#23856D] font-bold">{popularProducts.mostPopular.price}</p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="https://images.unsplash.com/photo-1511381939415-e44015466834" className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className="max-w-[1050px] mx-auto grid grid-cols-4 gap-10 mt-16">
                {popularProducts.products.map((item, i) => (
                    <div key={i} className="flex gap-4">
                        <h2 className="text-[48px] font-bold text-[#E74040]">{item.number}</h2>
                        <div>
                            <h3 className="font-bold text-[#252B42]">{item.title}</h3>
                            <p className="text-[#737373] mt-2">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularProducts2;
