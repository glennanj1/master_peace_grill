import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';
// import OurPartners from './../Element/OurPartners';
import CountUp from 'react-countup';
import Header2 from './../Layout/Header2'
import Footer2 from './../Layout/Footer2'


var img1 = 'https://media.giphy.com/media/C0Asg9I511EHe/giphy.gif';
// var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/background/mpg_bg.jpg');
const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'


// const teamInfo = [
// 	{
// 		image: require('./../../images/our-team/member1.jpg'), 	
// 		name :	'Nashid Martines',
// 		post : 	'Founder',
// 	},
// 	{
// 		image: require('./../../images/our-team/member2.jpg'), 	
// 		name :	'Konne Backfiled',
// 		post : 	'Sous Chef',
// 	},
// 	{
// 		image: require('./../../images/our-team/member3.jpg'), 	
// 		name :	'Valentino Morose',
// 		post : 	'Ceo & Founder',
// 	},
// 	{
// 		image: require('./../../images/our-team/member4.jpg'), 	
// 		name :	'Hackson Willingham',
// 		post : 	'Master Chef',
// 	},
// ]	
	
class About extends Component{

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render(){
		return(
			<>
			<Header2 facebook={fb} yelp={yelp} online={onlineOrdering}/>
		
			 <div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">About Us</h1>
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'/'}><i className="fa fa-home"></i></Link></li>
									<li>About Us</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			
				<div className="content-block ">	
					<div className="section-full bg-white content-inner bg-sm-none" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<div className="icon-bx icon-bx-xl">
											<img src={require('./../../images/stealface.jpg')} alt="" />
										</div>
										<h3>Why Eat at MasterPeace Grill?</h3>
										<p>That’s a simple question. We’re super friendly and we make really good food!<br /><br />
											At MasterPeace Grill, our food is fresher than your average sandwich shop. Our cheeseburgers are made of FRESH Certified Angus ground beef, NEVER FROZEN!<br /><br />
											People love our italian rolls that are delivered fresh daily from Liscios Bakery! On many sandwiches, like our amazing Southwest Turkey Burger, we use toasted Brioche Buns. If you are looking for an awesome sandwich, try our Tiger Steak: 50% Chicken, 50% Beef, BACON, choice of cheese and crafted with 100% Love.<br /><br />
											What do we do at MasterPeace that’s unique? We let you create your own MasterPeace sandwich, steak or wrap. Like we said above, our fries and chips are fresh cut and sliced in house.</p>
										<h3>Ever wonder where we got our name?</h3>
										<p>Our name was inspired by a song performed by the Grateful Dead “When I paint my Masterpiece”. From that moment on, I wanted to open a shop that would let our customers build their own MasterPeace sandwiches. We wanted to be different than your average sandwich shop, so we came up with the concept that you choose the ingredients and we’ll build Your MasterPeace sandwich!</p>
										<h3>It’s a Family Business</h3>
										<p>I guess you can say that Mike Bottos (Owner/Operator at MasterPeace Grill) was born into the food business. In 1955, Mike’s father opened Secane Pizza – one of the first Greek pizza shops in Delaware County, PA. Since that time, all of Mike’s relatives have gone on to start their own businesses (mostly pizzerias), including Mike’s brother and sister.</p>
										<h3>It's a Pizza Love Story</h3>
										<p>After being raised in the business, Mike went to work for his sister’s pizza shop (Pizza Pan, Chadds Ford PA). At 18 years old, Mike met his eventual wife when she was 16 while working at Pizza Pan. They’ve been together ever since! Once they were able, Mike and his wife opened Brookline Pizza in Havertown, PA which was in business for 18 years before eventually selling and starting on a new venture: MasterPeace Grill in Conshohocken, PA!</p>
									</div>
								</div>
							</div>
							<div className="row sp30">
								<div className="col-lg-6 col-md-6 m-b30">
									<div className="about-thumb">
										<img src={require('./../../images/background/mpg_bg/mike_line.jpg')} alt="" />
									</div>
								</div>
								<div className="col-lg-6 col-md-6 m-b30">
									<div className="about-thumb">
										<img src={require('./../../images/background/mpg_bg/mike_and_jean.jpg')} alt="" /> 
									</div>
								</div>
							</div>
						</div>
					</div>					
					<div className="section-full content-inner bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img4 + " )"}}>
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center text-white">
										<h3 className="text-white">Best CheeseSteak in Town</h3>
										<p>Going on 7 years of buisness</p>
									</div>
								</div>
							</div>
							<div className="row max-w900 m-auto">
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={40} /></span>
											<small>+</small>
										</div>
										<span className="counter-text">Years of Experience</span>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={4} /></span>
										</div>
										<span className="counter-text">Awards Won</span>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={1} /></span>
											<small>k</small>
										</div>
										<span className="counter-text">Happy Clients</span>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
									<div className="counter-style-1 text-white text-center">
										<div className="counter-num">
											<span className="counter"><CountUp end={4} /></span>
											
										</div>
										<span className="counter-text">Stars on Yelp</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="section-full content-inner-1 bg-white"  style={{backgroundImage:"url(" + img2 + ")" }}>
						 <div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="section-head text-center">
										<h3>Our Expert Chefs</h3>
										<p>Meet our professional team meambers</p>
									</div>
								</div>
							</div>
							<div className="row">
								{teamInfo.map((item,index) =>(
								
								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
									<div className="dlab-team1" key={index}>
										<div className="thumb" >
											<img src={item.image} alt="" />
											<ul className="social-link">
												<li><Link to = {''}><i className="fa fa-facebook"></i></Link></li>
												<li><Link to = {''}><i className="fa fa-twitter"></i></Link></li>
											</ul>
										</div>
										<div className="team-info text-center">
											<h4 className="name">{item.name}</h4>
											<p className="position">{item.post}</p>
										</div>
									</div>
								</div>
								))}
								
							</div>
						</div>	
						<div className="p-tb50">
							<div className="container">	
								<div class="row">
									<div class="col-lg-12">
										<div class="section-head text-center">
											<h3>Our PARTNERS</h3>
											<p>famous companies trusted us, why you are not</p>
										</div>
									</div>
								</div>
							</div>
							<OurPartners />
						</div> 
					</div> */}
				</div>
			</div>	
			<Footer2 facebook={fb} yelp={yelp}/>
			</>
		)
	}
}

export default About;