import './style.scss';

// Slider
import { tns } from "tiny-slider"
import TomSelect from 'tom-select';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

document.addEventListener( 'DOMContentLoaded', () => {
	document.querySelectorAll( '.wp-block-gallery.is-style-gallery-slider' ).forEach( ( slides ) => {
		const slider = tns( {
			container: slides,
			items: 1,
			slideBy: 'page',
			autoplay: true,
			nonce: 'blurns'
		} );
	} );

	// Nav Scroll Lock
	if( document.querySelector( '.page-template-overlay-header' ) ) {
		
		const header = document.querySelector( 'header.wp-block-template-part' );
		if( header ) {
			const start = 10; // header.offsetHeight - 1;
			gsap.timeline( {
				scrollTrigger: {
					trigger: 'main',
					start: start + "px start",
					end: "bottom 20px",
					scrub: 1,
					toggleClass: { targets: document.body, className: 'nav-is-fixed' },
					// markers: true
				}
			} );
		}
	}

	// iOS window height work around  
  window.addEventListener( 'resize', bones_theme_window_height );
  bones_theme_window_height();
} );

// iOS window height
const bones_theme_window_height = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app--height', `${window.innerHeight}px`);

	if( document.querySelector( 'header' ) ) {
		doc.style.setProperty('--app--header--height', `${document.querySelector( 'header' ).offsetHeight}px`);
	}
}