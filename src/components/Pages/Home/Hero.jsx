import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
const Hero = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full max-w-6xl mx-auto pb-5 flex flex-col md:flex-row gap-8 px-5 mt-10 md:mt-20 ">
            <div className="text-left w-full md:w-[50%]  space-y-6">
              <h1 className="text-6xl font-bold">INSiGENe</h1>
              <h3 className="text-2xl font-semibold">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className="text-2xl">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="space-x-4 py-6 ">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
                className="w-full"
                src="https://i.postimg.cc/RZ49MfpC/Insigene-Circle-Slider1.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-6xl mx-auto 
           flex flex-col md:flex-row gap-8 px-5 mt-10 md:mt-20 pb-5 ">
            <div className="text-left w-full md:w-[50%]  space-y-6">
              <h1 className="text-6xl font-bold">BaaS</h1>
              <h3 className="text-2xl font-semibold">
                Get access to a whole team for a fraction of the cost of hiring
                one person
              </h3>
              <p className="text-2xl">
                INSiGENe delivers systems biology-driven bioinformatics as a
                service (BaaS) and biostatistics support for a wide range of
                therapeutics areas.
              </p>
              <div className="mt-12 space-x-4 py-6">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
                className="w-full"
                src="https://i.postimg.cc/pXDRbkZ1/Insigene-Circle-Slider2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-5 mt-10 md:mt-20 pb-5 ">
            <div className="text-left w-full md:w-[50%]  space-y-6">
              <h1 className="text-6xl font-bold">Decipher</h1>
              <h3 className="text-2xl font-semibold">
                Identifies novel therapeutic targets from human or mouse single
                cell mRNA expression data.
              </h3>
              <p className="text-2xl">
                Decipher enables you to go from raw sequencing data to
                experimentally validated, novel therapeutic targets within 12
                months. l
              </p>
              <div className="mt-12 space-x-4 py-6">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
                className="w-full"
                src="https://i.postimg.cc/1t2sPj2b/Insigene-Circles-Slider3-v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
