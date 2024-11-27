'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SwiperWithCustomNavigation = ({ slides }) => {
  //const router = useRouter();
  const pathname = usePathname();
  const swiperRef = useRef(null);

  const currentSlideIndex = slides.findIndex((slide) => slide.route === pathname);

  // Обработка изменения слайда
  const handleSlideChange = (swiper) => {
    const newRoute = slides[swiper.activeIndex]?.route;
    if (newRoute && pathname !== newRoute) {
      //router.replace(newRoute) - c ним не получится
      window.history.pushState({}, "", `${newRoute}`);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Swiper
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        speed={2000}
        initialSlide={currentSlideIndex >= 0 ? currentSlideIndex : 0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.route}>
            <div className="text-center p-4 bg-slate-200 h-full">
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные кнопки */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className='absolute top-[50%] left-3 translate-y-[-50%] text-white cursor-pointer bg-black border-none z-10 p-2'
      >
        Prev
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className='absolute top-[50%] right-3 translate-y-[-50%] text-white cursor-pointer bg-black border-none z-10 p-2'
      >
        Next
      </button>
    </div>
  );
};

export default SwiperWithCustomNavigation;
