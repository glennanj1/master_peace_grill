var React = require('react');
var ReactDOM = require('react-dom');
var ReactGoogleMapImage = require('react-google-map-image');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactGoogleMapImage 
					config={{
						center: '32 wulemotu ajoke street akoka',
						size: '500x240',
						zoom: '15',
						key: 'AIzaSyAmwA8tw1ZXG8fo16T3ymx2HY3Q1gw6dwU',
						mapType: 'roadmap'
					}}
				/>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
