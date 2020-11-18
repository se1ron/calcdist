const form = document.querySelector('.mui-form')
const btn = document.querySelector('.mui-btn')
const div = document.querySelector('.mui-divider')

let res = ''

const EARTH_RADIUS = 6371
function calculateTheDistance(alat, along, blat, blong){


	let lat1 = alat * Math.PI / 180
	let lat2 = blat * Math.PI / 180
	let long1 = along * Math.PI / 180
	let long2 = blong * Math.PI / 180

	let cl1 = Math.cos(lat1)
	let cl2 = Math.cos(lat2)
	let sl1 = Math.sin(lat1)
	let sl2 = Math.sin(lat2)
	let delta = long2 - long1
	let cdelta = Math.cos(delta)
	let sdelta = Math.sin(delta)
 

	let y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2))
	let x = sl1 * sl2 + cl1 * cl2 * cdelta
 
	
	let ad = Math.atan2(y, x)
	let dist = ad * EARTH_RADIUS
 
	return dist

}
let lat1 = 56
let long1 = -87
let lat2 = 34
let long2 = -139


btn.addEventListener('click', (e) =>{
	e.preventDefault()
	if(form.lat1.value && form.long1.value && form.lat2.value && form.long2.value ){
		res =  calculateTheDistance(form.lat1.value, form.long1.value, form.lat2.value, form.long2.value)

		div.textContent = `${Math.ceil(res)} км`
	} else{
		alert("Введите все данные")
	}
})


