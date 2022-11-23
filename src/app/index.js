import './style.scss';

// Slider
import { tns } from "tiny-slider"
import TomSelect from 'tom-select';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin( ScrollTrigger );

document.addEventListener( 'DOMContentLoaded', () => {
	// Year in Footer
	let date = new Date();
	document.querySelectorAll( 'footer p' ).forEach( ( p ) => {
		p.innerHTML = p.innerHTML.replace( '{{year}}', date.getFullYear() );
	} );

	// Scroll Down
	document.querySelectorAll( '.scroll-down a' ).forEach( ( link ) => {
		link.addEventListener( 'click', ( e ) => { 
			e.preventDefault();
			e.target.closest( '.scroll-down' )?.scrollIntoView( { block: 'start', behavior: 'smooth' } );
		} );
	} );

	// Fade cover/video - may be seperate images for mobile/desktop
	document.querySelectorAll( '.wp-block-post-content > .wp-block-video.alignfull:first-child, .wp-block-post-content > .wp-block-video.alignfull:first-child + .wp-block-video.alignfull, .wp-block-post-content > .wp-block-cover.alignfull:first-child, .wp-block-post-content > .wp-block-cover.alignfull:first-child + .wp-block-cover.alignfull' ).forEach( ( banner ) => {
		gsap.to( banner, {
      opacity: 0,
      ease: 'none',
      immediateRender: false,
      scrollTrigger: {
        trigger: banner,
        start: 'top top',
        end: '80% top',
        scrub: true
      }
    });
	} );


	// if( document.querySelector( '.wp-block-post-content > .wp-block-video.alignfull:first-child, .wp-block-post-content > .wp-block-cover.alignfull:first-child' ) ) {
	// 	const first = document.querySelector( '.wp-block-post-content > .wp-block-video.alignfull:first-child, .wp-block-post-content > .wp-block-cover.alignfull:first-child' );
	// 	gsap.to( first, {
  //     opacity: 0,
  //     ease: 'none',
  //     immediateRender: false,
  //     scrollTrigger: {
  //       trigger: first,
  //       start: 'top top',
  //       end: '80% top',
  //       scrub: true
  //     }
  //   });
	// }

	// Nav Scroll Lock
	if( document.querySelector( '.page-template-overlay-header' ) ) {
		const header = document.querySelector( 'header.wp-block-template-part' );
		if( header ) {
			const start = 10; // header.offsetHeight - 1;
			gsap.timeline( {
				scrollTrigger: {
					trigger: '.wp-block-post-content',
					start: start + "px start",
					end: "bottom 20px",
					scrub: 1,
					toggleClass: { targets: document.body, className: 'nav-is-fixed' },
					// markers: true
				}
			} );
		}
	}

	setTimeout( () => {
		adjustSliderArrows();
		// Loop for sliders
		document.querySelectorAll( 'button.slick-next' ).forEach( ( button ) => {
			button.addEventListener( 'click', ( e ) => {
				if( e.target.classList.contains( 'is-last') && e.target.closest( '.slick-slider' ) ) {
					const slider = e.target.closest( '.slick-slider' );
					jQuery( slider ).slick( 'slickGoTo', 0 );
				}
			} );
		} );

		document.querySelectorAll( '.wp-block-getwid-content-slider__wrapper' ).forEach( ( slider ) => {
			jQuery( slider ).on( 'afterChange', ( e ) => {
				const current = jQuery( e.target ).slick( 'slickCurrentSlide' );
				const length = e.target.querySelectorAll( '.wp-block-getwid-content-slider-slide__wrapper' ).length - 1;
				if( current == length ) {
					e.target.querySelector( '.slick-next' ).classList.add( 'is-last' );
				}
				else {
					e.target.querySelector( '.slick-next' ).classList.remove( 'is-last' );
				}
			} );
	
		} );
	}, 1000 );

	// afterChange

	
	window.addEventListener( 'load', () => {
		bones_theme_window_height();
		adjustSliderArrows();
	} );

  window.addEventListener( 'resize', () => {
		bones_theme_window_height();
		adjustSliderArrows();
	} );

	// iOS window height work around  
  bones_theme_window_height();

	//
	// jQuery('.slick-slider').each( ( slide )).on( 'load', () => {
	// 	console.log( 'loaded' );
	// } );

	document.querySelectorAll( '.frm_forms.with_frm_style .form-field select option' ).forEach( ( option ) => {
		if( option.value.indexOf( "::" ) >= 0 ) {
			const split = option.value.split( "::" );
			if( split.length == 2 ) {
				// option.value = split[0];
				option.innerHTML = split[1];
			}
		}
	} );
} );

const adjustSliderArrows = () => {
	document.querySelectorAll( '.slick-slider' ).forEach( ( slider ) => {
		const first = slider.querySelector( '.wp-block-getwid-content-slider-slide__wrapper > *:first-child' );
		if( first ) {
			const top = first.offsetHeight / 2;
			slider.querySelectorAll( '.slick-arrow' ).forEach( ( arrow ) => {
				arrow.style.top = top + 'px';
				if( !arrow.classList.contains('is-visible') ) {
					arrow.classList.add( 'is-visible' );
				} 
			} );
		}
	} );
}

// iOS window height
const bones_theme_window_height = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app--height', `${window.innerHeight}px`);

	if( document.querySelector( 'header' ) ) {
		doc.style.setProperty('--app--header--height', `${document.querySelector( 'header' ).offsetHeight}px`);
	}
}