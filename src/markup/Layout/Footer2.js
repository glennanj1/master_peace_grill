import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer2 extends Component{
	render(){
		return(
			<footer className="site-footer pizza-footer">
				<div className="p-tb60 text-center bg-black-1">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="logo-footer">
									<Link to={"./"}><img src={require("./../../images/mpgLogo.png")} alt="logo" /> </Link>
								</div>
								<div className="widget-link"> 
									<ul>
										<li><Link to={"/"}>Home</Link></li> 
										<li><Link to={"/menu"}>Menu</Link></li>  
										<li><Link to={"/about"}>About Us</Link></li>  
									</ul>
								</div>
								<p className="copyright">Copyright © 2021 MasterPeaceGrill All Rights Reserved.</p>
								<p className="copyright">Site Made by <a href="https://johng.netlify.app">Glennan</a></p>
								<ul className="dlab-social-icon">
									<li><a href={this.props.facebook} className="btn white outline circle mr-1"><i className="fa fa-facebook"></i></a></li>
									<li><a href={this.props.yelp} className="btn white outline circle mr-1"><i className="fa fa-yelp"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}

}

export default Footer2;
