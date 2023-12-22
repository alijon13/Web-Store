import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import '../../App.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cotegory from '../../Component/Cotegory';
import Sales from '../../Component/Sales';
import { getProduct } from '../../api/home/home';
import { FreeMode } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { ModalPostTrue } from '../../reducers/home/home';
import { closeModal } from '../../reducers/home/home';

const Home = () => {

  const dispatch = useDispatch()

  const product = useSelector((store) => store.home.product);

  const [cart, setCart] = useState()

  const [open, setOpen] = useState()

  const [modalElement, setModalElement] = useState([]);



  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

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
              className="mySwiper" x
            >
              {
                product.map((e) => {
                  return (
                    <div onClick={() => (dispatch(ModalPostTrue(e)), setModalElement({ e }))} className="">
                      <SwiperSlide><Sales e={e} id={e.id} img={`${import.meta.env.VITE_APP_FILES_URL}${e.image}`} btn={'-36%'} cost={e.price} prev={'990'} title={e.productName} color={e.color} /></SwiperSlide>
                    </div>
                  )
                })
              }
              {open == true ? (
                <div className="w-[100%] h-[100vh]  bg-[#00000097] fixed translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 ">
                  <div className="">
                    <div onClick={() => dispatch(closeModal())}
                      className="text-[white] cursor-pointer  left-[97%] top-[2%] fixed"><ClearIcon />
                    </div>
                  </div>
                </div>
              ) : null}

            </Swiper>
          </div>


        </div>





        {/* <div className="">

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

        </div> */}




      </div>
    </div>
  )
}

export default Home










{/*  */ }
