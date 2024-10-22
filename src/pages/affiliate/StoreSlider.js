import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules'
import  {  Navigation, Pagination } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Navigation, Pagination])

const fetchImages = async (pack) => {
  const response = await fetch(`https://source.unsplash.com/random/300x300/?gaming,${pack}`)
  const image = await response.url
  return image
}

const imagePacks = [
  'console', 'headset', 'mouse', 'keyboard', 'controller', 'monitor', 'desktop', 'accessories'
]

const StoreSlider = () => {
  const [images, setImages] = React.useState([])

  React.useEffect(() => {
    const fetchImagesFromPacks = async () => {
      const imagesFromPacks = await Promise.all(imagePacks.map(fetchImages))
      setImages(imagesFromPacks)
    }
    fetchImagesFromPacks()
  }, [])

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      bgColor="#1A202C"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Gaming ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default StoreSlider


