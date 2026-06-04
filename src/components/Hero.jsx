import img1 from "../images/img1.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
function Hero () {
    return (
        <Swiper navigation={true} pagination={{ clickable: true }} modules={[Navigation, Pagination] }>
            <SwiperSlide>
                <div className="relative h-[600px]">
                    <img src={img1} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h1 className="text-6xl font-bold">GROCERIES DELIVERY</h1>
                        <p className="text-xl mt-6 text-center max-w-[700px]">We know how large objects will act, but things on a small scale just do not act that way.</p>
                        <Link to="/shop" className="mt-8 bg-sky-500 px-10 py-4 rounded text-2xl font-bold cursor-pointer">Start Now</Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative h-[600px]">
                    <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h1 className="text-6xl font-bold">GROCERIES DELIVERY</h1>
                        <p className="text-xl mt-6 text-center max-w-[700px]">We know how large objects will act, but things on a small scale just do not act that way.</p>
                        <Link to="/shop" className="mt-8 bg-sky-500 px-10 py-4 rounded text-2xl font-bold cursor-pointer">Start Now</Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
} 

export default Hero