import React, { useState } from 'react';
import { TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import burger from '../../images/menu-icons/burger.svg'
import steak from '../../images/menu-icons/steak.svg'
import club from '../../images/menu-icons/club.svg'
import fries from '../../images/menu-icons/fries.svg'
import wrap from '../../images/menu-icons/wrap.svg'
import hoagie from '../../images/menu-icons/hoagie.svg'



const Popupss = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className="section-full bg-white pizza-full-menu" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div tabs>
                <div className="bg-primary pizza-items">
					<div className="container">
						<ul className="nav nav-tabs pizza-items filters">
							<li	
								className= {classnames({ active: activeTab === '1' },'nav-item item')  } 
								onClick={() => { toggle('1'); }}   >
								<input type="radio"/>
							   <Link className="item-icon-box nav-link active" id="pizza-tab" data-toggle="tab" href="#pizza" role="tab" aria-controls="pizza" aria-selected="true">
									<img src={steak} style={{height: '64px', width: '64px'}} alt='cheesesteak' />
									<span>CheeseSteak</span>
								</Link>
							</li>
							<li className={classnames({ active: activeTab === '2' },'nav-item item')}
								onClick={() => { toggle('2'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="burger-tab" data-toggle="tab" href="#burger" role="tab" aria-controls="burger" aria-selected="true">
									<img src={burger} style={{height: '64px', width: '64px'}} alt='burger' />
									<span>Burger</span>
								</Link>
							</li>
							<li className= {classnames({ active: activeTab === '3' },'nav-item item')}
								onClick={() => { toggle('3'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="fries-tab" data-toggle="tab" href="#fries" role="tab" aria-controls="fries" aria-selected="true">
									<img src={hoagie} style={{height: '64px', width: '64px'}} alt='hoagie' />
									<span>Hoagie</span>
								</Link>
							</li>
							<li className={classnames({ active: activeTab === '4' },'nav-item item')}
								onClick={() => { toggle('4'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="cola-tab" data-toggle="tab" href="#cola" role="tab" aria-controls="cola" aria-selected="true">
									<img src={wrap} style={{height: '64px', width: '64px'}} alt='wrap' />
									<span>Wrap</span>
								</Link>
							</li>
							<li className={classnames({ active: activeTab === '5' },'nav-item item')}
								onClick={() => { toggle('5'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="hotdog-tab" data-toggle="tab" href="#hotdog" role="tab" aria-controls="hotdog" aria-selected="true">
									<img src={fries} style={{height: '64px', width: '64px'}} alt='app' />
									<span>Appitizer</span>
								</Link>
							</li>
							<li className={classnames({ active: activeTab === '6' },'nav-item item')}
								onClick={() => { toggle('6'); }}>
								<input type="radio" />
								<Link className="item-icon-box nav-link" id="cookies-tab" data-toggle="tab" href="#cookies" role="tab" aria-controls="cookies" aria-selected="true">
									<img src={club} style={{height: '64px', width: '64px'}} alt='club' />
									<span>Club</span>
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
							<div className="section-full bg-white">
								<div className="row sp0">
									<div className="col-lg-6">
										<img src={require("./../../images/menu/steak.jpg")} alt="" className="img-cover" />
									</div>
									<div className="col-lg-6">
										<div className="menu-box">
											<div className="section-head style-2">
												<h4 className="sub-title">CheeseSteaks $10.99</h4>
												<h2 className="title">Build Your Own</h2>
												<p>
													Pick Your Meat - Beef Steak of Chicken Steak<br />
													Pick 1 Cheese - American, Provolone, Swiss, Cheddar, Wiz, Mozzerella<br /> 
													(Extra Cheese Add $1)
												</p>
												<h2 className="title">Best Sellers</h2>
											</div>
											<ul className="menu-list-2">
												<li>
													<div className="info-price">
														<h5 className="title">Tiger Steak</h5>
														<div className="line"></div>
														<span className="price">11.99</span>
													</div>
													<p>beef steak, chicken steak, bacon, american cheese, all mixed together</p>
												</li>
												<li>
													<div className="info-price">
														<h5 className="title">Buffalo Chicken CheeseSteak</h5>
														<div className="line"></div>
														<span className="price">11.99</span>
													</div>
													<p>hot sauce and american cheese with blue cheese or ranch</p>
												</li>
												<li>
													<div className="info-price">
														<h5 className="title">Philly Steak</h5>
														<div className="line"></div>
														<span className="price">10.99</span>
													</div>
													<p>beef steak with fried onions & real cheese wiz</p>
												</li>
												<li>
													<div className="info-price">
														<h5 className="title">Pizza Steak</h5>
														<div className="line"></div>
														<span className="price">11.99</span>
													</div>
													<p>beef steak mixed with marinara sauce & mozzerella cheese</p>
												</li>
											</ul>
										</div>
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
											<h4 className="item-title"><Link to={'/shop-product-details'}>Loaded Burger</Link></h4>
											{/* <h5 className="price text-primary"><del>10.99</del><span>$9.99</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div> */}
										</div>
									</div>
								</div>
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/burger/pic2.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Pizza Burger</Link></h4>
											{/* <h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div> */}
										</div>
									</div>
								</div>
								 <div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={require('./../../images/product/burger/pic3.jpg')} alt="" /></Link>
										</div>
										<div className="item-info text-center">
											<h4 className="item-title"><Link to={'/shop-product-details'}>Veggie Burger</Link></h4>
											{/* <h5 className="price text-primary"><del>45</del><span>$40</span></h5>
											<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link>></div> */}
										</div>
									</div>
								</div>
								{/*<div className="dz-col col m-b30">
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
								</div> */}
							</div>	
						</TabPane>
						<TabPane tabId="3">
							<div className="row " >
								<div className="dz-col col m-b30">
									<div className="item-box shop-item style2">
										<div className="item-img">
											<Link><img src={club} alt="" /></Link>
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
											<Link><img src={wrap} alt="" /></Link>
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
											<Link><img src={burger} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={burger} alt="" /></Link>
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
											<Link><img src={hoagie} alt="" /></Link>
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
											<Link><img src={fries} alt="" /></Link>
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
											<Link><img src={fries} alt="" /></Link>
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
											<Link><img src={burger} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={burger} alt="" /></Link>
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
											<Link><img src={fries} alt="" /></Link>
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
											<Link><img src={hoagie} alt="" /></Link>
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
											<Link><img src={burger} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={burger} alt="" /></Link>
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
											<Link><img src={fries} alt="" /></Link>
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
											<Link><img src={hoagie} alt="" /></Link>
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
											<Link><img src={burger} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={steak} alt="" /></Link>
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
											<Link><img src={fries} alt="" /></Link>
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