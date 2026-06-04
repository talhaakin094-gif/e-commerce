import { data } from "../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Hero from "../components/Hero";
import Promo from "../components/Promo";
import FeaturedProducts from "../components/FeaturedProducts";
import PopularProducts from "../components/PopularProducts";
import FeaturedProducts2 from "../components/FeaturedProducts2";
import PopularProducts2 from "../components/PopularProducts2";
import BestSellerProducts from "../components/BestSellerProducts";
import BrandList from "../components/BrandList";
import FeaturedPosts from "../components/FeaturedPosts";
function HomePage() {
  return (
    <>
      <Hero/>
      <Promo promo={data.promo}/>
      <FeaturedProducts featuredProducts={data.featuredProducts}/>
      <PopularProducts popularProducts={data.popularProducts}/>
      <FeaturedProducts2 featuredProducts={data.featuredProducts}/>
      <PopularProducts2 popularProducts={data.popularProducts}/>
      <BestSellerProducts bestSellerProducts={data.bestSellerProducts}/>
      <BrandList brandList={data.brandList}/>
      <FeaturedPosts featuredPosts={data.featuredPosts}/>
    </>  
  );
}

export default HomePage;