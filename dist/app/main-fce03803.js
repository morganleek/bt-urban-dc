/*!
 * 
 * bonesTheme
 * 
 * @author 
 * @version 0.1.0
 * @link UNLICENSED
 * @license UNLICENSED
 * 
 * Copyright (c) 2022 
 * 
 * This software is released under the UNLICENSED License
 * https://opensource.org/licenses/UNLICENSED
 * 
 * Compiled with the help of https://wpack.io
 * A zero setup Webpack Bundler Script for WordPress
 */
(window.wpackiobonesThemeappJsonp=window.wpackiobonesThemeappJsonp||[]).push([[2],{24:function(e,t,r){"use strict";r.r(t);r(8),r(9);var o=r(3),n=r(6);o.a.registerPlugin(n.a),document.addEventListener("DOMContentLoaded",(function(){var e=new Date;if((document.querySelectorAll("footer p").forEach((function(t){t.innerHTML=t.innerHTML.replace("{{year}}",e.getFullYear())})),document.querySelectorAll(".scroll-down a").forEach((function(e){e.addEventListener("click",(function(e){var t;e.preventDefault(),null===(t=e.target.closest(".scroll-down"))||void 0===t||t.scrollIntoView({block:"start",behavior:"smooth"})}))})),document.querySelector(".page-template-overlay-header"))&&document.querySelector("header.wp-block-template-part")){o.a.timeline({scrollTrigger:{trigger:".wp-block-post-content",start:"10px start",end:"bottom 20px",scrub:1,toggleClass:{targets:document.body,className:"nav-is-fixed"}}})}setTimeout((function(){c(),document.querySelectorAll("button.slick-next").forEach((function(e){e.addEventListener("click",(function(e){if(e.target.classList.contains("is-last")&&e.target.closest(".slick-slider")){var t=e.target.closest(".slick-slider");jQuery(t).slick("slickGoTo",0)}}))})),document.querySelectorAll(".wp-block-getwid-content-slider__wrapper").forEach((function(e){jQuery(e).on("afterChange",(function(e){jQuery(e.target).slick("slickCurrentSlide")==e.target.querySelectorAll(".wp-block-getwid-content-slider-slide__wrapper").length-1?e.target.querySelector(".slick-next").classList.add("is-last"):e.target.querySelector(".slick-next").classList.remove("is-last")}))}))}),1e3),window.addEventListener("resize",(function(){l(),c()})),l()}));var c=function(){document.querySelectorAll(".slick-slider").forEach((function(e){var t=e.querySelector(".wp-block-getwid-content-slider-slide__wrapper > *:first-child");if(t){var r=t.offsetHeight/2;e.querySelectorAll(".slick-arrow").forEach((function(e){e.style.top=r+"px",e.classList.contains("is-visible")||e.classList.add("is-visible")}))}}))},l=function(){var e=document.documentElement;e.style.setProperty("--app--height","".concat(window.innerHeight,"px")),document.querySelector("header")&&e.style.setProperty("--app--header--height","".concat(document.querySelector("header").offsetHeight,"px"))}},7:function(e,t,r){r(1),e.exports=r(24)}},[[7,0,3]]]);
//# sourceMappingURL=main-fce03803.js.map