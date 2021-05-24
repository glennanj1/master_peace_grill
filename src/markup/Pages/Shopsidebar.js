import React, {Component} from 'react';
import { Link } from  'react-router-dom';
import { Accordion,Card } from 'react-bootstrap';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

class Shopsidebar extends Component{
	render(){
			return(
				<>
				<Header />
				<div className="page-content bg-white">
					<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + bnr + ")"}}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Shop Grid 3 Side Bar</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={'./'}>Home</Link></li>
										<li>Shop Grid 3 Side Bar</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					<div className="section-full content-inner">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-4 col-md-5 m-b30">
									<aside className="side-bar shop-categories sticky-top">
										<div className="dlab-accordion advanced-search toggle" id="accordion1">
											<Accordion defaultActiveKey="0">
												<Card className="panel">
													<Accordion.Toggle as={Link} eventKey="0">
														<div className="acod-head">
															<h5 className="acod-title"> 
																<Link data-toggle="collapse" >
																	Product categories
																</Link> 
															</h5>
														</div>
													</Accordion.Toggle>	
													<Accordion.Collapse eventKey="0">
														<div id="categories" className="acod-body collapse show">
															<div className="acod-content">
																<div className="widget_services">
																	<ul>
																		<li><Link to={'/shop-cart'}>Veggie Supreme</Link></li>
																		<li><Link to={'/shop-cart'}>The Funghi</Link></li>
																		<li><Link to={'/shop-cart'}>Duck Prosciutto</Link></li>
																		<li><Link to={'/shop-cart'}>Grilled Sausage</Link></li>
																		<li><Link to={'/shop-cart'}>Burger</Link></li>
																		<li><Link to={'/shop-cart'}>Brisket Onion</Link></li>
																	</ul>
																</div>
															</div>
														</div>
													</Accordion.Collapse>	
												</Card>
											</Accordion>	
											<Accordion defaultActiveKey="0">
												<Card className="panel">
													<Accordion.Toggle as={Link} eventKey="0">	
														<div className="acod-head">
															<h5 className="acod-title">
																<Link data-toggle="collapse" >
																	Price Range
																</Link> 
															</h5>
														</div>
													</Accordion.Toggle>	
													<Accordion.Collapse eventKey="0">
														<div id="price-range" className="acod-body collapse show">
															<div className="acod-content">
																<div className="price-slide-2 range-slider">
																	<div className="price">
																		<input type="text" id="amount-2" className="amount" readonly="" value="$400 - $4000" />
																		<div id="slider-range-2"></div>
																	</div>
																 </div>
															</div>
														</div>
													</Accordion.Collapse>	
												</Card>
											</Accordion>
											<Accordion defaultActiveKey="0">
												<Card className="panel">
													<Accordion.Toggle as={Link} eventKey="0">
														<div className="acod-head">
															<h5 className="acod-title"> 
																<Link data-toggle="collapse" >
																	Size
																</Link>
															</h5>
														</div>
													</Accordion.Toggle>	
													<Accordion.Collapse eventKey="0">	
														<div id="size" className="acod-body collapse show">
															<div className="acod-content">
																<h6>Product Size</h6>
																<div className="btn-group product-item-size" data-toggle="buttons">
																	<label className="btn">
																		<input name="options" id="option7" type="radio" /> Large
																	</label>
																	<label className="btn active">
																		<input name="options " id="option8" type="radio" /> Medium
																	</label>
																	<label className="btn">
																		<input name="options" id="option9" type="radio" /> Small
																	</label>
																</div>
															</div>
														</div>
													</Accordion.Collapse>	
												</Card>
											</Accordion>
											<Accordion defaultActiveKey="0">
												<Card className="panel">
													<Accordion.Toggle as={Link} eventKey="0">
														<div className="acod-head">
															<h5 className="acod-title"> 
																<Link data-toggle="collapse">Add toppings :	</Link>
															</h5>
														</div>
													</Accordion.Toggle>	
													<Accordion.Collapse eventKey="0">	
														<div id="toppings" className="acod-body collapse show">
															<div className="acod-content">
																<div className="btn-group product-item-size" data-toggle="buttons">
																	<label className="btn">
																		<input name="options" id="veggies" type="radio" /> Veggies
																	</label>
																	<label className="btn active">
																		<input name="options " id="medium" type="radio" /> Medium
																	</label>
																</div>
															</div>
														</div>
													</Accordion.Collapse>	
												</Card>
											</Accordion>
											<Accordion defaultActiveKey="0">
												<Card className="panel">
													<Accordion.Toggle as={Link} eventKey="0">
														<div className="acod-head">
															<h5 className="acod-title"> 
																<Link data-toggle="collapse">
																	Quantity
																</Link>
															</h5>
														</div>
													</Accordion.Toggle>	
													<Accordion.Collapse eventKey="0">
														<div id="quantity" className="acod-body collapse show">
															<div className="acod-content">
																<div className="btn-group product-item-size" data-toggle="buttons">
																	<label className="btn">
																		<input name="options" id="qty1" type="radio" /> 01
																	</label>
																	<label className="btn active">
																		<input name="options " id="qty2" type="radio" /> 02
																	</label>
																	<label className="btn">
																		<input name="options" id="qty3" type="radio" /> 03
																	</label>
																	<label className="btn">
																		<input name="options" id="qty4" type="radio" /> 04
																	</label>
																	<label className="btn">
																		<input name="options " id="qty5" type="radio" /> 05
																	</label>
																	<label className="btn">
																		<input name="options" id="qty6" type="radio" /> 06
																	</label>
																</div>
															</div>
														</div>
													</Accordion.Collapse>		
												</Card>
											</Accordion>
											<Accordion defaultActiveKey="0">
												<Card className="panel">
													<Accordion.Toggle as={Link} eventKey="1">
														<div className="acod-head">
															<h5 className="acod-title"> 
																<Link data-toggle="collapse" to="#vendor" className="collapsed">
																	Vendor
																</Link>
															</h5>
														</div>
													</Accordion.Toggle>		
													<Accordion.Collapse eventKey="1">
														<div id="vendor" className="acod-body collapse show">
															<div className="acod-content">
																<div className="product-brand">
																	<div className="search-content">
																		<input id="seating1" type="checkbox" />
																		<label for="seating1"  className="search-content-area">Burger</label>
																	</div>
																	<div className="search-content">
																		<input id="seating2" type="checkbox" />
																		<label for="seating2"  className="search-content-area">Pizza</label>
																	</div>
																	<div className="search-content">
																		<input id="seating3" type="checkbox" />
																		<label for="seating3"  className="search-content-area">Fries</label>
																	</div>
																	<div className="search-content">
																		<input id="seating4" type="checkbox" />
																		<label for="seating4"  className="search-content-area">Cola</label>
																	</div>
																	<div className="search-content">
																		<input id="seating5" type="checkbox" />
																		<label for="seating5"  className="search-content-area">Hotdog</label>
																	</div>
																</div>
															</div>
														</div>
													</Accordion.Collapse>	
												</Card>
											</Accordion>
											<Accordion defaultActiveKey="0">
												<div className="panel">
													<Accordion.Toggle as={Link} eventKey="1">
														<div className="acod-head">
															<h5 className="acod-title"> 
																<Link data-toggle="collapse"  to="#tags" className="collapsed">
																	Popular Tags
																</Link>
															</h5>
														</div>
													</Accordion.Toggle>		
													<Accordion.Collapse eventKey="1">
														<div id="tags" className="acod-body collapse show">
															<div className="acod-content">
																<div className="widget_tag_cloud">
																	<div className="tagcloud"> 
																		<Link className="mr-1" to = {'#'}>Burger</Link> 
																		<Link className="mr-1" to = {'#'}>Pizza</Link> 
																		<Link className="mr-1" to = {'#'}>Fries</Link> 
																		<Link className="mr-1" to = {'#'}>Cola</Link> 
																		<Link className="mr-1" to = {'#'}>Hotdog</Link> 
																		<Link className="mr-1" to = {'#'}>Cookies</Link> 
																		<Link className="mr-1" to = {'#'}>Sandwich</Link> 
																		<Link className="mr-1" to = {'#'}>Burger</Link> 
																		<Link className="mr-1" to = {'#'}>Pizza</Link> 
																		<Link className="mr-1" to = {'#'}>Fries</Link> 
																		<Link className="mr-1" to = {'#'}>Cola</Link> 
																		<Link className="mr-1" to = {'#'}>Hotdog</Link> 
																		<Link className="mr-1" to = {'#'}>Cookies</Link> 
																		<Link className="mr-1" to = {'#'}>Sandwich</Link> 
																	</div>
																</div>	
															</div>
														</div>
													</Accordion.Collapse>
												</div>
											</Accordion>
											
										</div>
									</aside>
								</div>
								<div className="col-xl-9 col-lg-8 col-md-7">
									<div className="row">
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item1.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Cup Cake</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item2.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Pepperoni Pizza</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item3.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Burger</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item4.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Chow Mein</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item5.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Pepperoni Pizza</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item6.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Chicken Breast</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item7.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Kurkure</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item8.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Burger</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
										<div className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
											<div className="item-box shop-item style2">
												<div className="item-img">
													<img src={require('./../../images/product/item1.jpg')} alt="" />
												</div>
												<div className="item-info text-center">
													<h4 className="item-title"><Link to={'/shop-product-details'}>Cup Cake</Link></h4>
													<h5 className="price text-primary"><del>45</del><span>$40</span></h5>
													<div className="cart-btn"><Link to={'/shop-product-details'} className="btn btnhover radius-xl"><i className="ti-shopping-cart"></i> Add To Cart</Link></div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer  />
				</>
			
			)
	
	}
}
export default Shopsidebar;