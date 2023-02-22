import React from 'react';

const MenuCategory = ({ menu, menuImg, cssClass }) => {
	//pass in cssClass boolean value to render menu category section w/ image on corresponding side based

	// console.log('menu category component info:', menu);

	const categoryItemList = menu
		.map((item) => {
			//does the item have details?
			let itemDetails = item.details ? <h6>{item.details}</h6> : '';
			//does the item have add_ons?
			let itemAddOn = item.add_ons ? <h6>{item.add_ons}</h6> : '';

			return (
				<li key={item.id}>
					<div className="info-price">
						<h5 className="title">{item.name}</h5>
						<div className="line"></div>
						<span className="price">{item.price}</span>
					</div>
					{itemDetails}
					{itemAddOn}
				</li>
			);
		})
		.sort((a, b) => {
			return a.id > b.id;
		});


	return (
		<>
			{cssClass ? (
				<div className="row manu-box-reverse sp0">
					<div className="col-lg-6">
						<div className="menu-box">
							<div className="section-head style-2">
								<h2 className="title">{menu[0]?.category.name}</h2>
								<p>{menu[0]?.category.description}</p>
							</div>
							<ul className="menu-list-2">{categoryItemList}</ul>
						</div>
					</div>
					<div className="col-lg-6">
						<img src={menuImg} alt="food" className="img-cover" />
					</div>
				</div>
			) : (
				<div className="row sp0">
					<div className="col-lg-6">
						<img src={menuImg} alt="food" className="img-cover" />
					</div>
					<div className="col-lg-6">
						<div className="menu-box">
							<div className="section-head style-2">
								<h2 className="title">{menu[0]?.category.name}</h2>
							</div>
							<ul className="menu-list-2">{categoryItemList}</ul>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MenuCategory;
