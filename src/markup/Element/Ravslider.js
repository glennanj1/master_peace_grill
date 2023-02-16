import React,{Component} from 'react';
// import {Link} from 'react-router-dom';

class Banner extends Component{
	
	render(){
		return(
			
			<div className= "banner">	
				<div className="section-full content-inner bnr-bg" style={{backgroundImage: "url(https://d3ddatyom1hv87.cloudfront.net/home.jpg)", backgroundSize: "cover"}}>
					<div className="container">
						
						<div className="row">
							<div className="col-lg-6 text-center">
								<div className="content">
									<h2 className="title">Best CheeseSteaks</h2>
									
									{/* <div className= "bnr-logo">
										<img src ={require('./../../images/main-slider/slide5.png')}  alt="offer" />
									</div>	 */}
									
									<p className="info" >8 Years Strong <span role="img" aria-label="strong">💪</span></p>

									<a href={this.props.online} className="btn red" style={{fontSize: '34px'}} data-target="#exampleModal">Order Online</a>
									{this.props.mobile ? (
										<a href="tel:4843445250" className="btn red" style={{fontSize: '34px', margin: '5px'}} data-target="#exampleModal">Call Now!</a>
									)
									:
									null
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
		)
		
	}
}

export default Banner;