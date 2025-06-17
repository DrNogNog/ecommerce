import React from "react";
import Slider from "react-slick";


const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
      };
    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://sslimages.shoppersstop.com/sys-master/root/h1e/h9b/32374912352286/Static-Web---2024-04--01-new-hp-page.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://sslimages.shoppersstop.com/sys-master/root/h1e/h9b/32374912352286/Static-Web---2024-04--01-new-hp-page.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://sslimages.shoppersstop.com/sys-master/root/h1e/h9b/32374912352286/Static-Web---2024-04--01-new-hp-page.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://sslimages.shoppersstop.com/sys-master/root/h1e/h9b/32374912352286/Static-Web---2024-04--01-new-hp-page.jpg" className="w-100"/>
                </div>
            </Slider>
        </div>
    )
};

export default HomeBanner;