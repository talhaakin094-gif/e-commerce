import { LuClock3 } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
function FeaturedPosts ({ featuredPosts }) {
    return (
        <div className="bg-white py-20">
            <div className="max-w-[1050px] mx-auto">
                <p className="text-[#23A6F0] font-bold text-center">Practice Advice</p>
                <h2 className="text-[40px] font-bold text-[#252B42] text-center mt-3">Featured Posts</h2>
                <div className="grid grid-cols-3 gap-8 mt-10">
                    {featuredPosts.map((item, i) => (
                        <div key={i} className="shadow-sm border border-gray-200 relative">
                            <img src={item.image} className="w-full h-[300px] object-cover"/>
                            <span className="absolute top-5 left-5 bg-[#E74040] text-white font-bold text-[14px] px-4 py-1 rounded">NEW</span>
                            <div class="flex gap-1 px-4 py-4">
                                {item.row.map((r, i) => (
                                    <p key={i} className={`text-[12px] ${i === 0 ? "text-[#8EC2F2]" : "text-[#737373]"}`}>{r}</p>
                                ))}
                            </div>
                            <h3 className="text-[24px] leading-9 text-[#252B42] mt-4 px-4">{item.title}</h3>
                            <p className="text-[#737373] leading-7 mt-4 px-4">{item.subtitle}</p>
                            <div class="flex justify-between mt-8 text-[#737373] text-[14px] px-4">
                                <div className="flex items-center gap-2">
                                    <LuClock3 className="text-[#23A6F0]" />
                                    <span>{item.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <IoStatsChart className="text-[#23856D]" />
                                    <span>{item.comments}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 mt-8 pb-6 px-4">
                                <p className="font-bold text-[#737373]">{item.learnMore}</p>
                                <IoChevronForward className="text-[#23A6F0]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts;