import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Test from "@/components/test/test";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import photo from "@/assets/img/image.jpeg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			{/* <Test text="hello world" /> */}
			<Test>
				<p>Test</p>
				<ul>
					<li>Test</li>
					<li>Test</li>
					<li>Test</li>
				</ul>
			</Test>
			<Image src={photo} width={200} height={200} />
			<Swiper
				spaceBetween={50}
				slidesPerView={3}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>Slide 1</SwiperSlide>
				<SwiperSlide>Slide 2</SwiperSlide>
				<SwiperSlide>Slide 3</SwiperSlide>
				<SwiperSlide>Slide 4</SwiperSlide>

			</Swiper>
		</>
	);
}
