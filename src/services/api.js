const baseUrl = 'http://localhost:3001'
const loginUrl = baseUrl + 'users/login'


export function signup (user) {
    return fetch('http://localhost:3001/users/signup',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: user.name,
            username: user.username,
            address: user.address,
            password: user.password,
        })
    }).then(resp => resp.json())
}

export function login (email, password) {
	return fetch('http://localhost:3001/users/login', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }).then(resp => resp.json())
}

export function validate () {
    return fetch('http://localhost:3001/users/validate', {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export function getListings () {
    return fetch('http://localhost:3001/users/listings', {
	    headers: { 'Authorisation': localStorage.token }
    }).then(resp => resp.json())
}

export default { signup, login, validate, getListings }
