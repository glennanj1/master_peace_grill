import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';
import cateringImg from './../../images/menu/catering.jpg';
import steakImg from './../../images/menu/steak.jpg';
import burgerImg from './../../images/menu/burger.jpg'
import wrapImg from './../../images/menu/wrap.jpg';
import hoagieImg from './../../images/menu/hoagie.jpg';
import sandwhichImg from './../../images/menu/sandwhich.jpg';
import appImg from './../../images/menu/app.jpg';
import wingsImg from './../../images/menu/wings.jpg';
import clubImg from './../../images/menu/club1.jpg';
import saladImg from './../../images/menu/salad.jpg';
import grilledCheeseImg from './../../images/food/grilled_cheese.jpg';
import bg from './../../images/background/rainbow.jpeg'
import menuData from './../../data/menu.json';

const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'
 
class Ourmenustyle3 extends Component{

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	// Helper function to render Build Your Own instructions with proper formatting
	renderBuildYourOwnInstructions = (instructions) => {
		if (!instructions) return null;
		
		// Split by pipe separator and format each line
		const lines = instructions.split(' | ');
		return lines.map((line, index) => {
			// Check if line has format "Label (content)" - most common pattern
			const parenthesesMatch = line.match(/^(.+?)\s*\((.+)\)$/);
			if (parenthesesMatch) {
				const [, label, content] = parenthesesMatch;
				return (
					<span key={index}>
						{index > 0 && <br />}
						<b>{label}</b> - {content}
						<br />
					</span>
				);
			}
			
			// Check if line starts with a label followed by colon or dash
			const colonDashMatch = line.match(/^([^:(]+)[:-]\s*(.+)$/);
			if (colonDashMatch) {
				const [, label, content] = colonDashMatch;
				return (
					<span key={index}>
						{index > 0 && <br />}
						<b>{label}</b> - {content}
						<br />
					</span>
				);
			}
			
			// For lines without a clear label (like "Turn any CheeseSteak into a wrap")
			return (
				<span key={index}>
					{index > 0 && <br />}
					{line}
					{index < lines.length - 1 && <br />}
				</span>
			);
		});
	};

	// Helper function to render menu items dynamically
	renderMenuItem = (itemName, itemData) => {
		// Skip special keys that aren't menu items
		if (itemName === 'Base Price' || itemName === 'addons' || itemName === 'Build Your Own Instructions') {
			return null;
		}

		// Handle simple price string
		if (typeof itemData === 'string') {
			return (
				<li key={itemName}>
					<div className="info-price">
						<h5 className="title">{itemName}</h5>
						<div className="line"></div>
						<span className="price">{itemData}</span>
					</div>
				</li>
			);
		}

		// Handle object with price and/or description
		if (itemData.price && !itemData.variants) {
			return (
				<li key={itemName}>
					<div className="info-price">
						<h5 className="title">
							{itemName}
							{itemData.description && <h6>({itemData.description})</h6>}
						</h5>
						<div className="line"></div>
						<span className="price">{itemData.price}</span>
					</div>
					{itemData.description && itemData.description.length > 50 && (
						<p>{itemData.description}</p>
					)}
				</li>
			);
		}

		// Handle items with variants (e.g., 3pc/5pc)
		if (itemData.variants) {
			return Object.keys(itemData.variants).map(variant => (
				<li key={`${itemName}-${variant}`}>
					<div className="info-price">
						<h5 className="title">
							{itemName} ({variant})
							{itemData.description && <h6>{itemData.description}</h6>}
						</h5>
						<div className="line"></div>
						<span className="price">{itemData.variants[variant]}</span>
					</div>
					{itemData.description && itemData.description.length > 50 && (
						<p>{itemData.description}</p>
					)}
				</li>
			));
		}

		return null;
	};

	render(){
		const appetizers = menuData.Appetizers;
		const salads = menuData.Salads;
		const wraps = menuData.Wraps;
		const clubs = menuData['Triple Decker Clubs'];
		const cheesesteaks = menuData.CheeseSteaks;
		const burgers = menuData.Burgers;
		const hoagies = menuData['Hoagies & Grinders'];
		const sandwiches = menuData.Sandwiches;
		const grilledCheese = menuData['Grilled Cheese'];

		return(
			<>
			<Header2 facebook={fb} yelp={yelp} online={onlineOrdering} /> 
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle no-line" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
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

				<div className="section-full bg-white">
				<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Appetizers</h2>
									</div>
									<ul className="menu-list-2">
										{Object.keys(appetizers).map(item => this.renderMenuItem(item, appetizers[item]))}
									</ul>
								</div>	
							</div>
							<div className="col-lg-6">
								<img src={appImg} alt="appetizers" className="img-cover" />
							</div>
						</div>

						<div className="row sp0">
							<div className="col-lg-6">
								<img src={wingsImg} alt="by Erik Mclean on Unsplash" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Wings</h2>
										<p>{menuData.Wings['Base Price']}</p>
									</div>	
									<ul className="menu-list-2">
										{Object.keys(menuData.Wings)
											.filter(item => item !== 'Base Price')
											.map(item => this.renderMenuItem(item, menuData.Wings[item]))}
									</ul>
								</div>
							</div>
						</div>

						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Salads</h2>
										<p>{salads['Base Price']}</p>
									</div>
									<ul className="menu-list-2">
										{Object.keys(salads)
											.filter(item => item !== 'Base Price')
											.map(item => {
												const itemData = salads[item];
												if (typeof itemData === 'string') {
													return (
														<li key={item}>
															<div className="info-price">
																<h5 className="title">{item}</h5>
																<div className="line"></div>
																<span className="price">{itemData}</span>
															</div>
														</li>
													);
												}
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<img src={saladImg} alt="" className="img-cover" />
							</div>
						</div>

						<div className="row sp0">
							<div className="col-lg-6">
								<img src={wrapImg} alt="" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Wraps ${wraps['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{this.renderBuildYourOwnInstructions(wraps['Build Your Own Instructions'])}
											{wraps.addons && Object.keys(wraps.addons).map(addon => (
												<span key={addon}><br /><b>Add {addon}</b> - ${wraps.addons[addon]}</span>
											))}
										</p>
										<h2 className="title">Best Sellers</h2>
										<h6>Your Choice of White, Wheat, Spinach or Tomato Wrap</h6>
									</div>
									<ul className="menu-list-2">
										{Object.keys(wraps)
											.filter(item => item !== 'Base Price' && item !== 'addons' && item !== 'Build Your Own Instructions')
											.map(item => {
												const itemData = wraps[item];
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
						</div>

						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Triple Decker Clubs ${clubs['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{this.renderBuildYourOwnInstructions(clubs['Build Your Own Instructions'])}
											{clubs.addons && Object.keys(clubs.addons).map(addon => (
												<span key={addon}><br />Add {addon} ${clubs.addons[addon]}</span>
											))}
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										{Object.keys(clubs)
											.filter(item => item !== 'Base Price' && item !== 'addons' && item !== 'Build Your Own Instructions')
											.map(item => {
												const itemData = clubs[item];
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<img src={clubImg} alt="" className="img-cover" />
							</div>
						</div>

						<div className="row sp0">
							<div className="col-lg-6">
								<img src={steakImg} alt="" className="img-cover" />
							</div>

							
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">CheeseSteaks ${cheesesteaks['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{this.renderBuildYourOwnInstructions(cheesesteaks['Build Your Own Instructions'])}
											{cheesesteaks.addons && (
												<>
													<br />
													{Object.keys(cheesesteaks.addons).map((addon, index) => (
														<span key={addon}>
															{index > 0 && <br />}
															({addon} Add ${cheesesteaks.addons[addon]})
														</span>
													))}
												</>
											)}
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										{Object.keys(cheesesteaks)
											.filter(item => item !== 'Base Price' && item !== 'addons' && item !== 'Build Your Own Instructions')
											.map(item => {
												const itemData = cheesesteaks[item];
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
						</div>

						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Burgers ${burgers['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{this.renderBuildYourOwnInstructions(burgers['Build Your Own Instructions'])}
											{burgers.addons && (
												<>
													<br />
													{Object.keys(burgers.addons).map((addon, index) => (
														<span key={addon}>
															{index > 0 && <br />}
															{addon} add ${burgers.addons[addon]}
														</span>
													))}
												</>
											)}
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										{Object.keys(burgers)
											.filter(item => item !== 'Base Price' && item !== 'addons' && item !== 'Build Your Own Instructions')
											.map(item => {
												const itemData = burgers[item];
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<img src={burgerImg} alt="" className="img-cover" />
							</div>
						</div>

						<div className="row sp0">
							<div className="col-lg-6">
								<img src={hoagieImg} alt="" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Hoagies & Grinders ${hoagies['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{this.renderBuildYourOwnInstructions(hoagies['Build Your Own Instructions'])}
											{hoagies.addons && Object.keys(hoagies.addons).map(addon => (
												<span key={addon}><br />ADD {addon.toUpperCase()} - ${hoagies.addons[addon]}</span>
											))}
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										{Object.keys(hoagies)
											.filter(item => item !== 'Base Price' && item !== 'addons' && item !== 'Build Your Own Instructions')
											.map(item => {
												const itemData = hoagies[item];
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
						</div>
						
						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Sandwiches ${sandwiches['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{this.renderBuildYourOwnInstructions(sandwiches['Build Your Own Instructions'])}
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										{Object.keys(sandwiches)
											.filter(item => item !== 'Base Price' && item !== 'Build Your Own Instructions')
											.map(item => {
												const itemData = sandwiches[item];
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<img src={sandwhichImg} alt="" className="img-cover" />
							</div>
						</div>

						<div className="row sp0">
							<div className="col-lg-6">
								<img src={grilledCheeseImg} alt="" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
								<div className="section-head style-2">
									<h2 className="title">Grilled Cheese ${grilledCheese['Base Price']}</h2>
									<p>Your choice of White, Wheat or Rye</p>
									{grilledCheese['Build Your Own'] && (
										<>
											<h2 className="title">Build Your Own ${grilledCheese['Build Your Own'].price}</h2>
											<p>{this.renderBuildYourOwnInstructions(grilledCheese['Build Your Own'].description)}</p>
										</>
									)}
								</div>	
							</div>
						</div>
					</div>
						
						<h1 className="catering">Catering</h1>
					
					<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h4 className="sub-title">à la carte</h4>
										<h4>You Create - Includes Chips, Drinks and Napkins</h4>
										<h5>Pricing Per Person</h5>
										
									</div>
									<ul className="menu-list-2">
										{Object.keys(menuData.Catering)
											.filter(item => item !== 'Base Price')
											.map(item => {
												const itemData = menuData.Catering[item];
												
												// Handle items with variants (Small/Large salads)
												if (itemData.variants) {
													return Object.keys(itemData.variants).map(variant => (
														<li key={`${item}-${variant}`}>
															<div className="info-price">
																<h5 className="title">{variant} {item}</h5>
																<div className="line"></div>
																<span className="price">{itemData.variants[variant]}</span>							
															</div>
															<p>{itemData.description}</p>
															{itemData.addons && Object.keys(itemData.addons)
																.filter(addon => addon.includes(variant))
																.map(addon => (
																	<h6 key={addon}>({addon.replace(`(${variant})`, '').trim()} for ${itemData.addons[addon]})</h6>
																))
															}
														</li>
													));
												}
												
												// Handle simple items
												return (
													<li key={item}>
														<div className="info-price">
															<h5 className="title">{item}</h5>
															<div className="line"></div>
															<span className="price">{itemData.price}</span>
														</div>
														<p>{itemData.description}</p>
													</li>
												);
											})}
									</ul>
								</div>
							</div>
							<div className="col-lg-6">
								<img src={cateringImg} alt="" className="img-cover" />
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
