import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '../../App.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cotegory from '../../Component/Cotegory';
import Sales from '../../Component/Sales';


import { FreeMode } from 'swiper/modules';

const Home = () => {
  return (
    <div className='wrapper'>
      <div className="w-[73%] m-auto">

        <div className="pt-[130px] ">
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
            <SwiperSlide><img src="src/assets/banner-1696573347630 (1).png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="src/assets/banner-1696483363655.jpg" alt="" /></SwiperSlide>

          </Swiper>
        </div>

        <div className="">
          <div className="mb-[40px]">
            <h1 className='text-[24px] font-[700] mt-[65px] '>Популярные категории</h1>
          </div>
          <div className="Cotegory grid grid-cols-6 gap-[30px]">
            <Cotegory img={'src/assets/widgetLink-1675228380706.jpg'} title={'Скидки'} />
            <Cotegory img={'src/assets/Смартфоны-1638869130347.jpg'} title={'Смартфоны и планшеты'} />
            <Cotegory img={'src/assets/widgetLink-1681729799113.jpg'} title={'Кондиционеры'} />
            <Cotegory img={'src/assets/widgetLink-1700564306566.jpg'} title={'Парфюмерия'} />
            <Cotegory img={'src/assets/Наушники-1638869187090.jpg'} title={'Наушники'} />
            <Cotegory img={'src/assets/Телевизоры-1638869164491.jpg'} title={'Телевизоры'} />
            <Cotegory img={'src/assets/Ноутбуки-1638869204798.jpg'} title={'Ноутбуки'} />
            <Cotegory img={'src/assets/widgetLink-1689853071427.jpg'} title={'Книги'} />
            <Cotegory img={'src/assets/widgetLink-1676893564298.jpg'} title={'Бытовая техника'} />
            <Cotegory img={'src/assets/widgetLink-1678167268234.jpg'} title={'Мелкая бытовая техника'} />
            <Cotegory img={'src/assets/Строительные инструменты-1644811867801.jpg'} title={'Строительство и ремонт'} />
            <Cotegory img={'src/assets/aaaa.png'} title={'Товары для красоты'} />
          </div>

        </div>

        <div className="">

          <div className="">
            <div className="flex items-center mt-[75px]">
              <h1 className='text-[24px] font-[700]'>Самые горячие скидки 🔥</h1>
              <span className='pl-[15px] text-[#3E75A8] font-[600]'>Смотреть все</span>
            </div>
          </div>

          <div className="mt-[60px]">
            <Swiper
              slidesPerView={5}
              spaceBetween={140}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/televizor-yasin-smart32-32dyuym-1665653449917-md.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
            </Swiper>
          </div>
        </div>



        <div className="">

          <div className="">
            <div className="flex items-center mt-[75px]">
              <h1 className='text-[24px] font-[700]'>Обогреватели</h1>
              <span className='pl-[15px] text-[#3E75A8] font-[600]'>Смотреть все</span>
            </div>
          </div>

          <div className="mt-[60px]">
            <Swiper
              slidesPerView={5}
              spaceBetween={140}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/images (2).jpg'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
            </Swiper>
          </div>

        </div>



        <div className="">

          <div className="">
            <div className="flex items-center mt-[75px]">
              <h1 className='text-[24px] font-[700]'>Водонагреватели </h1>
              <span className='pl-[15px] text-[#3E75A8] font-[600]'>Смотреть все</span>
            </div>
          </div>

          <div className="mt-[60px]">
            <Swiper
              slidesPerView={5}
              spaceBetween={140}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Водонагреватели.png'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
            </Swiper>
          </div>

        </div>



        <div className="">

          <div className="">
            <div className="flex items-center mt-[75px]">
              <h1 className='text-[24px] font-[700]'>Книжное путешествие </h1>
              <span className='pl-[15px] text-[#3E75A8] font-[600]'>Смотреть все</span>
            </div>
          </div>

          <div className="mt-[60px]">
            <Swiper
              slidesPerView={5}
              spaceBetween={140}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
              <SwiperSlide><Sales img={'src/assets/Книжное путешествие.webp'} btn={'-36%'} cost={'1219'} prev={'990'} title={'Телевизор Yasin-Smart32, 32дюйм.'} /></SwiperSlide>
            </Swiper>
          </div>

        </div>




      </div>
    </div>
  )
}

export default Home










{/*  */ }
