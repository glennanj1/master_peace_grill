import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Banner from './../Element/Ravslider';
import Header2 from './../Layout/Header2';
import Footer2 from './../Layout/Footer2';
// import Tab from './../Pages/Tab';
import Owl2 from './../Element/Owl2';
import Modal from './../Element/Modal'; 

const video = 'https://d3ddatyom1hv87.cloudfront.net/steak_final.mp4'
const onlineOrdering = 'https://onlineordering.rmpos.com/Order/?wci=54MBz6OB'
const fb = 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646?fref=ts'
const yelp = 'http://www.yelp.com/biz/masterpeace-grill-conshohocken-2'



class Index2 extends Component{
	
	notify = () => { 
		toast(
		"We will be closed from tomorrow 07/15/2022 and then we reopen on Tuesday 07/19/2022",
		{
		  duration: 6000,
		  position: 'top-right',
	
		}
		  )
		this.setState({isToast: false})
		
	};

	state = { 
		email: '',
		status: '',
		isMobile: false,
		isToast: false
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		this.updateViewPort();
	}

	updateViewPort = () => {
		this.setState({ isMobile: window.innerWidth <= 480})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const config =  {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({mpg_email: {
				email: this.state.email
				}
			})
		}
		fetch('https://top-sports-book-rails.herokuapp.com/mpg_emails', config)
		.then(r => r.json())
		.then(data => this.setState({status: data.status}))
		.catch(err => console.log(err))
		e.target.reset()
	}

	onChange = (e) => {
		this.setState({ email: e.target.value });
	}

	status = () => {
		if (this.state.status === 'success') {
			setTimeout(() => { 
				this.setState({ status: '' })
			}, 8000)
			return (
				<div className="alert alert-success" role="alert">
					<strong>Success!</strong> You have been added to the mailing list.
				</div>
			)
			
		} else if (this.state.status === 'error') {
			setTimeout(() => { 
				this.setState({ status: '' })
			}, 8000)
			return (
				<div className="alert alert-danger" role="alert">
					<strong>Error!</strong> There was an error adding you to the mailing list.
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
	}

	render(){
		return(
			<div>
				<Modal />
				{this.state.isToast ? this.notify() : null}
      			<Toaster  
					
				/>
				<div className="page-wraper font-barlow">
					
					{this.state.isMobile ? 
					
						<div className="videoPlayer" style={{position: 'fixed', overflow: 'hidden'}}>
						</div>
					
					: 
					<video className='videoPlayer' style={{position: 'fixed', overflow: 'hidden'}} autoPlay loop playsInline defaultMuted muted>
						<source src={video} type='video/mp4' />
					</video>}
					
					
					<Header2 facebook={fb} yelp={yelp} online={onlineOrdering}/>
					
					<Banner online={onlineOrdering} mobile={this.state.isMobile}/>	

				
					<div className="section-full content-inner fixedVideo" style={{backgroundColor: '#fffcfc00!important'}}>
					</div>	
					<Owl2 />
					
					<div className="section-full bg-red p-tb50 newslatter-area">
					{this.status()}
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-6 text-white">
									<h5 className="m-b0">Love CheeseSteaks? Like deals? Be the first to know about our newest menu items and latest offers.</h5>
								</div>
								<div className="col-md-6">
									<form className="dzSubscribe newslatter" onChange={this.onChange} onSubmit={this.onSubmit}>
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
