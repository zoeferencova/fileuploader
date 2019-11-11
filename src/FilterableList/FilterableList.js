import React from 'react';
import ListItem from '../ListItem/ListItem';

class FilterableList extends React.Component {
	render() {
		const list = this.props.files
		list.map((file, key) => <ListItem {...file} key={key}/>)
		return(
			<div className='FilterableList'>
				{list}
			</div>
		)
	}
}

FilterableList.defaultProps = {
	files: []
}

export default FilterableList;