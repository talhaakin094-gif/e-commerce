function BrandList({ brandList }) {
    return (
        <div className="bg-[#F8F8F8]">
            <div className="max-w-[1050px] mx-auto grid grid-cols-6 py-20">
                {brandList.map((item, i) => (
                    <div key={i} >
                        <img src={item.image} className="w-full h-[180px] object-cover"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BrandList;