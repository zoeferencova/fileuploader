import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt, faTrashAlt, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

class ControlBar extends React.Component {
	render() {
		return(
			<div className='ControlBar'>
				<div className='controlBar__btn'><FontAwesomeIcon icon={faRedoAlt}/></div>
				<div className='controlBar__btn'><FontAwesomeIcon icon={faTrashAlt}/></div>
				<div className='controlBar__btn'><FontAwesomeIcon icon={faCloudDownloadAlt}/></div>
			</div>
		)
	}
}

export default ControlBar;