function BestSellerProducts({ bestSellerProducts }) {
    return (
        <div className="bg-[#FAFAFA] py-20">
            <div className="max-w-[1050px] bg-[#FAFAFA] mx-auto">
                <h2 className="text-[24px] font-bold text-[#252B42] mt-3 border-b border-gray-200 pb-6">BESTSELLER PRODUCTS</h2>
                <div className="grid grid-cols-4 gap-8 mt-10">
                    {bestSellerProducts.map((item, i) => (
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
            </div>
        </div>
    );
}

export default BestSellerProducts;