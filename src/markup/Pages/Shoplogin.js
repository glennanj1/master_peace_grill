import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bnr = require('./../../images/banner/bnr3.jpg');

class Shoplogin extends Component{
	render(){
		return(	
			<>
			<Header />
			
			<div className="page-content bg-white">
				
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: "url(" + bnr + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Login</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Login</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
			   
			   
				<div className="section-full content-inner shop-account">
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h2 className="m-t0 m-b40 m-md-b20">Already Registered?</h2>
							</div>
						</div>
						<div className="row align-content-stretch">
							<div className="col-lg-6 col-md-12 m-b30">
								<div className="p-a30 border-1 h100">
									<div className="tab-content">
										<h3 className="m-b10">New Customer</h3>
										<p className="m-b15">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
										<Link to={'/shop-login'} className="btn btnhover"  >Create An Account</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 m-b30">
								<div className="p-a30 border-1 radius-sm">
									<div className="tab-content tab-form nav">
										<form id="login" className="tab-pane active col-12 p-a0 ">
											<h3 className="m-b5">Login</h3>
											<p>If you have an account with us, please log in.</p>
											<div className="form-group">
												<label >E-MAIL *</label>
												<input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
											</div>
											<div className="form-group">
												<label>Password *</label>
												<input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
											</div>
											<div className="text-left">
												<button className="btn btnhover m-r5">Login</button>
												<Link data-toggle="tab" to="#forgot-password" className="m-l5"><i className="fa fa-unlock-alt"></i> Forgot Password</Link> 
											</div>
										</form>
										<form id="forgot-password" className="tab-pane fade col-12 p-a0">
											<h4>Forget Password ?</h4>
											<p>We will send you an email to reset your password. </p>
											<div className="form-group">
												<label>E-Mail *</label>
												<input name="dzName" required="" className="form-control" placeholder="Your Email Id" type="email" />
											</div>
											<div className="text-left"> 
												<Link className="btn outline gray" data-toggle="tab" to="#login">Back</Link>
												<button className="btn btnhover pull-right">Submit</button>
											</div>
										</form>
									</div>
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
} 

export default Shoplogin;