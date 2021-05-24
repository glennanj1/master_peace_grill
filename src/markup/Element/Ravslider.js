import React,{Component} from 'react';
// import {Link} from 'react-router-dom';

var bnr = require('./../../images/main-slider/cheesesteaks.jpg');

class Banner extends Component{
	
	render(){
		return(
			
			<div className= "banner">	
				<div className="section-full content-inner bnr-bg" style={{backgroundImage: "url(" + bnr + ")", backgroundSize: "100%"}}>
					<div className="container">
						
						<div class="row">
							<div class="col-lg-6 text-center">
								<div class="content">
									<h2 className="title">Voted <br/> Best <br/> CheeseStakes</h2>
									
									<div className= "bnr-logo">
										<img src ={require('./../../images/main-slider/slide5.png')}  alt="offer" />
									</div>	
									
									<p className="info">Conshohockens best sandwhich shop going on 7 years.</p>
									
									<a href={this.props.online} className="btn red"  data-target="#exampleModal">Order Online</a>
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