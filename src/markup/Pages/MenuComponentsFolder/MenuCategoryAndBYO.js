import React from 'react';
import BuildYourOwnSection from './BuildYourOwnSection';

const MenuCategoryAndBYO = ({ menu, menuImg, cssClass }) => {

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

//need to check if this menu item has BYO data, then pass that data down to BuidYourOwnSection component

	return (
		<div>
            <div className="section-head style-2">
									<h2 className="title">{menu[0]?.category}{menu[0]?.price}</h2>
									{/* <BuildYourOwnSection /> */}
									<h2 className="title">Best Sellers</h2>
									<h6>{menu[0]?.message}</h6>
								</div>
								<ul className="menu-list-2">
									{categoryItemList}
                                    </ul>
			
		</div>
	);
};

export default MenuCategoryAndBYO;
