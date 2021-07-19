import React, { Component } from 'react';
import Banner from './../Element/Ravslider';
import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';
// import Tab from './../Pages/Tab';
import Owl2 from './../Element/Owl2';

const video = 'https://res.cloudinary.com/dhtfgw8nm/video/upload/v1626726307/steak_loop_dbepcp.mov'
const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'


class Index2 extends Component{

	componentDidMount() {
		window.scrollTo(0, 0)
	}

	onSubmit = (e) => {
		e.preventDefault();
	}

	render(){
		return(
			<div>
				
				<div className="page-wraper font-barlow">

					<video className='videoPlayer' style={{position: 'fixed', overflow: 'hidden'}} autoPlay loop playsInline muted>
						<source src={video} type='video/mp4' />
					</video>
				
					
					<Header2 facebook={fb} yelp={yelp} online={onlineOrdering}/>
					
					<Banner online={onlineOrdering}/>	

						 					
					<div className="section-full content-inner fixedVideo" style={{backgroundColor: '#fffcfc00!important'}}>
						
					</div>	
				
					<Owl2 />
					
					<div className="section-full bg-red p-tb50 newslatter-area">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-6 text-white">
									<h5 className="m-b0">Love CheeseSteaks? Like deals? Be the first to know about our newest menu items and latest offers.</h5>
								</div>
								<div className="col-md-6">
									<form className="dzSubscribe newslatter" onSubmit={this.onSubmit}>
										<div className="dzSubscribeMsg"></div>
										<div className="input-group">
											<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email"/>
											<div className="input-group-append">
												<button name="submit" value="Submit" type="submit" className="btn red radius-xl">Subscribe Now</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					
					
					
				</div>
				
				<Footer2 facebook={fb} yelp={yelp}/>
			</div>	
			
		)	
	}
}

export default Index2;