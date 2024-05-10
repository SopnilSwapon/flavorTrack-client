import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerimg1 from '../../assets/food1.jpg'
import bannerimg2 from '../../assets/food6.jpg'
import bannerimg3 from '../../assets/food3.jpg'
import bannerimg4 from '../../assets/food5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Pages/banner.css'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='pt-20'>
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
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full bg-center bg-no-repeat h-[550px] rounded-md bg-cover " style={{ backgroundImage: `url(${bannerimg3})` }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mt-52 text-purple-500 md:w-4/6 lg:w-1/2 mx-auto text-5xl font-bold">Veggie Delight Burger</h1>
                                <p className="mb-5 text-white font-bold">The Veggie Delight Burger is n0t just a meal; it iss a celebration of vibrant flavors and nutritious ingredients coming together to create a burger that is as satisfying for your taste buds as it is for your health-conscious sou</p>
                                <Link to='/allfoods'><button className="btn btn-primary">All Foods</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-center bg-no-repeat h-[550px] rounded-md bg-cover " style={{ backgroundImage: `url(${bannerimg1})` }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mt-52 text-pink-500 md:w-4/6 lg:w-1/2 mx-auto bg-gray-400 text-5xl font-bold">Veggie Delight Burger</h1>
                                <p className="mb-5 text-white font-bold">The Veggie Delight Burger is n0t just a meal; it iss a celebration of vibrant flavors and nutritious ingredients coming together to create a burger that is as satisfying for your taste buds as it is for your health-conscious sou</p>
                                <Link to='/allfoods'><button className="btn btn-primary">All Foods</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-center bg-no-repeat h-[550px] rounded-md bg-cover " style={{ backgroundImage: `url(${bannerimg2})` }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mt-52 text-pink-500 md:w-4/6 lg:w-1/2 mx-auto text-5xl font-bold">Veggie Delight Burger</h1>
                                <p className="mb-5 text-white font-bold">The Veggie Delight Burger is n0t just a meal; it iss a celebration of vibrant flavors and nutritious ingredients coming together to create a burger that is as satisfying for your taste buds as it is for your health-conscious sou</p>
                                <Link to='/allfoods'><button className="btn btn-primary">All Foods</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full bg-center bg-no-repeat h-[550px] rounded-md bg-cover " style={{ backgroundImage: `url(${bannerimg4})` }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">
                                <h1 className="mt-52 text-pink-500 md:w-4/6 lg:w-1/2 mx-auto bg-gray-400 text-5xl font-bold">Veggie Delight Burger</h1>
                                <p className="mb-5 text-white font-bold">The Veggie Delight Burger is n0t just a meal; it iss a celebration of vibrant flavors and nutritious ingredients coming together to create a burger that is as satisfying for your taste buds as it is for your health-conscious sou</p>
                                <Link to='/allfoods'><button className="btn btn-primary">All Foods</button></Link>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        {/* <circle cx="24" cy="24" r="20"></circle> */}
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;