import React from "react";
import {PageHeader, Button} from 'antd';
import './topheader.css'

class TopHeader extends React.Component {
	handleClick(e) {
		console.log('this is:', e);
	  }

	render() {
		return (
			<div>
				<PageHeader
					className="site-page-header"
					onBack={() => null}
					title={this.props.name}
					subTitle="Yupi's Website"
					extra={[
						<Button key="3" onClick={() => this.handleClick('Yupi Daily')}>Yupi Daily</Button>,
						<Button key="2" onClick={() => this.handleClick('Yupi Food')}>Yupi Food</Button>,
						<Button key="1" type="primary" onClick={() => this.handleClick('Yupi Gallery')}>
							Yupi Gallery
						</Button>
					]}
				/>
			</div>
		);
	}
}

export default TopHeader;