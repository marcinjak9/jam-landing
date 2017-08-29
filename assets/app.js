/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": ["#EC3952", "#EF6551", "#25B690", "#4C86C3", "#EC4781", "FAD852"]
      },
      "shape": {
        "type": ["image", "image2" ],
        "stroke": {
          "width": 0,
          "color": "#000"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "assets/image1.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 30,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 10,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ffffff",
        "opacity": 1,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 15,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 500,
          "duration": 2
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

);

// instanciate new modal
var modal = new tingle.modal({
  footer: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['newsletter-modal'],
  beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
    return false; // nothing happens
  }
});

// set content
modal.setContent('<!-- Begin MailChimp Signup Form --><link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css"><style type="text/css">#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }</style><div id="mc_embed_signup"><form action="//clockbeats.us11.list-manage.com/subscribe/post?u=0fb55229378ab16d5a9c3aec3&amp;id=6254e2ec1f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><label for="mce-EMAIL">Subscribe to to test the app in beta!</label><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required><div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_0fb55229378ab16d5a9c3aec3_6254e2ec1f" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div></div></form></div>');

// // add a button
// modal.addFooterBtn('Button label', 'tingle-btn tingle-btn--primary', function() {
//   // here goes some logic
//   modal.close();
// });

// // add another button
// modal.addFooterBtn('Dangerous action !', 'tingle-btn tingle-btn--danger', function() {
//   // here goes some logic
//   modal.close();
// });

// // open modal
// modal.open();

// // close modal
// modal.close();

document.addEventListener("DOMContentLoaded", function(event) { 
  //do work
  document.getElementById('modal-btn').onclick = function(e){
    e.preventDefault();
    modal.open();
  }
});