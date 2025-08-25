import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {

  const airbnb = ['/airbnb/Airbnb1.png', '/airbnb/Airbnb2.png', '/airbnb/Airbnb3.png']
  const youtube = ['/youtube/yt1.png', '/youtube/yt2.png', '/youtube/yt3.png']
  const currency = ['/currencyConverter/currency1.png', '/currencyConverter/currency2.png', '/currencyConverter/currency3.png']
  const koovs = ['/koovs/koovs1.png', '/koovs/koovs2.png', '/koovs/koovs3.png']

  useEffect(() => {
    Aos.init({
      duration: 2000,
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated'
    });
  })

  const CustomNextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    >
    </div>)

  const CustomPrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" style={{ color: "#babfbd" }} />
    </div>);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section id="projects" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center">
        <p className="text-4xl mb-10">PROJECTS</p>
        <div className="flex w-[100%] overflow-scroll gap-10 scrollbar-none">
          <div className="lg:w-[35%] md:w-[35%] w-[100%] pb-6 bg-cover bg-white bg-white rounded-xl">
            <Slider {...settings} className="">
              {airbnb.map((image) => {
                return <img alt="img" className="rounded-xl" src={image} />
              })}
            </Slider>
            <div className="w-[100%] px-5 mt-8 flex justify-center text-white text-md font-medium">
              <button className="w-[35%] text-sm mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                from-red-500 to-pink-600 transition-transform mr-3"><a target="_blank" href="https://rentsphere-20.vercel.app/">Visit website</a></button><button
                className="w-[30%] mt-4 py-3 text-sm text-white font-semibold rounded-lg bg-gradient-to-r
                from-red-500 to-pink-600 transition-transform ml-3"><a target="_blank" href="https://github.com/anushka3002/airbnb">Github</a></button>
            </div>
          </div>
          <div className="lg:w-[35%] md:w-[35%] w-[100%] pb-6 bg-cover bg-white bg-white rounded-xl">
            <Slider {...settings} className="">
              {currency.map((image) => {
                return <img alt="img" className="rounded-xl" src={image} />
              })}
            </Slider>
            <div className="w-[100%] px-5 mt-8 flex justify-center text-white text-md font-medium">
              <button className="w-[35%] mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                from-[#4c0671] to-[#070313] text-sm transition-transform mr-3"><a target="_blank" href="https://courageous-panda-0e3bfe.netlify.app/">Visit website</a></button><button
                className="w-[30%] mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                from-[#4c0671] to-[#070313] text-sm transition-transform ml-3"><a target="_blank" href="https://github.com/anushka3002/hashstack">Github</a></button>
            </div>
          </div>
          <div className="lg:w-[35%] md:w-[35%] w-[100%] pb-6 bg-cover bg-white bg-white rounded-xl">
            <Slider {...settings} className="">
              {koovs.map((image) => {
                return <img alt="img" className="rounded-xl" src={image} />
              })}
            </Slider>
            <div className="w-[100%] px-5 mt-8 flex justify-center text-white text-md font-medium">
              <button className="w-[35%] mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                from-[#206be7] to-[#041356] text-sm transition-transform mr-3"><a target="_blank" href="hhttps://vigorous-meitner-b9028e.netlify.app/">Visit website</a></button><button
                className="w-[30%] mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                from-[#206be7] to-[#041356] text-sm transition-transform ml-3"><a target="_blank" href="https://github.com/RishabhTG209/KOOVS_Clone">Github</a></button>
            </div>
          </div>
          <div className="lg:w-[35%] md:w-[35%] w-[100%] pb-6 bg-cover bg-white bg-white rounded-xl">
            <Slider {...settings} className="">
              {youtube.map((image) => {
                return <img alt="img" className="rounded-xl" src={image} />
              })}
            </Slider>
            <div className="w-[100%] px-5 mt-8 flex justify-center text-white text-md font-medium">
              <button className="w-[35%] text-sm mt-4 py-3 text-white font-semibold rounded-lg bg-gradient-to-r
                from-[#ff748c] to-[#cd2b4b] transition-transform mr-3"><a target="_blank" href="https://youtube-nine-eta.vercel.app/">Visit website</a></button><button
                className="w-[30%] mt-4 py-3 text-sm text-white font-semibold rounded-lg bg-gradient-to-r
                from-[#ff748c] to-[#cd2b4b] transition-transform ml-3"><a target="_blank" href="https://github.com/anushka3002/youtube">Github</a></button>
            </div>
          </div>
        </div>
        <p className="text-right mt-2 text-gray-600 block lg:hidden">Scroll to right</p>

      </div>
      <br></br><br></br><br></br><br></br>
    </section>

  );
}
