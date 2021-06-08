import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';

var img = require('./../../images/food/cheesesteak_tray.jpg');
const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'
 
class Ourmenustyle3 extends Component{

	render(){
		return(
			<>
			<Header2 facebook={fb} yelp={yelp} online={onlineOrdering} /> 
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle no-line" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
									<li>Our Menu</li>
								</ul>
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
				
				<div className="section-full bg-white">
					<div className="row sp0">
						<div className="col-lg-6">
							<img src={require('./../../images/menu/pic1.jpg')} alt="" className="img-cover" />
						</div>
						<div className="col-lg-6">
							<div className="menu-box">
								<div className="section-head style-2">
									<h4 className="sub-title">Pizza Menu</h4>
									<h2 className="title">RestroKing Pizza, The Best In Town</h2>
								</div>
								<ul className="menu-list-2">
									<li>
										<div className="info-price">
											<h5 className="title">Pepperoni Pizza</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Apricot Chicken</h5>
											<div className="line"></div>
											<span className="price">07.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Pizza Veronese</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Summer Pizza</h5>
											<div className="line"></div>
											<span className="price">23.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Italian Tuna</h5>
											<div className="line"></div>
											<span className="price">79.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Liguria Pizza</h5>
											<div className="line"></div>
											<span className="price">22.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row manu-box-reverse sp0">
						<div className="col-lg-6">
							<div className="menu-box">
								<div className="section-head style-2">
									<h4 className="sub-title">Pizza Menu</h4>
									<h2 className="title">Festive Season Offers</h2>
								</div>
								<ul className="menu-list-2">
									<li>
										<div className="info-price">
											<h5 className="title">Pepperoni Pizza</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Apricot Chicken</h5>
											<div className="line"></div>
											<span className="price">07.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Pizza Veronese</h5>
											<div className="line"></div>
											<span className="price">14.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Summer Pizza</h5>
											<div className="line"></div>
											<span className="price">23.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Italian Tuna</h5>
											<div className="line"></div>
											<span className="price">79.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
									<li>
										<div className="info-price">
											<h5 className="title">Liguria Pizza</h5>
											<div className="line"></div>
											<span className="price">22.99</span>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<img src={require('./../../images/menu/pic2.jpg')} alt="" className="img-cover" />
						</div>
					</div>
				</div>
			</div>
			
			<Footer2  />
			
			</>
		)
	}
}

export default 	Ourmenustyle3;