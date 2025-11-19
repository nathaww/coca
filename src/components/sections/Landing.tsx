
import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Navigation, Autoplay, EffectFade } from 'swiper/modules'
// @ts-expect-error Swiper CSS imports may not be recognized by TypeScript
import 'swiper/css'
// @ts-expect-error Swiper parallax CSS import
import 'swiper/css/parallax'
// @ts-expect-error Swiper navigation CSS import
import 'swiper/css/navigation'
// @ts-expect-error Swiper fade effect CSS import
import 'swiper/css/effect-fade'
import Button from '../ui/Button'

const Landing = () => {
  return (
    <div id="home" className="h-dvh w-screen relative">
        <div className='absolute bg-black/60 w-screen z-10 h-dvh flex flex-col items-center justify-center text-white px-4'>
            <h1 className='text-5xl sm:text-8xl font-extrabold mb-4'>Pure Cocoa. <br className='flex sm:hidden' /> Pure Origin.</h1>
            <p className='sm:text-xl text-center'>Sourced with integrity. Delivered with care. Experience cocoa in its truest form.</p>
            <Button text='Explore Our Products' className='text-white border rounded-lg border-white mt-8'/>
        </div>
        <img src="/images/cocoa.svg" alt="Cocoa illustration" className="hidden sm:block absolute right-28 -bottom-[30%] w-[700px] object-contain z-10" />
      <Swiper
        modules={[Parallax, Navigation, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        className="h-full"
      >
        <SwiperSlide className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/2.jpg)' }}
            
          ></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/3.jpg)' }}
            
          ></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/4.jpg)' }}
            
          ></div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/5.jpg)' }}
            
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Landing