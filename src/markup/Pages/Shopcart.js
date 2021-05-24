import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Form} from 'react-bootstrap';

var img = require('./../../images/banner/bnr3.jpg');
var thumb1 = require('./../../images/product/thumb/item1.jpg');
var thumb2 = require('./../../images/product/thumb/item2.jpg');
var thumb3 = require('./../../images/product/thumb/item3.jpg');
var thumb4 = require('./../../images/product/thumb/item4.jpg');
var thumb5 = require('./../../images/product/thumb/item5.jpg');

const mainData = [ 
	{ image: thumb1, title: 'Pizza', price: '28.00', 	 },
	{ image: thumb2, title: 'Burger', price: '36.00', 	 },
	{ image: thumb3, title: 'Cup Cake', price: '29.00',  },
	{ image: thumb4, title: 'Pizza', price: '36.00', 	 },
	{ image: thumb5, title: 'Burger', price: '28.00', 	 },
]

const data = {
  mainData, 
}

const Shopcart  = () => {
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
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Cart</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Shop Cart</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				
				<div className="section-full content-inner">
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="table-responsive m-b50">
									<table className="table check-tbl">
										<thead>
											<tr>
												<th>Product</th>
												<th>Product name</th>
												<th>Unit Price</th>
												<th>Quantity</th>
												<th>Total</th>
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
													<td className="product-item-totle">${data.price}</td>
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
						<div className="row">
							<div className="col-lg-6 col-md-6 m-b30">
								<form className="shop-form"> 
									<h3>Calculate Shipping</h3>
									<div className="form-group">
										<Form.Group controlId="exampleForm.ControlSelect1">
											<Form.Control as="select">
												<option value="">Credit Card Type</option>
												<option value="">Another option</option>
												<option value="">A option</option>
												<option value="">Potato</option>
												
											</Form.Control>
										</Form.Group>
											
									</div>	
									<div className="row">
										<div className="form-group col-lg-6">
											<input type="text" className="form-control" placeholder="Credit Card Number" />
										</div>
										<div className="form-group col-lg-6">
											<input type="text" className="form-control" placeholder="Card Verification Number" />
										</div>
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Coupon Code" />
									</div>
									<div className="form-group">
									<button className="btn btnhover" type="button">Apply Coupon</button>
								</div>
								</form>	
							</div>
							<div className="col-lg-6 col-md-6">
								<h3>Cart Subtotal</h3>
								<table className="table-bordered check-tbl">
									<tbody>
										<tr>
											<td>Order Subtotal</td>
											<td>$125.96</td>
										</tr>
										<tr>
											<td>Shipping</td>
											<td>Free Shipping</td>
										</tr>
										<tr>
											<td>Coupon</td>
											<td>$28.00</td>
										</tr>
										<tr>
											<td>Total</td>
											<td>$506.00</td>
										</tr>
									</tbody>
								</table>
								<div className="form-group">
									<button className="btn btnhover" type="button">Proceed to Checkout</button>
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


export default Shopcart;