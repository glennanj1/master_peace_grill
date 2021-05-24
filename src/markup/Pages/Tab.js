import React, { useState } from 'react';
import { TabContent, TabPane, } from 'reactstrap';
import { Link } from 'react-router-dom';


const Popupss = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div class="section-full bg-white pizza-full-menu">
            <div tabs>

                <div className="bg-red pizza-items">
					<div className="container">
						<ul className="nav nav-tabs pizza-items filters">
							<li	className={'nav-item item'} 
								onClick={() => { toggle('1'); }}   >
								<input type="radio"/>
							   <Link className="item-icon-box nav-link active" id="pizza-tab" data-toggle="tab" href="#pizza" role="tab" aria-controls="pizza" aria-selected="true">
									<i className="flaticon-pizza-slice"></i>
									<span>CheeseSteak</span>
								</Link>
							</li>
							<li className={'nav-item item'}
								onClick={() => { toggle('2'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="burger-tab" data-toggle="tab" href="#burger" role="tab" aria-controls="burger" aria-selected="true">
									<i className="flaticon-burger"></i>
									<span>Burger</span>
								</Link>
							</li>
							<li className= {'nav-item item'}
								onClick={() => { toggle('3'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="fries-tab" data-toggle="tab" href="#fries" role="tab" aria-controls="fries" aria-selected="true">
									<i className="flaticon-french-fries"></i>
									<span>Apps</span>
								</Link>
							</li>
							<li className={'nav-item item'}
								onClick={() => { toggle('4'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="cola-tab" data-toggle="tab" href="#cola" role="tab" aria-controls="cola" aria-selected="true">
									<i className="flaticon-cola"></i>
									<span>Hoagies</span>
								</Link>
							</li>
							<li className={'nav-item item'}
								onClick={() => { toggle('5'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="hotdog-tab" data-toggle="tab" href="#hotdog" role="tab" aria-controls="hotdog" aria-selected="true">
									<i className="flaticon-hot-dog"></i>
									<span>Wraps</span>
								</Link>
							</li>
							<li className={'nav-item item'}
								onClick={() => { toggle('6'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="cookies-tab" data-toggle="tab" href="#cookies" role="tab" aria-controls="cookies" aria-selected="true">
									<i className="flaticon-cookies"></i>
									<span>Sandwhich</span>
								</Link>
							</li>
							<li className={'nav-item item'}
								onClick={() => { toggle('7'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="sandwich-tab" data-toggle="tab" href="#sandwich" role="tab" aria-controls="sandwich" aria-selected="true">
									<i className="flaticon-sandwich"></i>
									<span>Clubs</span>
								</Link>
							</li>
						</ul>
					</div>
                </div>
            </div>
			
			<div className="content-inner">
				<div className="container-fluid">
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<div className="row tab-pane fade show active" >
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<img src={require('./../../images/product/pizza/pic1.jpg')} alt="" />
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Summer Pizza</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<img src={require('./../../images/product/pizza/pic2.jpg')} alt="" />
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pepperoni Pizza</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<img src={require('./../../images/product/pizza/pic3.jpg')} alt="" />
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Apricot Chicken</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<img src={require('./../../images/product/pizza/pic4.jpg')} alt="" />
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'shop-product-details'}>Liguria Pizza</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<img src={require('./../../images/product/pizza/pic5.jpg')} alt="" />
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pizza Veronese</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
										</div>
									</div>
								</div>
							</div>	
						</TabPane>
						<TabPane tabId="2">
							<div className="row " >
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/burger/pic1.jpg')} alt="" /> </Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/burger/pic2.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/burger/pic3.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/burger/pic4.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Cupcakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/burger/pic5.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Birthday Cake</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
							</div>	
						</TabPane>
						<TabPane tabId="3">
							<div className="row " >
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item1.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Biscuits</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item2.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item3.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item4.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item5.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tabId="4">
							<div className="row " >
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item5.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item3.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Cupcakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item2.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Birthday Cake</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item7.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Biscuits</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item8.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tabId="5">
							<div className="row " >
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item3.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item4.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item6.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'shop-product-details'}>Pumpkin cakes</Link>></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item8.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item2.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Cupcakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
							</div>
						</TabPane>
						
						<TabPane tabId="6">
							<div className="row " >
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item3.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item4.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item6.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item8.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item2.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Cupcakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
							</div>
						</TabPane>
						
						
						  <TabPane tabId="7">
							<div className="row ">
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item3.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pancakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item4.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pumpkin cakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item5.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Muffin</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item5.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Cupcakes</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div>
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/item7.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Birthday Cake</Link></h4>
											<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
										</div>
									</div>
								</div>
							</div>
						</TabPane>	
					</TabContent>
				</div>	
			</div>	
        </div>
    );
}

export default Popupss;