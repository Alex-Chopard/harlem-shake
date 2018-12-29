import yap from 'youtube-audio-player'
// import HS from '@/assets/harlem-shake.mp3'

class HarlemShake {
  constructor ({ singleDancer = 'body', allDancer = ['p', 'img', 'a', 'label'] }) {
    this.singleDancer = singleDancer
    this.allDancer = allDancer
  }

  start () {
    return new Promise(async resolve => {
      // await this.addAndPlayMusic()
      yap.play({ url: 'https://www.youtube.com/watch?v=4hpEnLtqUDg' })

      // Start to play the part with the single 'dancer'.
      await this.singleAnimation()

      for (let i = 0; i < 18; i++) {
        await sleep(800)
        this.bordel()
      }

      // Reload the web page for avoid all changes.
      location.reload()
      resolve(true)
    })
  }

  /* addAndPlayMusic () {
    return new Promise(resolve => {
      mp3.download('https://www.youtube.com/embed/4hpEnLtqUDg', 'LXJS 2013 Keynote', e => {
        console.log('0000000000', e)
        resolve(true)
      })

      const body = document.querySelector('body')

      if (body) {
        const audio = document.createElement('audio')
        audio.src = '' // require('harlem-shake/assets/harlem-shake.mp3') // HS
        audio.autoplay = true

        body.append(audio)
        // <iframe width="560" height="315" src="https://www.youtube.com/embed/4hpEnLtqUDg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      }
    })
  } */

  singleAnimation () {
    return new Promise(async resolve => {
      const animations = [
        { name: 'pulse', time: 1000 },
        { name: 'flash', time: 1000 },
        { name: 'shake', time: 1000 },
        { name: 'swing', time: 1000 },
        { name: 'tada', time: 1000 },
        { name: 'wobble', time: 1000 },
        { name: 'jello', time: 1000 },
        { name: 'bounce', time: 1500 },
        { name: 'flip', time: 1500 },
        { name: 'rollOut', time: 2000 },
        { name: 'rollIn', time: 1000 },
        { name: 'zoomIn', time: 1000 },
        { name: 'zoomOut', time: 1000 },
        { name: 'hinge', time: 1000 },
        { name: 'slideOutUp', time: 1000 },
        { name: 'slideInUp', time: 1000 },
        { name: 'rotateOut', time: 1000 }
      ]

      const element = document.querySelector(this.singleDancer)

      if (element) {
        for (var i = 0; i < animations.length; i++) {
          const animation = animations[i]

          element.classList.add('animated')
          element.classList.add(animation.name)

          await sleep(animation.time)

          element.classList.remove('animated')
          element.classList.remove(animation.name)
        }
      }

      resolve(true)
    })
  }

  bordel () {
    const arrayElement = document.querySelectorAll(this.allDancer.join())

    const arrayAnimations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing',
      'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'fadeIn', 'fadeInDown',
      'fadeInDownBig', 'fadeInLeft', 'flip', 'flipInX', 'flipInY', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft',
      'rotateInDownRight', 'slideOutLeft', 'slideOutRight', 'zoomInUp',
      'zoomOut', 'zoomOutDown', 'hinge', 'rollIn']

    arrayElement.forEach(element => {
      const indiceRandomAnimation = Math.floor(((Math.random() * 10000) % arrayAnimations.length))
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
}

/** *** UTILS *****/

function sleep (time) {
  return new Promise(resolve => { setTimeout(resolve, time) })
}

function randomColor () {
  return `rgb(${random()}, ${random()}, ${random()})`
}

function random () {
  return Math.floor(((Math.random() * 4242) % 256))
}

export default HarlemShake
