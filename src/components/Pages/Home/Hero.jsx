import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Hero = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
    return (
        <div className='h-[90vh] swippe'>
      <Swiper
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
            <div className='flex  items-center gap-12'>
                <div className='text-left w-[50%] ml-64'>
                    <h1 className='text-7xl font-bold'>INSiGENe</h1>
                    <h3 className='text-3xl font-semibold mt-8'>GENesis of actionable INSights to unlock disease & novel therapies</h3>
                    <p className=' text-xl font-semibold mt-8'>Are you a researcher struggling to extract disease-causing mechanisms and actionable targets for drug discovery from vast multi-dimensional omics data?</p>
                    <div className='mt-12 space-x-4'>
                    <Link className='btn-primary'>Find out more</Link>
                    <Link className='btn-primary'>Schedule a call</Link>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <div className='w-[80%]'>
                    <img src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex  items-center gap-12'>
                <div className='text-left w-[50%] ml-64'>
                    <h1 className='text-7xl font-bold'>INSiGENe</h1>
                    <h3 className='text-3xl font-semibold mt-8'>GENesis of actionable INSights to unlock disease & novel therapies</h3>
                    <p className=' text-xl font-semibold mt-8'>Are you a researcher struggling to extract disease-causing mechanisms and actionable targets for drug discovery from vast multi-dimensional omics data?</p>
                    <div className='mt-12 space-x-4'>
                    <Link className='btn-primary'>Find out more</Link>
                    <Link className='btn-primary'>Schedule a call</Link>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <div className='w-[80%]'>
                    <img src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex  items-center gap-12'>
                <div className='text-left w-[50%] ml-64'>
                    <h1 className='text-7xl font-bold'>INSiGENe</h1>
                    <h3 className='text-3xl font-semibold mt-8'>GENesis of actionable INSights to unlock disease & novel therapies</h3>
                    <p className=' text-xl font-semibold mt-8'>Are you a researcher struggling to extract disease-causing mechanisms and actionable targets for drug discovery from vast multi-dimensional omics data?</p>
                    <div className='mt-12 space-x-4'>
                    <Link className='btn-primary'>Find out more</Link>
                    <Link className='btn-primary'>Schedule a call</Link>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <div className='w-[80%]'>
                    <img src="https://insigene.com/wp-content/uploads/2023/05/Insigene_Circles_Slider3_v2.png" alt="" />
                    </div>
                </div>
            </div>
        </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
    );
};

export default Hero;