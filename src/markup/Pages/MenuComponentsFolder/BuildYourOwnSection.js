import React from 'react';
import menuBYO from '../../../menuBYO.json';

const BuildYourOwnSection = () => {
	//potentially recieve this data as an array of objects for build your own (byo) connected to a category
	//map over and display as a list
	//we can bring this component into any menu component that needs it
    //see relative structure below

	let byoOptions;
	return (
		<div>
			<h4 className="sub-title">Build Your Own</h4>
			<p>
				<b>Pick a Tortilla</b> - White, Whole Wheat, Sun Dried Tomato, Spinach
				<br />
				<b>Pick a Spread</b> - Mayo, Southwest Spread, Mustard, Spicy Mustard,
				Honey Mustard, Ranch, Hot Sauce, Humus
				<br />
				<b>Pick a Protein</b> - Grilled Chicken, Roast Beef, Chicken Salad, Tuna
				Salad, Turkey, Ham, Chicken Tenders
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
		</div>
	);
};

export default BuildYourOwnSection;
