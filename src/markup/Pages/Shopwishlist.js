import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';

var bnr = require('./../../images/banner/bnr2.jpg');
var thumb1 = require('./../../images/product/thumb/item1.jpg');
var thumb2 = require('./../../images/product/thumb/item2.jpg');
var thumb3 = require('./../../images/product/thumb/item3.jpg');
var thumb4 = require('./../../images/product/thumb/item4.jpg');
var thumb5 = require('./../../images/product/thumb/item5.jpg');

const mainData = [ 
	{ image: thumb1, title: 'Pizza', price: '28.00', 	},
	{ image: thumb2, title: 'Burger', price: '36.00', 	 },
	{ image: thumb3, title: 'Cup Cake', price: '29.00', },
	{ image: thumb4, title: 'Pizza', price: '36.00', 	},
	{ image: thumb5, title: 'Burger', price: '28.00', 	},
]

const data = {
  mainData, 
}

const Shopwishlist = () => {
	const [basicData, setBasicData] = useState(Array.from(data.mainData));
   
	const onClick = (index, setData, variables) =>
		setData(variables.filter((data, i) => i !== index && data));

	const btn = (i, dataset, data, height) => (
       
        <Link onClick={() => onClick(i, dataset, data)} className="ti-close">
        </Link>
     
	);
	
		return(
			<>
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: "url( " + bnr + " )"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Wishlist</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Wishlist</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner">
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="table-responsive">
									<table className="table check-tbl">
										<thead>
											<tr>
												<th>Product</th>
												<th>Product name</th>
												<th>Unit Price</th>
												<th>Quantity</th>
												<th>Add to cart </th>
												<th>Close</th>
											</tr>
										</thead>
										<tbody>
											{basicData.map((data, i) => (
												<tr className="alert">
													<td className="product-item-img">
														<img src={data.image} alt="" />
													</td>
													<td className="product-item-name">{data.title}</td>
													<td className="product-item-price">${data.price}</td>
													<td className="product-item-quantity">
														<div className="quantity btn-quantity max-w80 mt-3">
															<Form>
																<Form.Group controlId="exampleForm.SelectCustom">
																	
																		<Form.Control as="select" custom>
																			<option>1</option>
																			<option>2</option>
																			<option>3</option>
																			<option>4</option>
																			<option>5</option>
																		</Form.Control>
																</Form.Group>
															</Form>
														</div>
													</td>
													<td className="product-item-totle">
														<Link to={'/shop-cart'} className="btn btnhover">Add To Cart</Link>
													</td>
													<td className="product-item-close">
														{btn(i, setBasicData, basicData, true)}
													</td>
												</tr>
											))}
											
										</tbody>
									</table>
								</div>
							</div>
						</div>
					 </div>
					
				</div>
				
			</div>
			
			<Footer />
			</>
		)
		
	
}

export default Shopwishlist; 