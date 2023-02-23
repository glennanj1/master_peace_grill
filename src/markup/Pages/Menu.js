import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header2 from "../Layout/Header2";
import Footer2 from "../Layout/Footer2";
import MenuCategory from "./MenuComponentsFolder/MenuCategory";
import MenuCategoryAndBYO from "./MenuComponentsFolder/MenuCategoryAndBYO";

import bg from "./../../images/background/rainbow.jpeg";
import app from "./../../images/menu/app.jpg";
import wings from "./../../images/menu/wings.jpg";
import salad from "./../../images/menu/salad.jpg";
import wrap from "./../../images/menu/wrap.jpg";
import club from "./../../images/menu/club1.jpg";
import steak from "./../../images/menu/steak.jpg";
import burger from "./../../images/menu/burger.jpg";
import hoagie from "./../../images/menu/hoagie.jpg";
import sandwich from "./../../images/menu/sandwhich.jpg";
import grilledCheese from "./../../images/food/grilled_cheese.jpg";
import catering from "./../../images/menu/catering.jpg";

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
        "https://master-peace-grill-backend.herokuapp.com/foods"
      );
      // for development run w/ ruby backend
      // let res = await fetch('http://localhost:3000/foods');

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

  //filter menu categories to pass into each component
  //APPETIZERS
  const appMenu = menuInfo.filter((item) =>
    item.category.name.includes("Appetizers") ? item : false
  );
  //WINGS
  const wingMenu = menuInfo.filter((item) =>
    item.category.name.includes("Wings") ? item : false
  );
  //SALADS
  const saladMenu = menuInfo.filter((item) =>
    item.category.name.includes("Salads") ? item : false
  );
  //WRAPS
  const wrapMenu = menuInfo.filter((item) =>
    item.category.name.includes("Wraps") ? item : false
  );
  // //TripleDeckerClubs
  const clubMenu = menuInfo.filter((item) =>
    item.category.name.includes("Triple") ? item : false
  );
  //CheeseSteaks
  const cheeseSteakMenu = menuInfo.filter((item) =>
    item.category.name.includes("CheeseSteak") ? item : false
  );
  // //Burgers
  const burgerMenu = menuInfo.filter((item) =>
    item.category.name.includes("Burgers") ? item : false
  );

  ////// CAN UNCOMMENT THESE AND THE CORRESPONDING JSX COMPONENTS ONCE DB HAS FILLED DATA FOR THESE ITEMS
  // // //Hoagies and Grinders
  const hoagieAndGrinderMenu = menuInfo.filter((item) =>
    item.category.name.includes("Hoagies") ? item : false
  );

  // // //Sandwichees
  const sandwichesMenu = menuInfo.filter((item) =>
    item.category.name.includes("Sandwiches") ? item : false
  );

  // // //Grilled Cheese
  const grilledCheeseMenu = menuInfo.filter((item) =>
    item.category.name.includes("Grilled") ? item : false
  );

  // // //Catering 
  const cateringMenu = menuInfo.filter((item) =>
    item.category.name.includes("Catering") ? item : false
  );

  return (
    <div>
      <Header2 facebook={fb} yelp={yelp} online={onlineOrdering} />

      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle no-line"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Full Menu</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>Our Menu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full bg-white">
          <MenuCategory menu={appMenu} menuImg={app} cssClass={true} />
          <MenuCategory menu={wingMenu} menuImg={wings} />
          <MenuCategory menu={saladMenu} menuImg={salad} cssClass={true} />

          <MenuCategoryAndBYO menu={wrapMenu} menuImg={wrap} />
          <MenuCategoryAndBYO menu={clubMenu} menuImg={club} cssClass={true} />
          <MenuCategoryAndBYO menu={cheeseSteakMenu} menuImg={steak} />
          <MenuCategoryAndBYO
            menu={burgerMenu}
            menuImg={burger}
            cssClass={true}
          />
          <MenuCategoryAndBYO
            menu={hoagieAndGrinderMenu}
            menuImg={hoagie}
          />
          <MenuCategoryAndBYO
            menu={sandwichesMenu}
            menuImg={sandwich}
            cssClass={true}
          />
          <MenuCategoryAndBYO
            menu={grilledCheeseMenu}
            menuImg={grilledCheese}
          />
          <MenuCategory
            menu={cateringMenu}
            menuImg={catering}
            cssClass={true}
          />
        </div>
      </div>

      <Footer2 facebook={fb} yelp={yelp} />
    </div>
  );
}

export default Menu;
