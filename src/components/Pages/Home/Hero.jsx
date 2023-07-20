
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full max-w-5xl mx-auto  swippe">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="w-full md:h-[88vh]  flex flex-col md:flex-row  justify-center items-center gap-8 py-10 px-5">
            <div className="text-left w-full md:w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
              className="w-full"
                src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full md:h-[88vh]  flex flex-col md:flex-row  justify-center items-center gap-8 py-10 px-5">
            <div className="text-left w-full md:w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
              className="w-full"
                src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full md:h-[88vh]  flex flex-col md:flex-row  justify-center items-center gap-8 py-10 px-5">
            <div className="text-left w-full md:w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
              className="w-full"
                src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full md:h-[88vh]  flex flex-col md:flex-row  justify-center items-center gap-8 py-10 px-5">
            <div className="text-left w-full md:w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
              className="w-full"
                src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full md:h-[88vh]  flex flex-col md:flex-row  justify-center items-center gap-8 py-10 px-5">
            <div className="text-left w-full md:w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-full md:w-[50%]">
              <img
              className="w-full"
                src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex">
            <div className="text-left w-full md:w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-[50%]">
              <img
                src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  items-center gap-12">
            <div className="text-left w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="w-[80%]">
                <img
                  src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex  items-center gap-12">
            <div className="text-left w-[50%] ">
              <h1 className="text-7xl font-bold">INSiGENe</h1>
              <h3 className="text-3xl font-semibold mt-8">
                GENesis of actionable INSights to unlock disease & novel
                therapies
              </h3>
              <p className=" text-xl font-semibold mt-8">
                Are you a researcher struggling to extract disease-causing
                mechanisms and actionable targets for drug discovery from vast
                multi-dimensional omics data?
              </p>
              <div className="mt-12 space-x-4">
                <Link className="btn-primary">Find out more</Link>
                <Link className="btn-primary">Schedule a call</Link>
              </div>
            </div>
            <div className="w-[50%]">
              <img
                src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper> */}
    </div>
  );
};

export default Hero;
