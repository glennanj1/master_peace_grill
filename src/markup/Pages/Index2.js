import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Banner from './../Element/Ravslider';

import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';
// import Tab from './../Pages/Tab';
import Owl2 from './../Element/Owl2';
// import steak from './../../images/loadedsteak.jpg'


const img1 = 'https://media.giphy.com/media/xTiTnzZ9pJEyf7jPfq/giphy.gif';
// var img2 = 'https://media.giphy.com/media/ctztBl6WzyjMj3IRJi/giphy.gif';
const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'


class Index2 extends Component{

	componentDidMount() {
		window.scrollTo(0, 0)
	}


	render(){
		return(
			<div>
				<div class="page-wraper font-barlow">
					
					<Header2 facebook={fb} yelp={yelp} online={onlineOrdering}/>
					
					<Banner online={onlineOrdering}/>
					
						 					
					<div class="section-full content-inner bg-white fixedVideo" style={{backgroundImage:"url(" + img1 + ")", padding: '200px', backgroundSize: 'cover'}}>
						
					</div>	
					
					{/* <Tab /> */}
					
					
					{/* <div class="section-full bg-white pizza-full-menu">
						<img src={require("./../../images/ads/adv.jpg")} alt="" />
					</div>   */}
					
					
					<Owl2 />
					
					
					<div class="section-full bg-red p-tb50 newslatter-area">
						<div class="container">
							<div class="row align-items-center">
								<div class="col-md-6 text-white">
									<h5 class="m-b0">Love CheeseSteaks? Like deals? Be the first to know about our newest menu items and latest offers.</h5>
								</div>
								<div class="col-md-6">
									<form class="dzSubscribe newslatter" action="script/mailchamp.php" method="post">
										<div class="dzSubscribeMsg"></div>
										<div class="input-group">
											<input name="dzEmail" required="required" type="email" class="form-control" placeholder="Your Email"/>
											<div class="input-group-append">
												<button name="submit" value="Submit" type="submit" class="btn red radius-xl">Subscribe Now</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					
					
					
				</div>
				
				<Footer2 facebook={fb} yelp={yelp}/>
			</div>	
			
		)	
	}
}

export default Index2;