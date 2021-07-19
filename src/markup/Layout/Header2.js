import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './../../images/mpglogo2.png'
// import hours from './../../images/icons/hours.png'


class Header2 extends Component{

	state = {
		isOpen: false
	}

	componentDidMount() {
        // sidebar open/close
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
            Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);
        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
        function checkLi(current) {
            navUl.forEach(el => (current !== el) ? el.classList.remove('open') : '');
			setTimeout(() => {
			current.classList.toggle('open');
			
			/* alert(current.className.indexOf('open'));
				if(current.className.indexOf('open') == -1){
					current.classList.toggle('open');
					alert(2);
				}else{
				alert(current.parentNode);
					current.parentNode.classList.add('khelesh');
				} */
				
			}, 100);			
        }
		
		/* Menu onpen/close */
		var menuBtn = document.querySelector('.menu-btn');
        var pizzaHeaderNav = document.querySelector('.pizza-header .header-nav');
       

        function menuBtnAddActive() {
            return pizzaHeaderNav.classList.add("active");
        }
		
        menuBtn.addEventListener('mouseenter', menuBtnAddActive);
		
		function menuBtnRemoveActive() {
            return pizzaHeaderNav.classList.remove("active");
        }
		
        pizzaHeaderNav.addEventListener('mouseleave', menuBtnRemoveActive);
		
		/* Test */
	}	
	
	
	
	render(){
		return(
			<header className="site-header mo-left header header-transparent pizza-header">
			
				<div className="sticky-header main-bar-wraper navbar-expand-lg">
					<div className="main-bar clearfix ">
						<div className="container clearfix">
							
							<div className="logo-header mostion">
										
											<div className="header-phone-no">
												{/* <img src={hours} alt=""/> */}
												<button className="btn red" onMouseEnter={() => this.setState({isOpen: true})}
													onMouseLeave={() => this.setState({isOpen: false})}><h3>Hours</h3></button>
												{this.state.isOpen && (
													<div className="hoursContainer">
														<h4>Monday: Closed</h4><br />
														<h4>Tuesday: 11am - 4pm</h4><br />
														<h4>Wednesday - Saturday: 11am - 9pm</h4><br />
														<h4>Sunday: 11am - 8pm</h4>
													</div>
												)}
											</div>	
							</div>
							
							<button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
								<span></span>
								<span></span>
								<span></span>
							</button>
							
							<div className="extra-nav">
								<div className="extra-cell">
									<ul className="extra-info">
										<li>
											<div className="header-phone-no">
												{/* <img src={hours} alt=""/> */}
												<span>fast delivery $10 minimum</span>
												<h2>484-344-5250</h2>
											</div>
										</li>
										<li>
											<div className="menu-btn ">
												<span></span>
												<span></span>
												<span></span>
											</div>
										</li>
									</ul>
									
								</div>
							</div>
							
							<div className="dlab-quik-search ">
								<form action="#">
									<input name="search" value="" type="text" className="form-control" placeholder="Type to search" />
									<span id="quik-search-remove"><i className="ti-close"></i></span>
								</form>
							</div>
							
							<div className="header-nav navbar-collapse collapse myNavbar justify-content-end" id="navbarNavDropdown" >
								<div className="logo-header">
									<Link to={"/"}><img src={logo} alt="logo2" /> </Link>
								</div>
								<ul className="nav navbar-nav">	
									<li><Link to={'/menu'}>Menu</Link></li>
									<li>
										<a href={this.props.online}>Order Online</a>
									</li>
									<li>
										<Link to={'/about'}>About Us</Link>
									</li>
								</ul>
								<div className="dlab-social-icon">
									<ul>
										<li><a className="site-button sharp-sm fa fa-facebook" href={this.props.facebook}>{null}</a></li>
										<li><a className="site-button sharp-sm fa fa-yelp" href={this.props.yelp}>{null}</a></li>
									</ul>
								</div>		
							</div>
						</div>
					</div>
				</div>
				
			</header>
			
		)
	}

} 

export default Header2;