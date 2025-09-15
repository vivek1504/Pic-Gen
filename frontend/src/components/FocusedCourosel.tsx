import c1 from "@/assets/c1.jpg";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpg";
import c4 from "@/assets/c4.jpg";
import c5 from "@/assets/c5.jpg";
import c6 from "@/assets/c6.jpg";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperCarousel = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            src: c5,
            title: "Create Design in Any Style",
            desc: "Whether you need a sleek, modern look for a tech startup or a whimsical, hand-drawn style for a children's book, PicGen can generate images in a wide range of artistic styles. From photorealistic renderings to abstract art, the possibilities are endless."
        },
        {
            src: c2,
            title: "Bring Stories to Life with Vivid Illustrations",
            desc: "To improve the content richness of your novels, comics, or interactive stories, you must try adding images. AI-generated character portraits, fantasy landscapes, and sci-fi settings, these can highly help you to finish this purpose without a fortune. Whether you're a game master designing an immersive"
        },
        {
            src: c3,
            title: "Generate Unique Marketing & Social Media Content",
            desc: "Create eye-catching visuals for ads, social media posts, and blog graphics that stand out. PicGen helps marketers and content creators produce custom images that align with brand aesthetics and campaign goals, whether for Instagram, Facebook, Twitter, or LinkedIn."
        },
        {
            src: c4,
            title: "Enhance Learning Materials & Presentations",
            desc: "Generate engaging visuals, infographics, and explainer images with AI to make educational content more compelling. Whether you're designing PowerPoint slides for business presentations, online courses for Udemy, or study materials for Notion, PicGen helps illustrate abstract concepts with stunning clarity."
        },
        {
            src: c6,
            title: "Make Your Brand Stand Out with Custom Visuals",
            desc: "Create unique logos, mascots, and brand imagery that reflect your company's identity. PicGen enables businesses to develop a cohesive visual style for websites, packaging, and promotional materials without the need for expensive design services."
        },
        {
            src: c1,
            title: "Create Instant Concept Art & Game Assets",
            desc: "Generate background settings, character designs, and 3D concept art for use as placeholders or references in game production. PicGen accelerates the creative process and offers a strong basis for additional development whether your project is prototyping concepts for mobile games or VR experiences or producing assets for Unity, Unreal Engine, or Roblox."
        }
    ];

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    return (
        <div className="w-screen flex flex-col bg-black/70 py-20">
            <div className="w-screen flex items-center justify-center mb-10 bg-black">
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    pagination={{
                        el: ".custom-pagination",
                        clickable: true,
                        type: "bullets",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",

                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={1000}
                    centeredSlides={true}
                    slidesPerView={2}
                    spaceBetween={20}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={index}
                            className={`rounded-2xl overflow-hidden shadow-lg relative transition-all duration-500 ${activeIndex === index ? "brightness-100" : "brightness-[0.3]"
                                }`}
                        >
                            <img
                                src={slide.src}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay */}
                            {activeIndex === index && (
                                <div className="absolute bottom-0 left-0 right-0 p-4  text-white rounded-lg bg-black/30 backdrop-blur-sm border border-white/20">
                                    <h3 className="text-md font-bold">{slide.title}</h3>
                                    <p className="text-xs text-white/60 mt-1">{slide.desc}</p>
                                </div>
                            )}

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            <div className="flex items-center justify-center gap-6 mx-2 ">
                <button className="custom-prev text-white bg-[#ffffff1f] hover:bg-gray-700 p-3 rounded-full">
                    <ChevronLeft></ChevronLeft>
                </button>

                <div className="custom-pagination flex justify-center">
                </div>

                <button className="custom-next text-white bg-[#ffffff1f] hover:bg-gray-700 p-3 rounded-full">
                    <ChevronRight></ChevronRight>
                </button>
            </div>
            <style>
                {`
                .custom-pagination {
                    width: auto !important;
                }

                .custom-pagination .swiper-pagination-bullet {
                    width: 30px;
                    height: 5px;
                    border-radius: 66px; /* remove roundness */
                    background-color:#ffffff1f;
                    opacity: 1;
                    transition: background-color 0.3s ease;
                    margin: 0 0px !important;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background-color: #fff;
                }
                `}
            </style>

        </div>
    );
};

export default SwiperCarousel;