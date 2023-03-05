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


  // get each category and put it into array
  for (const item in menuInfo){
    if (item === 'categories') {
      menuInfo[item].map(c => {
         return categories.push(c)
     }) 
    } else if (item === 'foods') {
      menuInfo[item].map(f => {
        return foods.push(f)
      }) 
    }
  }
  
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
