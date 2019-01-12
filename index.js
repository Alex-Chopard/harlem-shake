"use strict";

class HarlemShake {
  constructor ({ singleDancer = 'body', allDancer = ['p', 'img', 'a', 'label'] }, soundUrl) {
    this.singleDancer = singleDancer;
    this.allDancer = allDancer;
    this.soundUrl = null;

    // Check if the soundUrl is correct.
    if (!soundUrl || typeof soundUrl !== 'string' || soundUrl.length === 0) {
      console.error('[HarlemShake:constructor] Please use a valide string for soundUrl !');
    } else {
      this.soundUrl = soundUrl;
    }

    addCss();
  }

  start () {
    return new Promise(async resolve => {
      if (this.soundUrl) {
        this.addAndPlayMusic();
    
        // Start to play the part with the single 'dancer'.
        await this.singleAnimation();
      
        for (let i = 0; i < 18; i++) {
          await sleep(800);
          this.bordel();
        }
    
        // Reload the web page for avoid all changes.
        location.reload();
        resolve(true);
      } else {
        console.error('[HarlemShake:start] soundUrl isn\'t valide !', this.soundUrl);
        resolve(false);
      }
    });
  }

  addAndPlayMusic () {
    const body = document.querySelector('body');
  
    if (body) {
      const audio = document.createElement('audio');
      audio.src = this.soundUrl;
      audio.autoplay = true;
  
      body.append(audio);
    }
  }

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
      ];
    
      const element = document.querySelector(this.singleDancer);
  
      if (element) {
        for (var i = 0; i < animations.length; i++) {
          const animation = animations[i];
  
          element.classList.add('animated');
          element.classList.add(animation.name);
    
          await sleep(animation.time);
    
          element.classList.remove('animated');
          element.classList.remove(animation.name);
        }
      }
  
      resolve(true);
    });
  }

  bordel () {
    const arrayElement = document.querySelectorAll(this.allDancer.join());
  
    const arrayAnimations = ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing'
    , 'tada', 'wobble', 'jello', 'bounceIn', 'bounceInDown', 'bounceInLeft', 'fadeIn', 'fadeInDown',
    , 'fadeInDownBig', 'fadeInLeft', 'flip', 'flipInX', 'flipInY', 'lightSpeedOut', 'rotateIn', 'rotateInDownLeft', 
    'rotateInDownRight', 'slideOutLeft', 'slideOutRight', 'zoomInUp',
    'zoomOut', 'zoomOutDown', 'hinge', 'rollIn'];
  
    arrayElement.forEach(element => {
      const indiceRandomAnimation = Math.floor(((Math.random() * 10000 ) % arrayAnimations.length));
      element.classList.add('animated');
      element.classList.add(arrayAnimations[indiceRandomAnimation]);

      // Set random color
      element.style.color = randomColor();
      element.style.backgroundColor = randomColor();
  
      setTimeout(() => {
        // Remove class
        element.classList.remove('animated');
        element.classList.remove(arrayAnimations[indiceRandomAnimation]);
      }, 700);
    });
  }
}

/***** UTILS *****/

function sleep (time) {
  return new Promise(resolve => { setTimeout(resolve, time) });
}

function randomColor () {
  return `rgb(${random()}, ${random()}, ${random()})`;
}

function random () {
  return Math.floor(((Math.random() * 4242 ) % 256));
}

function addCss () {
  const head = document.querySelector('head');

  if (head) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css');

    head.append(link);
  }
}

module.exports = HarlemShake;
