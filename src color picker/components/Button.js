import React from 'react';

class Button extends React.Component {
	render() {
		console.log(this.props)
		return (
			<button onClick={this.props.chooseColor}>
				<h3> değiştir</h3>
			</button>
		);
	}
}

export { Button };
//export default Button;