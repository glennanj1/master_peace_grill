import React from 'react'
import {Link} from 'react-router-dom';
import Header2 from '../Layout/Header2';
import Footer2 from '../Layout/Footer2';

import bg from './../../images/background/rainbow.jpeg'
import app from './../../images/menu/app.jpg';
import wings from './../../images/menu/wings.jpg';
import salad from './../../images/menu/salad.jpg';
import wrap from './../../images/menu/wrap.jpg';
import club from './../../images/menu/club1.jpg';
import steak from './../../images/menu/steak.jpg';
import burger from './../../images/menu/burger.jpg';
import hoagie from './../../images/menu/hoagie.jpg';
import sandwich from './../../images/menu/sandwhich.jpg';
import grilledCheese from './../../images/food/grilled_cheese.jpg';
import catering from './../../images/menu/catering.jpg';
import menuData from './../../data/menu.json';

const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'

// Helper function to render menu items dynamically
const renderMenuItem = (itemName, itemData) => {
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
					</h5>
					<div className="line"></div>
					<span className="price">{itemData.price}</span>
				</div>
				{itemData.description && itemData.description.length > 30 ? (
					<p>{itemData.description}</p>
				) : itemData.description ? (
					<h6>({itemData.description})</h6>
				) : null}
			</li>
		);
	}

	// Handle items with variants (e.g., 3pc/5pc)
	if (itemData.variants) {
		return Object.keys(itemData.variants).map(variant => (
			<li key={`${itemName}-${variant}`}>
				<div className="info-price">
					<h5 className="title">{itemName} ({variant})</h5>
					<div className="line"></div>
					<span className="price">{itemData.variants[variant]}</span>
				</div>
				{itemData.description && <h6>{itemData.description}</h6>}
			</li>
		));
	}

	return null;
};

function Menu() {
	const appetizers = menuData.Appetizers;
	const wingsMenu = menuData.Wings;
	const salads = menuData.Salads;
	const wraps = menuData.Wraps;
	const clubs = menuData['Triple Decker Clubs'];
	const cheesesteaks = menuData.CheeseSteaks;
	const burgers = menuData.Burgers;
	const hoagies = menuData['Hoagies & Grinders'];
	const sandwiches = menuData.Sandwiches;
	const grilledCheeseMenu = menuData['Grilled Cheese'];
	const cateringMenu = menuData.Catering;

    return (
        <div>
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
										{Object.keys(appetizers).map(item => renderMenuItem(item, appetizers[item]))}
									</ul>
								</div>	
							</div>
							<div className="col-lg-6">
								<img src={app} alt="appetizers" className="img-cover" />
							</div>
						</div>

						<div className="row sp0">
							<div className="col-lg-6">
								<img src={wings} alt="by Erik Mclean on Unsplash" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Wings</h2>
										<p>{wingsMenu['Base Price']}</p>
									</div>	
									<ul className="menu-list-2">
										{Object.keys(wingsMenu)
											.filter(item => item !== 'Base Price')
											.map(item => renderMenuItem(item, wingsMenu[item]))}
									</ul>
								</div>
							</div>
						</div>

						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Salads</h2>
										<p>
										<b>Dressings:</b> {salads['Base Price'].replace('Dressings: ', '')}
										</p>
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
								<img src={salad} alt="" className="img-cover" />
							</div>
						</div>

						<div className="row sp0">
							<div className="col-lg-6">
								<img src={wrap} alt="" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Wraps ${wraps['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{wraps['Build Your Own Instructions']}
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
										{clubs['Build Your Own Instructions']}
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
								<img src={club} alt="" className="img-cover" />
							</div>
						</div>
						
						<div className="row sp0">
							<div className="col-lg-6">
								<img src={steak} alt="" className="img-cover" />
							</div>

							
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">CheeseSteaks ${cheesesteaks['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											{cheesesteaks['Build Your Own Instructions']}
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
											{burgers['Build Your Own Instructions']}
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
								<img src={burger} alt="" className="img-cover" />
							</div>
						</div>
						<div className="row sp0">
							<div className="col-lg-6">
								<img src={hoagie} alt="" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Hoagies & Grinders ${hoagies['Base Price']}</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
										{hoagies['Build Your Own Instructions']}
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
										{sandwiches['Build Your Own Instructions']}
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
								<img src={sandwich} alt="" className="img-cover" />
							</div>
						</div>
						<div className="row sp0">
							<div className="col-lg-6">
								<img src={grilledCheese} alt="" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
								<div className="section-head style-2">
									<h2 className="title">Grilled Cheese ${grilledCheeseMenu['Base Price']}</h2>
									<p>Your choice of White, Wheat or Rye</p>
									{grilledCheeseMenu['Build Your Own'] && (
										<>
											<h2 className="title">Build Your Own ${grilledCheeseMenu['Build Your Own'].price}</h2>
											<p>
											{grilledCheeseMenu['Build Your Own'].description}
											</p>
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
										{Object.keys(cateringMenu)
											.filter(item => item !== 'Base Price')
											.map(item => {
												const itemData = cateringMenu[item];
												
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
								<img src={catering} alt="" className="img-cover" />
							</div>
						</div>
						
				</div> 
			</div>
			
			<Footer2 facebook={fb} yelp={yelp}/>
            
        </div>
    )
}

export default Menu
