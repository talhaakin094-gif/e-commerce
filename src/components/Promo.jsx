function Promo({ promo }) {
  return (
    <div className="bg-[#FAFAFA] py-16">
    <div className="max-w-[1050px] mx-auto">
      <div className="grid grid-cols-3 gap-8">
        {promo.map((item, i) => (
          <div key={i} className="bg-white border border-gray-200 flex items-center justify-between px-6 py-6">
            <div>
              <p className="text-[14px] text-[#737373]">{item.subtitle}</p>
              <h3 className="text-[24px] font-bold text-[#252B42] mt-3">{item.title}</h3>
              <p className="text-[14px] font-semibold text-[#252B42] mt-5">{item.text}</p>
            </div>
            <img src={item.image} className="w-[180px] h-[180px] object-cover"/>  
          </div>
        ))} 
      </div>
    </div>
    </div>
  );
}

export default Promo;