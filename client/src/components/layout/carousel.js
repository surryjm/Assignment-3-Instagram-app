import React, { Component } from 'react';
//import Carousel from 'react-bootstrap/Carousel';

class BackgroundCarousel extends Component {
  render() {
    return (
      
//       <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
      
      
  
      
      <div className="container">
        <div id="backgroundCarousel" className="carousel slide" data-ride="carousel">
        {/*-----  Indicators  -----*/}
        <ol className="carousel-indicators">
          <li data-target="#backgroundCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#backgroundCarousel" data-slide-to="1"></li>
        </ol>

        {/*----- Wrapper for slides -----*/}
        <div className="carousel-inner">
          <div className="item active">
            <img 
            src="https://source.unsplash.com/jKGFqL3llv0/2400x1600" style={{backgroundSize: "cover", backgroundPosition: "center"}} />
          </div>
          <div className="item">
            <img 
            src="https://source.unsplash.com/jKGFqL3llv0/2400x1600" 
            style={{backgroundSize: "cover", backgroundPosition: "center"}} />
          </div>
        </div>

        {/*----- Left and right controls -----*/}
        <a className="left carousel-control" href="backgroundCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="backgroundCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>





      // <div className ="container">
      //     <div className="slide-image transition" id="slide-0">
      //       <span style="background-image: url(./img/showcase.jpg);"></span>
      //     </div>
      //     <div className="slide-image transition" id="slide-1">
      //     <span style="background-image: url(./img/jack-church-jKGFqL3llv0-unsplash.jpg);"></span>
      //     </div>
      //     <div className="slide-image transition" id="slide-2">
      //     <span style="background-image: url(./img/jack-church-jKGFqL3llv0-unsplash.jpg);"></span>
      //     </div>
      // </div>
    )
  }
}

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("slide-image");
//   for (i = 0; i < slides.length; i++) {
//     //slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   //slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000);
// }



export default BackgroundCarousel;
