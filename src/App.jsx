import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  const settings = {
    // dots: true,
    // // fade:true,
    // infinite: true,
    // speed: 900,
    // slidesToShow: 2,
    // slidesToScroll: 1,

    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
  };
  const data = [
    {
      name: "Aashutosh Singh",
      review: "Are you ok?"
    },
    {
      name: "Anshu",
      review: "Hye buddy how are you!"
    },
    {
      name: "Pusker Kausik",
      review: "That good!"
    },
    {
      name: "Abhijeet singh",
      review: "Great"
    },
    {
      name: "Anjali Singh",
      review: "Cool!"
    },
    {
      name: "Shital Singh",
      review: "Amezing!"
    }
  ]

  return (
    <div className='w-3/4  m-auto'>
      <div className='mt-20 '>
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <div className='bg-white h-[450px] text-black rounded-xl m-2 flex justify-center items-center'>
                <div className=' h-1/2  flex flex-col justify-evenly items-center'>
                  <p className='p-3 bg-blue-500 rounded-full w-36 text-center h-16'>{d.name}</p>
                  <p className='p-3 w-36 text-center h-16 bg-green-900 rounded-3xl'>{d.review}</p>
                  {/* helo wole s */}
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}


export default App