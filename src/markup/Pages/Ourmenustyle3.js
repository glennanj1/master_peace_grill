import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';
import video from './../../images/steak_loop.mp4';
import catering from './../../images/menu/catering.jpg';
import steak from './../../images/menu/steak.jpg';
import burger from './../../images/menu/burger.jpg'
import wrap from './../../images/menu/wrap.jpg';
import hoagie from './../../images/menu/hoagie.jpg';
import sandwhich from './../../images/menu/sandwhich.jpg';
import app from './../../images/menu/app.jpg';
import wings from './../../images/menu/wings.jpg';
import club from './../../images/menu/club1.jpg';
// import grillCheese from './../../images/steak_loop.mp4';
import salad from './../../images/menu/salad.jpg';

const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'
 
class Ourmenustyle3 extends Component{

	render(){
		return(
			<>
			<Header2 facebook={fb} yelp={yelp} online={onlineOrdering} /> 
			
			<div className="page-content bg-white">
				<video style={{position: 'fixed', overflow: 'hidden'}} autoPlay loop playsInline muted>
					<source src={video} type='video/mp4' />
				</video>
				
				<div className="dlab-bnr-inr overlay-black-middle no-line">
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Full Menu</h1>
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
								<img src={steak} alt="" class="img-cover" />
							</div>
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">CheeseSteaks $10.99</h4>
										<h2 class="title">Build Your Own</h2>
										<p>
											Pick Your Meat - Beef Steak of Chicken Steak<br />
											Pick 1 Cheese - American, Provolone, Swiss, Cheddar, Wiz, Mozzerella<br /> 
											(Extra Cheese Add $1)
										</p>
										<h2 class="title">Best Sellers</h2>
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
												<span class="price">13.99</span>
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
								<img src={catering} alt="" class="img-cover" />
							</div>
						</div>
						<div class="row sp0">
							<div class="col-lg-6">
								<img src={wrap} alt="" class="img-cover" />
							</div>
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Build Your Own</h4>
										<h2 class="title">Wraps $9.99</h2>
										<p>
											Pick a Tortilla - White, Whole Wheat, Sun Dried Tomato, Spinach<br />
											Pick a Spread - Mayo, Southwest Spread, Mustard, Spicy Mustard, Honey Mustard, Ranch, Hot Sauce, Humus<br />
											Pick a Protein - Grilled Chicken, Roast Beef, Chicken Salad, Tuna Salad, Turkey, Ham, Chicken Tenders<br />
											Pick 1 Cheese - American, Provolone, Swiss, Cheddar, Wiz, Mozzerella<br /> 
											Pick Your Veggies - Lettuce, Tomato, Onion, Roasted Peppers, Mushroom, Hot Peppers, Sweet Pepper, Pickle, Cole Slaw<br />
											Add Long Hots - $1<br />
											Turn any CheeseSteak into a wrap 10.99
										</p>
										<h2 class="title">Best Sellers</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Cuban Wrap</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Pulled Pork, Black Forrest Ham, cheese, pickles, mustard, ham and swiss</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Southwestern Turkey Wrap</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Southwest Spread, turkey, lettuce, sweet peppers and crispy tortilla strips</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Tender Wrap</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Chicken tenders tossed in hot sauce with lettuce, tomato, and blue cheese or ranch</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Mediterranean Grilled Veggie Wrap</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>spring mix, kalamata olives, roasted peppers, tomato, feta cheese, onion, lettuce, oregano, oil and vinegar</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Turkey BLT Wrap</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Sliced turkey, crispy bacon, lettuce, tomato, and mayo</p>
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
										<h4 class="sub-title">Build Your Own</h4>
										<h2 class="title">Triple Decker Clubs</h2>
										<p>
										Choice of bread - white, wheat or rye<br />
										All served with lettuce, tomato, mayo, and crispy bacon<br />
										• Grilled Chicken • Roast Beef Turkey • Tuna Salad
										• Chicken Salad • Ham & Cheese <br />
										Add Cheese $1
										</p>
										<h4 class="sub-title">Best Sellers</h4>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Cuban Club</h5>
												<div class="line"></div>
												<span class="price">9.49</span>
											</div>
											<p>Pulled Pork, Black Forrest Ham, cheese, pickles, mustard, ham and swiss</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Tender Club</h5>
												<div class="line"></div>
												<span class="price">9.49</span>
											</div>
											<p> Honey mustard, bacon and American cheese</p>
										</li>
										
									</ul>
								</div>
							</div>
							<div class="col-lg-6">
								<img src={club} alt="" class="img-cover" />
							</div>
						</div>
						<div class="row sp0">
							<div class="col-lg-6">
								<img src={burger} alt="" class="img-cover" />
							</div>
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Build Your Own</h4>
										<h2 class="title">Burgers $9.99</h2>
										<p>
											Served on brioche bun<br />
										    PICK A PATTY - Short Rib Beef Angus, Fried Chicken Cutlet, Turkey Burger or Veggie Burger<br />
										    PICK A CHEESE - American, Provolone, Swiss, Cheddar, Wiz, Mozzarella<br />
										    PICK YOUR SPREADS - Ketchup, Mayo, Southwest Spread, Mustard, Spicy Mustard<br />
										    PICK YOUR VEGGIES - Lettuce, Tomato, Fried Onion, Raw Onion, Roasted Peppers, Mushroom, Pickle, Cole Slaw, Relish, Sweet or Hot Peppers<br />
											Make it a combo add $2.99<br />
											Add Long Hots $1<br />
											Add Bacon $1.99
										</p>
										<h2 class="title">Best Sellers</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Budz Burger</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p>Fried onions, lettuce, tomato, thousand island dressing, on a grilled cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Bacon Mushroom Swiss</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p>with lettuce tomato and fried onions</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Master Chicken Burger</h5>
												<div class="line"></div>
												<span class="price">10.49</span>
											</div>
											<p>Fried chicken cutlet, cole slaw, southwest spread on a grilled brioche bun</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="row manu-box-reverse sp0">
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Build Your Own</h4>
										<h2 class="title">Hoagies & Grinders 9.99</h2>
										<p>
										Served On A Fresh Liscio's Roll<br />
										PICK 1 PROTEIN - turkey, ham, roast beef, tuna salad, chicken salad, grilled chicken, chicken tenders<br />
										PICK 1 CHEESE - American, provolone, swiss, cheddar, mozzarella PICK YOUR SPREADS - mayo, southwest spread, mustard, spicy mustard, honey mustard, oil, vinegar, ranch <br />
										PICK YOUR VEGGIES - lettuce, tomato, onion, roasted peppers,sweet pepper, hot pepper, pickle, cole slaw<br />
										ADD LONG HOTS - $1.00
										</p>
										<h2 class="title">Best Sellers</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Italian Hoagie</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Black Forest Ham, Capicola, Genoa Salami, Provolone, lettuce, tomato, onion, oil or mayo</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Chicken Tender Hoagie</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>lettuce, tomato, hot sauce and ranch or blue cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Turkey BLT Hoagie</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Sliced turkey, crispy bacon, lettuce, tomato and mayo</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Tender Hoagie</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Chicken tenders, honey mustard, American cheese, lettuce and tomato</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Parm Grinder</h5>
												<div class="line"></div>
												<span class="price">9.99</span>							
											</div>
											<p>with Marinara sauce and provolone cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Cuban Grinder</h5>
												<div class="line"></div>
												<span class="price">9.99</span>							
											</div>
											<p>Pulled Pork, Black Forest ham, Swiss cheese, pickles and mustard</p>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-6">
								<img src={hoagie} alt="" class="img-cover" />
							</div>
						</div>

						<div class="row sp0">
							<div class="col-lg-6">
								<img src={sandwhich} alt="" class="img-cover" />
							</div>
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h4 class="sub-title">Build Your Own</h4>
										<h2 class="title">Sandwhiches $8.99</h2>
										<p>
										Served On Your choice Of White, Wheat, Rye Bread or a Brioche Bun<br />
										PICK 1 PROTEIN turkey, ham, roast beef, tuna salad, chicken salad, grilled chicken breast, chicken tender<br />
										PICK 1 CHEESE - American, provolone, swiss, cheddar, mozzarella <br />
										PICK YOUR SPREADS - mayo, southwest spread, mustard, spicy mustard, honey mustard, oil, vinegar, ranch <br />
										PICK YOUR VEGGIES - lettuce, tomato, onion, roasted peppers. sweet pepper, hot pepper, pickle, cole slaw
										</p>
										<h2 class="title">Best Sellers</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">BLT</h5>
												<div class="line"></div>
												<span class="price">7.99</span>
											</div>
											<p>BLT Crispy bacon, lettuce, tomato and mayo</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">The Drizzle</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>Chicken Salad on a brioche bun with crispy bacon and American cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">BBQ Pork Sandwhich</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>With onion and provolone cheese on a brioche bun</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Pizon Pork</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>Slow roasted pork with long hot peppers & Provolone cheeze on a grilled brioche bun</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">The Chumpy</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>Chicken, Bacon & Cheddar cheese with Ranch dressing served on a brioche bun with lettuce and tomato </p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Grilled Chicken Deluxe</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>On a brioche bun with honey mustard, crispy bacon, American cheese, lettuce and tomato</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Turkey Melt</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>Open face on rye with tomato, provolone cheese </p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Tuna Melt</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>Open face on rye with tomato, provolone cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Roast Beef Melt</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>Open face on rye with tomato, swiss cheese, Thousand Island dressing</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						
					
						<div class="row manu-box-reverse sp0">
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h2 class="title">Appetizers</h2>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">House Made Chips</h5>
												<div class="line"></div>
												<span class="price">1.89</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">French Fries</h5>
												<div class="line"></div>
												<span class="price">4.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Old Bay Fries</h5>
												<div class="line"></div>
												<span class="price">4.99</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Sweet Potato Fries</h5>
												<div class="line"></div>
												<span class="price">6.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Cheese Fries</h5>
												<div class="line"></div>
												<span class="price">5.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Bacon Ranch Cheese Fries</h5>
												<div class="line"></div>
												<span class="price">7.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Beer Battered Onion Rings</h5>
												<div class="line"></div>
												<span class="price">6.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Mozzarella Sticks</h5>
												<div class="line"></div>
												<span class="price">6.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Mac & Cheese Wedges</h5>
												<div class="line"></div>
												<span class="price">6.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Broccoli Bites</h5>
												<div class="line"></div>
												<span class="price">5.99</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Tenders (3pc)</h5>
												<div class="line"></div>
												<span class="price">5.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Tenders</h5>
												<div class="line"></div>
												<span class="price">7.99</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Chicken Tenders</h5>
												<div class="line"></div>
												<span class="price">5.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Chicken Tenders</h5>
												<div class="line"></div>
												<span class="price">8.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Tenders & Fries Combo (3pc)</h5>
												<div class="line"></div>
												<span class="price">7.99</span>							
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Tenders & Fries Combo (5pc)</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Chicken Tenders & Fries Combo (3pc)</h5>
												<div class="line"></div>
												<span class="price">8.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Chicken Tenders & Fries Combo (5pc)</h5>
												<div class="line"></div>
												<span class="price">11.99</span>
											</div>
										</li>
									</ul>
								</div>	
							</div>
							<div class="col-lg-6">
								<img src={app} alt="" class="img-cover" />
							</div>
						</div>
						
						
				
						<div class="row sp0">
							<div class="col-lg-6">
								<img src={salad} alt="" class="img-cover" />
							</div>
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h2 class="title">Salads</h2>
										<p>
										Dressings: Ranch, Italian, Bleu Cheese, Honey Mustard, Caesars, Balsamic Vinaigrette, Oil & Vinegar or Thousand Island
										</p>
									</div>
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">Caesar</h5>
												<div class="line"></div>
												<span class="price">7.99</span>
											</div>
											<p>Crispy romaine lettuce, house made croutons and Parmesan cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Grilled Chicken Caesar</h5>
												<div class="line"></div>
												<span class="price">9.99</span>
											</div>
											<p>Our Caesar salad topped with fresh marinated, grilled chicken</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Garden</h5>
												<div class="line"></div>
												<span class="price">8.99</span>
											</div>
											<p>Mixed greens, tomato, onion, roasted peppers, croutons, cucumbers and a hard boiled egg</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Buffalo Chicken Garden</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p>Our garden salad with chicken tenders tossed with hot sauce</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chef Garden</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p> Our garden salad with ham, turkey, provolone and american cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Tuna Salad Garden</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p>Our garden salad with a scoop of our homemade tuna salad</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Salad Garden</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p> Our garden salad with a scoop of our homemade chicken salad</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Greek Garden</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p>Our garden salad with Kalamata olives and feta cheese</p>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">Chicken Tender Garden</h5>
												<div class="line"></div>
												<span class="price">10.99</span>
											</div>
											<p>Our garden salad with crispy chicken tenders & american cheese</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div class="row manu-box-reverse sp0">
							<div class="col-lg-6">
								<div class="menu-box">
									<div class="section-head style-2">
										<h2 class="title">Wings</h2>
										<p>
											Tossed in sauce of your choice Mild, Hot or BBQ<br />
											Served with Celery &
											Bleu Cheese or Ranch 
										</p>
									</div>	
									<ul class="menu-list-2">
										<li>
											<div class="info-price">
												<h5 class="title">5 Wings</h5>
												<div class="line"></div>
												<span class="price">7.49</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">10 Wings</h5>
												<div class="line"></div>
												<span class="price">12.99</span>
											</div>
										</li>
										<li>
											<div class="info-price">
												<h5 class="title">20 Wings</h5>
												<div class="line"></div>
												<span class="price">24.99</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="col-lg-6">
								<img src={wings} alt="" class="img-cover" />
							</div>
						</div>
					
					<div class="row sp0">
						<div class="col-lg-6">
							<img src={require("./../../images/food/tiger_steak.jpg")} alt="" class="img-cover" />
						</div>
						<div class="col-lg-6">
							<div class="menu-box">
								<div class="section-head style-2">
									<h2 class="title">Grilled Cheese $4.99</h2>
									<p>Served On Your choice Of White, Wheat or Rye</p>
									<h4 class="sub-title">Build Your Own $7.49</h4>
									<p>
										Served On Your choice Of White, Wheat or Rye<br />
										Served On Your choice Of White, Wheat or Rye Bread PICK 1 PROTEIN - turkey, ham, bacon, roast beef <br />
										PICK 1 CHEESE - American, provolone, swiss, cheddar, mozzarella <br />
										PICK YOUR SPREADS - mayo, southwest spread, mustard, spicy mustard, honey mustard, oil, vinegar, ranch <br />
										PICK YOUR VEGGIES - lettuce, tomato, onion, roasted peppers, sweet pepper, hot pepper, pickle, cole slaw<br />
									</p>
								</div>	
							</div>
						</div>
					</div>
				</div> 
			</div>
			
			<Footer2 facebook={fb} yelp={yelp}/>
			
			</>
		)
	}
}

export default 	Ourmenustyle3;