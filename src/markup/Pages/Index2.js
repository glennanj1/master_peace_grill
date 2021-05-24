import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from './../Element/Ravslider';

import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';
// import Tab from './../Pages/Tab';
import Owl2 from './../Element/Owl2';



var img1 = require('./../../images/overlay/pt1.jpg');
const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'


class Index2 extends Component{
	render(){
		return(
			<div>
				<div class="page-wraper font-barlow">
					
					<Header2 facebook={fb} yelp={yelp} online={onlineOrdering}/>
					
					<Banner online={onlineOrdering}/>
					
						 					
					<div class="section-full content-inner bg-white" style={{backgroundImage:"url(" + img1 + ")"}}>
						<div class="container">
							<div class="row">
								<div class="col-lg-6 col-md-12">
									<div class="adv-box">
										<img src={require("./../../images/food/cheesesteak_tray.jpg")} alt="" />
									</div>
								</div>
								<div class="col-lg-6 col-md-12">
									<div class="row">
										<div class="col-lg-6 col-md-6">
											<div class="adv-box">
												<img src={require("./../../images/food/loaded_buger.jpg")} alt="" />
											</div>
										</div>
										<div class="col-lg-6 col-md-6">
											<div class="adv-box">
												<img src={require("./../../images/food/loadedsteak.jpg")} alt="" />
											</div>
										</div>
										<div class="col-lg-12 col-md-12">
											<div class="adv-box">
												<img src={require("./../../images/food/vegburger.jpg")} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
					
					
					<div class="section-full bg-white">
						<div class="row sp0">
							<div class="col-lg-6">
								<img src={require("./../../images/food/tiger_steak.jpg")} alt="" class="img-cover" />
							</div>
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Best Sellers</h4>
										<h2 class="title">MasterPeace Grill, The Best In Town</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Tiger Steak</h5>
												<div class="line"></div>
												<span class="price">11.99</span>
											</div>
											<p>beef steak, chicken steak, bacon, american cheese, all mixed together</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Chicken CheeseSteak</h5>
												<div class="line"></div>
												<span class="price">11.99</span>
											</div>
											<p>hot sauce and american cheese with blue cheese or ranch</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Philly Steak</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p>beef steak with fried onions & real cheese wiz</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Pizza Steak</h5>
												<div class="line"></div>
												<span class="price">11.99</span>
											</div>
											<p>beef steak mixed with marinara sauce & mozzerella cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">South Western Turkey Wrap</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>southwest spread, turkey, lettuce, sweet peppers, and crispy tortilla strips</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Ceaser Wrap</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>crisp romaine lettuce, grilled chicken, ceasar dressing and parmesan cheese</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row manu-box-reverse sp0">
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Catering</h4>
										<h4>You Create - Includes Chips, Drinks and Napkins</h4>
										<h5>Pricing Per Person</h5>
										
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">CheeseSteak Tray</h5>
												<div class="line"></div>
												<span class="price">14.99</span>
											</div>
											<p>Cheesesteak, Chicken Cheesesteak, Tiger Steak, Buffalo Steak or Pizza Steak</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Wrap Tray</h5>
												<div class="line"></div>
												<span class="price">13.99</span>
											</div>
											<p>Southwest Turkey, Itailian, Chicken Salad, Cuban, Buffalo Tender, Tuna, Chicken Caesar, Turkey BLT, Ham, Roast Beef, Mediterranean</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Hoagie Tray</h5>
												<div class="line"></div>
												<span class="price">11.99</span>
											</div>
											<p>Ham and Cheese, Turkey, Roast Beef, Chicken Salad, Tuna, Mixed Cheese, Buffalo Chicken Tender, Southwest Turky, Turkey BLT</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Brioche Tray</h5>
												<div class="line"></div>
												<span class="price">12.99</span>
											</div>
											<p>Turkey, Ham, Chicken Salad, Tuna, Roast Beef, Mixed Cheese, Chumpy, Drizzle, Italian</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Ceasar Salad</h5>
												<div class="line"></div>
												<span class="price">40.00 w/Chicken 60.00</span>							
											</div>
											<p>crisp romain with croutons parmesan cheese and dressing on the side</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Small Garden Salad</h5>
												<div class="line"></div>
												<span class="price">50.00 w/Chicken 65.00</span>							
											</div>
											<p>crisp romain with croutons parmesan cheese and dressing on the side</p>
											
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Large Garden Salad</h5>
												<div class="line"></div>
												<span class="price">80.00 w/Chicken 120.00</span>							
											</div>
											<p>crisp romain with croutons parmesan cheese and dressing on the side</p>
											
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Wings - 25 Count</h5>
												<div class="line"></div>
												<span class="price">29.99</span>
											</div>
											<p>Choose from Hot, Mild or BBQ Sauce Includes Celery, Blue Cheese & Ranch</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Wings - 50 Count</h5>
												<div class="line"></div>
												<span class="price">54.99</span>
											</div>
											<p>Choose from Hot, Mild or BBQ Sauce Includes Celery, Blue Cheese & Ranch</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Wings - 100 Count</h5>
												<div class="line"></div>
												<span class="price">109.99</span>
											</div>
											<p>Choose from Hot, Mild or BBQ Sauce Includes Celery, Blue Cheese & Ranch</p>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-6">
								<img src={require("./../../images/food/catering_hoagies.jpg")} alt="" class="img-cover" />
							</div>
						</div>
					</div>
					
					{/* <Tab /> */}
					
					
					<div class="section-full bg-white pizza-full-menu">
						<img src={require("./../../images/ads/adv.jpg")} alt="" />
					</div>  
					
					
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