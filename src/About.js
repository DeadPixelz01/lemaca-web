import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/carousel';
import './App.css';
import image_1 from "./img/Lemaca_5.jpeg";
import image_2 from "./img/Lemaca_2.jpeg";
import image_3 from "./img/Lemaca_9.jpeg";

const About = () => {
  return (
<div className="container py-4 py-xl-5">
        <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
                <div className="carousel slide" data-bs-ride="false" id="carousel-1">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img className="img-fluid" src={image_1} alt="Slide Image" /></div>
                        <div className="carousel-item"><img className="img-fluid" src={image_2} alt="Slide Image" /></div>
                        <div className="carousel-item"><img className="img-fluid" src={image_3} alt="Slide Image" /></div>
                    </div>
                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carousel-1" data-bs-slide-to="2"></li>
                    </ol>
                </div>
            </div>
            <div className="col d-flex flex-column justify-content-center p-4">
                <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5">
                    <div>
                        <h4>About us...</h4>
                        <p>Lemaca was established in 2019. Like many other alpaca enthusiast we started our small herd with
just two female alpacas name Greenwood MaceyX a Bay Black and Wahroongah Dede a Medium
Grey. Both registered alpacas were purchase on Mother’s Day 2019 just to keep the grass down on
our property.</p>
                        <p>From there the passion and knowledge of alpacas grew and is still growing to this day. We are
situated in Victoria near Ballarat and are members of the alpaca association the AAA Central Region.
Lemaca has grown over the years and our herd is steadily increasing, although our moto is “to stay
with a small herd containing quality stock.” Please take the time to browse through our webpage,
viewing our amazing animals and our show results that we are extremely proud to have achieved
and hoping to continue increasing our fleece standards in the years to come.</p>
                    </div>
                </div>
                <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start mb-5"></div>
                <div className="text-center text-md-start d-flex flex-column align-items-center align-items-md-start"></div>
            </div>
        </div>
    </div>
  );
};
  
export default About;