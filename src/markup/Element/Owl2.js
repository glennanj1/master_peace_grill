import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const img = require('./../../images/overlay/pt1.jpg');
const img2 = require('./../../images/default_user_pic.png');


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


function Owl2() {

	const [reviews, setReviews] = useState([])

	useEffect(() => {
		fetch('https://top-sports-book-rails.herokuapp.com/reviews')
			.then(response => response.json())
			.then(json => setReviews(json))
			.catch((error) => {
				console.error.apply('Error with Yelp API (line 36)', error)
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