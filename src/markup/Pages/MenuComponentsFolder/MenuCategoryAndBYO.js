import React from 'react';
// import BuildYourOwnSection from './BuildYourOwnSection';

const MenuCategoryAndBYO = ({ menu, menuImg, cssClass, category }) => {
	console.log('menu passed to coponent w/ byo', menu);

	const categoryItemList = menu
		?.map((item) => {
			//does the item have details?
			let itemDetails = item.details ? <h6>{item?.details}</h6> : '';
			//does the item have add_ons?
			let itemAddOn = item.add_ons ? <h6>{item?.add_ons}</h6> : '';

			return (
				<li key={item?.id}>
					<div className="info-price">
						<h5 className="title">{item?.name}</h5>
						<div className="line"></div>
						<span className="price">{parseFloat(item?.price).toFixed(2)}</span>
					</div>
					{itemDetails}
					{itemAddOn}
				</li>
			);
		})
		// .sort((a, b) => {
		// 	return a.id > b.id;
		// });

	let byoVar = '';

	switch (category?.name) {
		case 'Wraps $10.99':
			byoVar = (
				<p>
					<b>Pick a Tortilla</b> - White, Whole Wheat, Sun Dried Tomato, Spinach
					<br />
					<b>Pick a Spread</b> - Mayo, Southwest Spread, Mustard, Spicy Mustard,
					Honey Mustard, Ranch, Hot Sauce, Humus
					<br />
					<b>Pick a Protein</b> - Grilled Chicken, Roast Beef, Chicken Salad,
					Tuna Salad, Turkey, Ham, Chicken Tenders
					<br />
					<b>Pick 1 Cheese</b> - american, provolone, swiss, cheddar, wiz,
					mozzerella, pepperJack
					<br />
					<b>Pick Your Veggies</b> - Lettuce, Tomato, Onion, Roasted Peppers,
					Mushroom, Hot Peppers, Sweet Pepper, Pickle, Cole Slaw
					<br />
					<b>Add Long Hots</b> - $1.49
					<br />
					Turn any CheeseSteak into a wrap
				</p>
			);
			break;
		case 'Triple Decker Clubs $10.99':
			byoVar = (
				<p>
					<b>Choice of bread</b> - white, wheat or rye
					<br />
					All served with lettuce, tomato, mayo, and crispy bacon
					<br />
					• Grilled Chicken • Roast Beef Turkey • Tuna Salad • Chicken Salad •
					Ham & Cheese <br />
					Add Cheese $1
				</p>
			);
			break;
		case 'CheeseSteaks $11.99':
			byoVar = (
				<p>
					<b>Pick Your Meat</b> - Beef Steak of Chicken Steak
					<br />
					<b>Pick 1 Cheese</b> - american, provolone, swiss, cheddar, wiz,
					mozzerella, pepperjack
					<br />
					<b>Pick a Spread</b> - Mayo, Southwest Spread, Mustard, Spicy Mustard,
					Honey Mustard, Ranch, Hot Sauce, Humus
					<br />
					<b>Pick Your Veggies</b> - Lettuce, Tomato, Onion, Roasted Peppers,
					Mushroom, Hot Peppers, Sweet Pepper, Pickle, Cole Slaw
					<br />
					(Extra Cheese Add $1) (Extra Pepperoni Add $1)
				</p>
			);
			break;
		case 'Burgers $10.99':
			byoVar = (
				<p>
					Served on brioche bun
					<br />
					<b>PICK A PATTY</b> - Short Rib Beef Angus, Fried Chicken Cutlet,
					Turkey Burger or Veggie Burger
					<br />
					<b>PICK A CHEESE</b> - American, Provolone, Swiss, Cheddar, Wiz,
					Mozzarella
					<br />
					<b>PICK YOUR SPREADS</b> - Ketchup, Mayo, Southwest Spread, Mustard,
					Spicy Mustard
					<br />
					<b>PICK YOUR VEGGIES</b> - Lettuce, Tomato, Fried Onion, Raw Onion,
					Roasted Peppers, Mushroom, Pickle, Cole Slaw, Relish, Sweet or Hot
					Peppers
					<br />
					Make it a combo add $3.99
					<br />
					Add Long Hots $1
					<br />
					Add Bacon $1.99
				</p>
			);
			break;
		case 'Hoagies & Grinders $10.99':
			byoVar = (
				<p>
					Served On A Fresh Liscio's Roll
					<br />
					<b>PICK 1 PROTEIN</b> - turkey, ham, roast beef, tuna salad, chicken
					salad, grilled chicken, chicken tenders
					<br />
					<b>PICK 1 CHEESE</b> - american, provolone, swiss, cheddar,
					mozzarella, pepperjack PICK YOUR SPREADS - mayo, southwest spread,
					mustard, spicy mustard, honey mustard, oil, vinegar, ranch <br />
					<b>Pick a Spread</b> - Mayo, Southwest Spread, Mustard, Spicy Mustard,
					Honey Mustard, Ranch, Hot Sauce, Humus
					<br />
					<b>PICK YOUR VEGGIES</b> - lettuce, tomato, onion, roasted
					peppers,sweet pepper, hot pepper, pickle, cole slaw
					<br />
					ADD LONG HOTS - $1.49
				</p>
			);
			break;
		case 'Sandwiches $8.99':
			byoVar = (
				<p>
					<b>
						Served On Your choice Of White, Wheat, Rye Bread or a Brioche Bun
					</b>
					<br />
					<b>PICK 1 PROTEIN</b> - turkey, ham, roast beef, tuna salad, chicken
					salad, grilled chicken breast, chicken tender
					<br />
					<b>PICK 1 CHEESE</b> - american, provolone, swiss, cheddar,
					mozzarella, pepperjack <br />
					<b>PICK YOUR SPREADS</b> - mayo, southwest spread, mustard, spicy
					mustard, honey mustard, oil, vinegar, ranch <br />
					<b>PICK YOUR VEGGIES</b> - lettuce, tomato, onion, roasted peppers.
					sweet pepper, hot pepper, pickle, cole slaw
				</p>
			);
			break;
		case 'Grilled Cheese $5.49':
			byoVar = (
				<p>
					Served On Your choice Of White, Wheat or Rye Bread <br />
					<b>PICK 1 PROTEIN</b> - turkey, ham, bacon, roast beef <br />
					<b>PICK 1 CHEESE</b> - american, provolone, swiss, cheddar,
					mozzarella, pepperjack <br />
					<b>PICK YOUR SPREADS</b> - mayo, southwest spread, mustard, spicy
					mustard, honey mustard, oil, vinegar, ranch <br />
					<b>PICK YOUR VEGGIES</b> - lettuce, tomato, onion, roasted peppers,
					sweet pepper, hot pepper, pickle, cole slaw
					<br />
				</p>
			);
			break;
		default:
			console.log('Not a BYO Item');
	}

	//need to check if this menu item has BYO data, then pass that data down to BuidYourOwnSection component

	return (
		<>
			{cssClass ? (
				<div className="row manu-box-reverse sp0">
					<div className="col-lg-6">
						<div className="menu-box">
							<div className="section-head style-2">
								<h2 className="title">{category?.name}</h2>
								<h4 class="sub-title">Build Your Own</h4>
								<p>{byoVar}</p>
								<h3 className="title">Best Sellers</h3>
								<p>{category?.description}</p>
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
								<h2 className="title">{category?.name}</h2>
								<h4 class="sub-title">Build Your Own</h4>
								<p>{byoVar}</p>
								<h3 className="title">Best Sellers</h3>
								<p>{category?.description}</p>
							</div>
							<ul className="menu-list-2">{categoryItemList}</ul>
						</div>
					</div>
				</div>
			)}
		</>
		// <div>
		//     <div className="section-head style-2">
		// 							<h2 className="title">{menu[0]?.category.name}</h2>
		// 							{/* <BuildYourOwnSection /> */}
		// 							<h3 className="title">Best Sellers</h3>
		// 							<p>{menu[0]?.category.description}</p>
		// 						</div>
		// 						<ul className="menu-list-2">
		// 							{categoryItemList}
		//                             </ul>

		// </div>
	);
};

export default MenuCategoryAndBYO;
