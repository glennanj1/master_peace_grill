import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const img = require('./../../images/overlay/pt1.jpg');
const img2 = require('./../../images/default_user_pic.png');

// Mock data for reviews
const mockReviews = [
	{
		id: 1,
		name: "Sarah M.",
		rating: 5,
		text: "The Tiger Steak is absolutely amazing! Best cheesesteak I've ever had. The service was excellent and the atmosphere was perfect.",
		image_url: null,
		url: "#"
	},
	{
		id: 2,
		name: "John D.",
		rating: 5,
		text: "Great food, great prices! The Buffalo Chicken wrap is my go-to. Highly recommend Master Peace Grill to anyone looking for quality food.",
		image_url: null,
		url: "#"
	},
	{
		id: 3,
		name: "Mike R.",
		rating: 5,
		text: "The burgers here are incredible! I tried the Bacon Mushroom Swiss and it did not disappoint. Will definitely be back!",
		image_url: null,
		url: "#"
	},
	{
		id: 4,
		name: "Emily L.",
		rating: 5,
		text: "Love this place! The wings are perfectly cooked and the honey hot sauce is addictive. Staff is always friendly too!",
		image_url: null,
		url: "#"
	},
	{
		id: 5,
		name: "Tom W.",
		rating: 5,
		text: "Best hoagies in town! Fresh ingredients and generous portions. The Italian hoagie is a must-try.",
		image_url: null,
		url: "#"
	}
];

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 3
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


function Owl2() {

	const [reviews, setReviews] = useState(mockReviews)

	useEffect(() => {
		// Try to fetch from API, but in production always use mock data
		fetch('https://top-sports-book-rails.herokuapp.com/reviews')
			// start json server and use fetch below to test in local
			// fetch("http://localhost:3000/reviews")
			.then(response => response.json())
			.then(json => {
				// Only use API data in development, always use mock data in production
				if (json && json.length > 0 && process.env.NODE_ENV !== 'production') {
					setReviews(json)
				}
			})
			.catch((error) => {
				console.error('Error with Yelp API, using mock data:', error)
				// Keep using mock data on error
			});
	}, [])

	const loadReviews = () => {
		return (
			reviews.map(r =>
				<div key={r.id} className="testimonial-1">
					<div className="testimonial-pic radius"><img src={r.image_url !== null ? r.image_url : img2} style={{ width: "100%", height: "100%" }} alt="profile" /></div>< br />
					<div className="testimonial-detail"> <strong className="testimonial-name">{r.name}</strong> <span className="testimonial-position">Customer</span> </div>
					<span>{"⭐".repeat(Math.round(r.rating))}</span>
					<div className="testimonial-text">
						<p>{r.text}</p>
						<button className="btn red"><a style={{ color: 'white' }} href={r.url}>Review</a></button>
					</div>
				</div>
			)
		)
	}

	return (
		<div className="section-full bg-white content-inner-2" style={{ backgroundImage: "url(" + img + " )" }}>
			<div className="container">
				<div className="section-head style-2 text-center">
					<h4 className="sub-title">Yelp</h4>
					<h2 className="title">Customer Reviews</h2>
				</div>

				<div className="testimonial-one ">
					<Carousel
						autoPlay={true}
						autoPlaySpeed={6000}
						infinite={true}
						removeArrowOnDeviceType={['mobile', 'tablet']}
						responsive={responsive}
					>
						{loadReviews()}
					</Carousel>
				</div>
			</div>
		</div>
	);
}


export default Owl2;