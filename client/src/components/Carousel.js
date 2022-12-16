import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "./assets/images/p1.jpg"
import img2 from "./assets/images/p4.jpg"
import img3 from "./assets/images/p3.jpg"
//import {Link} from 'react-router-dom'

export default () => (
    <Carousel 
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={300}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
        desktop : {
            breakpoint: {
                max : 3000,
                min : 1024
            },
            items : 4,
            paritialVisibilityGutter : 40
        },
        mobile : {
            breakpoint: {
                max : 464,
                min : 0
            },
            items : 1,
            paritialVisibilityGutter : 30
        },
        tablet : {
            breakpoint: {
                max : 1024,
                min : 464
            },
            items : 2,
            paritialVisibilityGutter : 30
        },
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    ltr={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
       <div className="card mx-2 mt-5" >
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text text-dark">Some quick example text to build on the card title and make .</p>
   
  </div>
</div>

<div className="card mx-2 mt-5" >
  <img src={img2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make .</p>
   
  </div>
</div>

<div className="card mx-2 mt-5" >
  <img src={img3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make .</p>
   
  </div>
</div>

<div className="card mx-2 mt-5" >
  <img src={img1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make .</p>
   
  </div>
</div>

        
        </Carousel>    
);