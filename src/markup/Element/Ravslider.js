import React,{Component} from 'react';
// import {Link} from 'react-router-dom';
import mpgLogo from './../../images/mpgLogo.png'; // Import the logo

class Banner extends Component{
	getYearDifference() {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const startYear = 2014;
        // If the current month is before November, subtract 1 from the year difference
        const yearDifference = (currentDate.getMonth() < 10) ? (currentYear - startYear - 1) : (currentYear - startYear);
        return yearDifference;
    }
	render(){
		return(
			
			<div className= "banner" style={{background: ''}}>	
			{/* want to move the background picture down 100px */}
			<div className="section-full content-inner bnr-bg" style={{
				backgroundImage: "url(https://strapi.glennan.cloud/uploads/home2_f64d42ef8e.png)",
				backgroundSize: "cover", 
				marginTop: "90px",
				minHeight: "120vh"
			}}>
				{/* <div className="section-full content-inner bnr-bg" style={{backgroundImage: "url(" + require('./../../images/main-slider/home2.png') + ")", backgroundSize: "cover"}}> */}
					<div className="container">
						
						<div className="row justify-content-center">
							<div className="col-lg-12 text-center">
								<div className="content">
									<div className="banner-logo">
										<img src={mpgLogo} alt="MPG Logo" />
									</div>
									<h2 className="title">Serving Conshohocken for a Decade</h2>
									
									{/* <div className= "bnr-logo">
										<img src ={require('./../../images/main-slider/slide5.png')}  alt="offer" />
									</div>	 */}
									
									<p className="info"></p>

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