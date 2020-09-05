import axios from 'axios'

export default ({ req }) => {
	if (typeof window === 'undefined') {
		return axios.create({
			baseURL: 'http://www.ticketing-yanan.xyz/',
			headers: req.headers,
		})
	} else {
		return axios.create({})
	}
}
