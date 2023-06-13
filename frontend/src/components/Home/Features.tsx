import { Box, styled, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import sales from "../../assets/feature-sales.png";
import demo from "../../assets/demo.png"

import "swiper/css";
import "swiper/css/effect-coverflow";

import AOS from "aos";
import "aos/dist/aos.css";

import { Autoplay, EffectCoverflow } from "swiper";
import { useEffect } from "react";
const FeatureSection = styled(Box)({
  padding: "100px 60px",
  width: "100%",
  color: "#2b3c4d",
});

const data = [
  { id: "1", img: sales, text: "Increased Sales" },
  { id: "2", img: demo, text: "Working of Platform" },
  { id: "3", img: sales, text: "Increased Sales" },
  { id: "4", img: sales, text: "Increased Sales" },
  { id: "5", img: demo, text: "Working of Platform" },
];

export default function Features() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <FeatureSection data-aos="fade-up" data-aos-duration="3000" id="features">
      <Typography variant="h4" fontWeight={600} align="center" mb={4}>
        Features
      </Typography>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={100}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          depth: 300,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              height="400px"
              width="100%"
            />
            <Typography variant="h6" fontWeight={600} align="center">{item.text}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </FeatureSection>
  );
}