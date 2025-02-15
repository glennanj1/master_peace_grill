import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "../Layout/Header2";
import Footer2 from "../Layout/Footer2";
import MenuCategory from "./MenuComponentsFolder/MenuCategory";
import MenuCategoryAndBYO from "./MenuComponentsFolder/MenuCategoryAndBYO";
import bg from "./../../images/background/rainbow.jpeg";

const onlineOrdering = "https://onlineordering.rmpos.com/Order/?wci=54MBz6OB";
const fb =
  "https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts";
const yelp = "http://www.yelp.com/biz/masterpeace-grill-conshohocken-2";

function Menu() {
  const [menuInfo, setMenuInfo] = useState([]);

  //fetch menu info from db
  useEffect(() => {
    fetchCurrentMenu();
  }, []);

  //function to get all menu data - run on component mount w/ useEffect
  async function fetchCurrentMenu() {
    try {
      let res = await fetch(
        process.env.REACT_APP_PROD_URL + "/foods"
      );

      if (!res.ok) {
        const message = `Error occurred: ${res.status}`;
        throw new Error(message);
      }

      //set menu info w/ response from DB
      const menuData = await res.json();
      // console.log('MENU INFO:', menuData);
      setMenuInfo(menuData);
    } catch (error) {
      console.error("ERROR:", error);
    }
  }
  // categories
  const categories = [];
  const foods = [];


						<div className="row sp0">
							<div className="col-lg-6">
								<img src={wrap} alt="" className="img-cover" />
							</div>
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Wraps $10.99</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											<b>Pick a Tortilla</b> - White, Whole Wheat, Sun Dried Tomato, Spinach<br />
											<b>Pick a Spread</b> - Mayo, Southwest Spread, Mustard, Spicy Mustard, Honey Mustard, Ranch, Hot Sauce, Humus<br />
											<b>Pick a Protein</b> - Grilled Chicken, Roast Beef, Chicken Salad, Tuna Salad, Turkey, Ham, Chicken Tenders<br />
											<b>Pick 1 Cheese</b> - american, provolone, swiss,  wiz, mozzerella, pepperJack<br /> 
											<b>Pick Your Veggies</b> - Lettuce, Tomato, Onion, Roasted Peppers, Mushroom, Hot Peppers, Sweet Pepper, Pickle, Cole Slaw<br />
											<b>Add Long Hots</b> - $1.49<br />
											Turn any CheeseSteak into a wrap
										</p>
										<h2 className="title">Best Sellers</h2>
										<h6>Your Choice of White, Wheat, Spinach or Tomato Wrap</h6>
									</div>
									<ul className="menu-list-2">
										<li>
											<div className="info-price">
												<h5 className="title">Cuban Wrap</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Pulled Pork, Black Forrest Ham, cheese, pickles, mustard, ham and swiss</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Southwestern Turkey Wrap</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Southwest Spread, turkey, lettuce, sweet peppers and crispy tortilla strips</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Buffalo Tender Wrap</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Chicken tenders tossed in hot sauce with lettuce, tomato, and blue cheese or ranch</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Mediterranean Grilled Veggie Wrap</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>spring mix, kalamata olives, roasted peppers, tomato, feta cheese, onion, lettuce, oregano, oil and vinegar</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Turkey BLT Wrap</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Sliced turkey, crispy bacon, lettuce, tomato, and mayo</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Chicken Caesar Wrap</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>crisp romaine lettuce, grilled chicken, caesar dressing and parmesan cheese</p>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Triple Decker Clubs 10.99</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
										<b>Choice of bread</b> - white, wheat or rye<br />
										All served with lettuce, tomato, mayo, and crispy bacon<br />
										• Grilled Chicken • Roast Beef Turkey • Tuna Salad
										• Chicken Salad • Ham & Cheese <br />
										Add Cheese $1
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										<li>
											<div className="info-price">
												<h5 className="title">Cuban Club</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Pulled Pork, Black Forrest Ham, cheese, pickles, mustard, ham and swiss</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Chicken Tender Club</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p> Honey mustard, bacon and American cheese</p>
										</li>
										
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
										<h2 className="title">CheeseSteaks $11.99</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											<b>Pick Your Meat</b> - Beef Steak of Chicken Steak<br />
											<b>Pick 1 Cheese</b> - american, provolone, swiss,  wiz, mozzerella, pepperjack<br /> 
											<b>Pick a Spread</b> - Mayo, Southwest Spread, Mustard, Spicy Mustard, Honey Mustard, Ranch, Hot Sauce, Humus<br />
											<b>Pick Your Veggies</b> - Lettuce, Tomato, Onion, Roasted Peppers, Mushroom, Hot Peppers, Sweet Pepper, Pickle, Cole Slaw<br />
											(Extra Cheese Add $1)
											(Extra Pepperoni Add $1)
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										<li>
											<div className="info-price">
												<h5 className="title">Tiger Steak</h5>
												<div className="line"></div>
												<span className="price">12.99</span>
											</div>
											<p>beef steak, chicken steak, bacon, american cheese, all mixed together</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Buffalo Chicken CheeseSteak</h5>
												<div className="line"></div>
												<span className="price">12.99</span>
											</div>
											<p>hot sauce and american cheese with blue cheese or ranch</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Philly Steak</h5>
												<div className="line"></div>
												<span className="price">11.99</span>
											</div>
											<p>beef steak with fried onions & real cheese wiz</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Pizza Steak</h5>
												<div className="line"></div>
												<span className="price">12.99</span>
											</div>
											<p>beef steak mixed with marinara sauce & mozzerella cheese</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Burgers $10.99</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
											Served on brioche bun<br />
										    <b>PICK A PATTY</b> - Short Rib Beef Angus, Fried Chicken Cutlet, Turkey Burger or Veggie Burger<br />
										    <b>PICK A CHEESE</b> - American, Provolone, Swiss,  Wiz, Mozzarella<br />
										    <b>PICK YOUR SPREADS</b> - Ketchup, Mayo, Southwest Spread, Mustard, Spicy Mustard<br />
										    <b>PICK YOUR VEGGIES</b> - Lettuce, Tomato, Fried Onion, Raw Onion, Roasted Peppers, Mushroom, Pickle, Cole Slaw, Relish, Sweet or Hot Peppers<br />
											Make it a combo add $3.99<br />
											Add Long Hots $1<br />
											Add Bacon $1.99
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										<li>
											<div className="info-price">
												<h5 className="title">Budz Burger</h5>
												<div className="line"></div>
												<span className="price">11.99</span>
											</div>
											<p>Fried onions, lettuce, tomato, thousand island dressing, on a grilled cheese</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Bacon Mushroom Swiss</h5>
												<div className="line"></div>
												<span className="price">11.99</span>
											</div>
											<p>with lettuce tomato and fried onions</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Master Chicken Burger</h5>
												<div className="line"></div>
												<span className="price">11.99</span>
											</div>
											<p>Fried chicken cutlet, cole slaw, southwest spread on a grilled brioche bun</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Southwest Turkey Burger</h5>
												<div className="line"></div>
												<span className="price">11.99</span>
											</div>
											<p>Turkey Burger with southwest sauce, crispy torilla chips, sweet peppers on a grilled brioche bun</p>
										</li>
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
										<h2 className="title">Hoagies & Grinders 10.99</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
										Served On A Fresh Liscio's Roll<br />
										<b>PICK 1 PROTEIN</b> - turkey, ham, roast beef, tuna salad, chicken salad, grilled chicken, chicken tenders<br />
										<b>PICK 1 CHEESE</b> - american, provolone, swiss,  mozzarella, pepperjack PICK YOUR SPREADS - mayo, southwest spread, mustard, spicy mustard, honey mustard, oil, vinegar, ranch <br />
										<b>Pick a Spread</b> - Mayo, Southwest Spread, Mustard, Spicy Mustard, Honey Mustard, Ranch, Hot Sauce, Humus<br />
										<b>PICK YOUR VEGGIES</b> - lettuce, tomato, onion, roasted peppers,sweet pepper, hot pepper, pickle, cole slaw<br />
										ADD LONG HOTS - $1.49
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										<li>
											<div className="info-price">
												<h5 className="title">Italian Hoagie</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Black Forest Ham, Capicola, Genoa Salami, Provolone, lettuce, tomato, onion, oil or mayo</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Buffalo Chicken Tender Hoagie</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>lettuce, tomato, hot sauce and choice of ranch or blue cheese</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Turkey BLT Hoagie</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Sliced turkey, crispy bacon, lettuce, tomato and mayo</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Chicken Tender Hoagie</h5>
												<div className="line"></div>
												<span className="price">10.99</span>
											</div>
											<p>Chicken tenders, honey mustard, American cheese, lettuce and tomato</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Chicken Parm Grinder</h5>
												<div className="line"></div>
												<span className="price">10.99</span>							
											</div>
											<p>with Marinara sauce and provolone cheese</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Cuban Grinder</h5>
												<div className="line"></div>
												<span className="price">10.99</span>							
											</div>
											<p>Pulled Pork, Black Forest ham, Swiss cheese, pickles and mustard</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="row manu-box-reverse sp0">
							<div className="col-lg-6">
								<div className="menu-box">
									<div className="section-head style-2">
										<h2 className="title">Sandwiches $8.99</h2>
										<h4 className="sub-title">Build Your Own</h4>
										<p>
										<b>Served On Your choice Of White, Wheat, Rye Bread or a Brioche Bun</b><br />
										<b>PICK 1 PROTEIN</b> - turkey, ham, roast beef, tuna salad, chicken salad, grilled chicken breast, chicken tender<br />
										<b>PICK 1 CHEESE</b> - american, provolone, swiss,  mozzarella, pepperjack <br />
										<b>PICK YOUR SPREADS</b> - mayo, southwest spread, mustard, spicy mustard, honey mustard, oil, vinegar, ranch <br />
										<b>PICK YOUR VEGGIES</b> - lettuce, tomato, onion, roasted peppers. sweet pepper, hot pepper, pickle, cole slaw
										</p>
										<h2 className="title">Best Sellers</h2>
									</div>
									<ul className="menu-list-2">
										<li>
											<div className="info-price">
												<h5 className="title">BLT</h5>
												<div className="line"></div>
												<span className="price">8.99</span>
											</div>
											<p>BLT Crispy bacon, lettuce, tomato and mayo</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">The Drizzle</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>Chicken Salad on a brioche bun with crispy bacon and American cheese</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">BBQ Pork Sandwich</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>With onion and provolone cheese on a brioche bun</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Pizon Pork</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>Slow roasted pork with long hot peppers & Provolone cheeze on a grilled brioche bun</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">The Chumpy</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>Chicken, Bacon & PepperJack cheese with Ranch dressing served on a brioche bun with lettuce and tomato </p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Grilled Chicken Deluxe</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>On a brioche bun with honey mustard, crispy bacon, American cheese, lettuce and tomato</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Turkey Melt</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>Open face on rye with tomato, provolone cheese </p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Tuna Melt</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>Open face on rye with tomato, provolone cheese</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Roast Beef Melt</h5>
												<div className="line"></div>
												<span className="price">9.49</span>
											</div>
											<p>Open face on rye with tomato, swiss cheese, Thousand Island dressing</p>
										</li>
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
									<h2 className="title">Grilled Cheese $5.49</h2>
									<p>Your choice of White, Wheat or Rye</p>
									<h2 className="title">Build Your Own $7.99</h2>
									<p>
									Served On Your choice Of White, Wheat or Rye Bread <br />
									 <b>PICK 1 PROTEIN</b> - turkey, ham, bacon, roast beef <br />
									<b>PICK 1 CHEESE</b> - american, provolone, swiss,  mozzarella, pepperjack <br />
										<b>PICK YOUR SPREADS</b> - mayo, southwest spread, mustard, spicy mustard, honey mustard, oil, vinegar, ranch <br />
										<b>PICK YOUR VEGGIES</b> - lettuce, tomato, onion, roasted peppers, sweet pepper, hot pepper, pickle, cole slaw<br />
									</p>
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
										<li>
											<div className="info-price">
												<h5 className="title">CheeseSteak Tray</h5>
												<div className="line"></div>
												<span className="price">15.99</span>
											</div>
											<p>Cheesesteak, Chicken Cheesesteak, Tiger Steak, Buffalo Steak or Pizza Steak</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Wrap Tray</h5>
												<div className="line"></div>
												<span className="price">14.99</span>
											</div>
											<p>Southwest Turkey, Itailian, Chicken Salad, Cuban, Buffalo Tender, Tuna, Chicken Caesar, Turkey BLT, Ham, Roast Beef, Mediterranean</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Hoagie Tray</h5>
												<div className="line"></div>
												<span className="price">14.99</span>
											</div>
											<p>Ham and Cheese, Turkey, Roast Beef, Chicken Salad, Tuna, Mixed Cheese, Buffalo Chicken Tender, Southwest Turky, Turkey BLT</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Brioche Tray</h5>
												<div className="line"></div>
												<span className="price">13.99</span>
											</div>
											<p>Turkey, Ham, Chicken Salad, Tuna, Roast Beef, Mixed Cheese, Chumpy, Drizzle, Italian</p>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Small Caesar Salad</h5>
												<div className="line"></div>
												<span className="price">50.00</span>							
											</div>
											<p>crisp romain with croutons parmesan cheese and dressing on the side</p>
                                            <h6>(add chicken for $20.00)</h6>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Large Caesar Salad</h5>
												<div className="line"></div>
												<span className="price">75.00</span>							
											</div>
											<p>crisp romain with croutons parmesan cheese and dressing on the side</p>
                                            <h6>(add chicken for $40.00)</h6>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Small Garden Salad</h5>
												<div className="line"></div>
												<span className="price">60.00</span>							
											</div>
											<p>crisp romain with croutons parmesan cheese and dressing on the side</p>
											<h6>(add chicken for $20.00)</h6>
										</li>
										<li>
											<div className="info-price">
												<h5 className="title">Large Garden Salad</h5>
												<div className="line"></div>
												<span className="price">80.00</span>						
											</div>
											<p>crisp romain with croutons parmesan cheese and dressing on the side</p>
											<h6>(add chicken for $40.00)</h6>
										</li>
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

        <div className="section-full bg-white">
          {categories.map(c => {
            if (c.menuCategory) {
              return <MenuCategory menu={foods.filter(f => f.category_id === c.id)} menuImg={c.menuImage} cssClass={c.cssClass} category={c} />
            } else if (c.menuCategoryAndBYO) {
              return <MenuCategoryAndBYO menu={foods.filter(f => f.category_id === c.id)} menuImg={c.menuImage} cssClass={c.cssClass} category={c} />
            }
            return null;
          })}
        </div>
      </div>

      <Footer2 facebook={fb} yelp={yelp} />
    </div>
  );
}

export default Menu;
