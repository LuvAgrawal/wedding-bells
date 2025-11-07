import { SwiperSlide, Swiper } from "swiper/react";
import { swiperImages } from "../assets/data/pageData";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperImages = () => {
    return (<>
        <Swiper
            modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
            slidesPerView={1}
            spaceBetween={400}
            navigation
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
        >
            {swiperImages.map((item, index) => (
                <SwiperSlide key={index}>
                    <img
                        className="h-[90vh] lg:h-screen w-full object-cover overflow-hidden"
                        src={item}
                        alt={index}
                    />
                    {/* Banner Section */}
                    <div className="fixed capitalize text-center inset-0 flex items-center justify-center bg-[#00000055] ">
                        <div className="fixed transform left-1/2 top-5/6 -translate-x-1/2 -translate-y-3/4 bg-[#00000055] p-6 rounded-md">
                            <h1 className="text-[rgb(255,255,255)] text-4xl md:text-6xl font-bold mb-4">
                                Perfect Start For A Perfect Wedding
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400">
                                Inducing the flavor of technology in desi weddings with all new customized wedding experience.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>)
}

export default SwiperImages;