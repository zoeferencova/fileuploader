import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBox extends React.Component {
	render() {
		return(
			<div className='SearchBox'>
				<FontAwesomeIcon icon={faSearch}/>
        		<input placeholder="Search term"/>
			</div>
		)
	}
}

export default SearchBox;