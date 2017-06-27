import Axios from 'axios';

export function fetchJson(section = null) {
	if (section === null) {
		return Axios.get('https://test-741bd.firebaseio.com/data.json');
	}
	else {
		return Axios.get('https://test-741bd.firebaseio.com/data/' + section + '.json');
	}
}

export function SelectedSection(section = null) {
	return fetchJson(section = null);
}
