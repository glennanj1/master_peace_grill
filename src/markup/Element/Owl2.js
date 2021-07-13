import React, {Component} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

var img =require('./../../images/overlay/pt1.jpg');


const responsive = {
  superLargeDesktop: {
   
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


class Owl2 extends Component{		
	render(){
		return(
			<div className="section-full bg-white content-inner-2" style={{backgroundImage:"url(" + img + " )" }}>
				<div className="container">
					<div className="section-head style-2 text-center">
						<h4 className="sub-title">Google Maps</h4>
						<h2 className="title">Customer Review</h2>
					</div>
					
					<div className="testimonial-one ">
						<Carousel 
							autoPlay={this.props.deviceType !== "mobile" ? true : false}
							responsive={responsive}
													
						>
							
								<div className="testimonial-1">
									<div className="testimonial-text">
										<p>
As soon as you walk in, you can tell this place is legit. You can tell everything is going to be good and that everyone cares about your food. All held true, but it's especially true about the pulled pork and sweet potato fries. Definitely recommend MasterPeace Grill.</p>
									</div>
									{/* <div className="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div> */}
									<div className="testimonial-detail"> <strong className="testimonial-name">Michael Boggs</strong> <span className="testimonial-position">Customer</span> </div>
								</div>
								<div className="testimonial-1">
									<div className="testimonial-text">
										<p>The absolute best sandwich shop around! They have the best customer service and delivery is extremely fast! I highly recommend this place to everyone!</p>
									</div>
									{/* <div className="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div> */}
									<div className="testimonial-detail"> <strong className="testimonial-name">Jake Villari</strong> <span className="testimonial-position">Customer</span> </div>
								</div>
								<div className="testimonial-1">
									<div className="testimonial-text">
										<p>There were two hooks that swayed me to venture into MasterPeace Grill today. The first one was a number. I saw they had a 4.7 star rating on Google Maps. This caught my eye. Second was their tag line, "The best lunch in Conshohocken."  I had a grilled chicken wrap with melted swiss cheese and my partner had a cheese steak. We split a bag of home made potato chips. And we both agreed that there is absolutely no question that this place is spot on!!! It's the best. I give it 5.</p>
									</div>
									{/* <div className="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div> */}
									<div className="testimonial-detail"> <strong className="testimonial-name">Scott Silverstine</strong> <span className="testimonial-position">Customer</span> </div>
								</div>
								<div className="testimonial-1">
									<div className="testimonial-text">
										<p>I celebrated my graduation today in this fine place. happy to tell that we passed a enjoyable evening and the place was certainly one of the reasons for the outstanding evening. The waiters  contributed in a very nice manner, the cuisine was extremely good and my guests were so  overjoyed. We shall absolutely visit again for more events. thanks very much.</p>
									</div>
									{/* <div className="testimonial-pic radius"><img src={require("./../../images/testimonials/pic1.jpg")} style={{width:"100", height:"100"}} alt="" /></div> */}
									<div className="testimonial-detail"> <strong className="testimonial-name">Daxton Mcgrath</strong> <span className="testimonial-position">Customer</span> </div>
								</div>
						</Carousel>
					</div>
				</div>		
			</div>	
		);	
	}	
}			


export default Owl2;