import React from 'react';

const MenuCategory = ({ menu, menuImg, categoryCSSClass }) => {
    console.log('css', categoryCSSClass)
    
    //if a special CSS class exists in addition to regular bootstrap for outermost div
    const cssClass = categoryCSSClass ? 'row manu-box-reverse sp0' : 'row sp0';

	const appItemList = menu.map((item) => {
			//does the item have details?
			let itemDetails = item.details ? <h6>{item.details}</h6> : '';
			//does the item have details?
			let itemAddOn = item.add_ons ? <h6>{item.add_ons}</h6> : '';

			return (
				<li>
					<div className="info-price">
						<h5 className="title">{item.name}</h5>
						<div className="line"></div>
						<span className="price">{item.price}</span>
					</div>
					{itemDetails}
					{itemAddOn}
				</li>
			);
		}).sort((a,b) => {
            return a.id > b.id
        });

	return (
		<div className={cssClass}>
			<div className="col-lg-6">
				<div className="menu-box">
					<div className="section-head style-2">
						<h2 className="title">{menu[0].category}</h2>
					</div>
					<ul className="menu-list-2">{appItemList}</ul>
				</div>
			</div>
            <div className="col-lg-6">
								<img src={menuImg} alt={menu[0].category} className="img-cover" />
							</div>
		</div>
	);
};

export default MenuCategory;
