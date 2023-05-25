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
                        <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p><a href="#">Learn More&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-right">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                            </svg></a>
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