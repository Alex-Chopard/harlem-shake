
module.exports =  async function harlemShake () {
	return new Promise(resolve => {
		addAndPlayMusic()
		await animSolo()
	
		for (let i = 0; i < 18; i++) {
			setTimeout(() => {
				bordel()
			}, i * 800)
	
			if(i === 17) {
				setTimeout(() => {
					location.reload()
					resolve(true)
				}, (i + 1) * 800)
			}
		}
	})
}

function addAndPlayMusic () {
	const body = document.querySelector('body')
	if (body) {
		const audio = document.createElement('audio')
		audio.src = './assets/harlem-shake.mp3.mp3'
		audio.autoplay = true

		body.append(audio)
	}
}

async function animSolo(selector) {
	return new Promise(resolve => {
		const animations = [
			'pulse',
			'flash',
			'shake',
			'swing',
			'tada',
			'wobble',
			'jello',
			'bounce',
			'flip',
			'rollOut',
			'rollIn',
			'zoomIn',
			'zoomOut',
			'hinge',
			'slideOutUp',
			'slideInUp',
			'rotateOut'
		]
	
		const element = document.querySelector(selector)
	
		if (element) {
			await Promise.all(animations.map(async animation => {
				element.classList.add('animated')
				element.classList.add(animation)
	
				await sleep(1000)
	
				element.classList.remove('animated')
				element.classList.remove(animation)
			}))
		}

		resolve(true)
	})
}

function bordel() {
	const arrayElement = document.querySelectorAll('p, img, a, label')

	const arrayAnimations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing'
	, 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'fadeIn', 'fadeInDown',
	, 'fadeInDownBig', 'fadeInLeft', 'flip', 'flipInX', 'flipInY', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 
	'rotateInDownRight', 'slideOutLeft', 'slideOutRight', 'zoomInUp', 
	'zoomOut', 'zoomOutDown', 'hinge', 'rollIn']

	arrayElement.forEach(element => {
		const indiceRandomAnimation = Math.floor(((Math.random() * 10000 ) % arrayAnimations.length));
		element.classList.add('animated')
		element.classList.add(arrayAnimations[indiceRandomAnimation])
		// Set random color
		element.style.color = randomColor()
		element.style.backgroundColor = randomColor()

		setTimeout(() => {
			// Remove class
			element.classList.remove('animated')
			element.classList.remove(arrayAnimations[indiceRandomAnimation])
		}, 700)
	})
}

/***** UTILS *****/

function sleep (time) {
	return new Promise(resolve => { setTimeout(resolve, time) })
}

function randomColor () {
	return `rgb(${random()}, ${random()}, ${random()})`
}

function random () {
	return 	Math.floor(((Math.random() * 4242 ) % 256))
}