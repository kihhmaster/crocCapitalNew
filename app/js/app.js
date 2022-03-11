// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
require('../app/js/webflow3.min.js') 
import { Swiper, Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller} from 'swiper'
Swiper.use([ Parallax, Mousewheel, Pagination, Scrollbar, Navigation, Controller ])
document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.partnership--slider', {
		loop: false,
		speed: 2000,
		// mousewheel: {
		// 	invert: false,
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		on: {
			init: function() {
				
			}
		},
	})
	let partnership = document.querySelector('.partnership--tab')
	let media = document.querySelector('.media--tab')
	let projects = document.querySelector('.projects--tab')
	let tab = document.querySelectorAll(".tabs__item");

	swiperIMG.on('activeIndexChange', function(e){
		let idexSlide = e.realIndex
		let slide = e.slides[idexSlide].id
		console.log(slide)
		switch(slide) {
			case 'partnership':
				tab.forEach(item => item.classList.remove('active'));
				partnership.classList.add('active')
				break;
			case 'media':
				tab.forEach(item => item.classList.remove('active'));
				media.classList.add('active')
				break;
			case "projects": 
				tab.forEach(item => item.classList.remove('active'));
				projects.classList.add('active')
				break;
		}
	})


	const swiperAbout = new Swiper('.about__slider', {
		loop: false,
		speed: 2000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: 'bullets',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
 
  // let tabs = document.querySelector(".tabs");
  // let menuSlider = document.querySelectorAll(".partnership__slider--content");
  // let tab = document.querySelectorAll(".tabs__item");
	// let partnership = document.querySelector('#partnership')
	// let media = document.querySelector('#media')
	// let projects = document.querySelector('#projects')

	// swiperIMG.on('slideChange', function(e){
	// 	const tabIndex = e.activeIndex
	// 	console.log(tabIndex)
	// 	debugger
	// 	switch(tabIndex) {
	// 		case '0':
	// 			tab.forEach(item => item.classList.remove('active'));
	// 			partnership.classList.add('active')
	// 			break;
	// 		case '1':
	// 			tab.forEach(item => item.classList.remove('active'));
	// 			media.classList.add('active')
	// 			break;
	// 		case "2": 
	// 			tab.forEach(item => item.classList.remove('active'));
	// 			projects.classList.add('active')
	// 			break;
	// 	}

	// })


	// tabs.addEventListener("click", function(e){

	// 	if(e.target.classList.contains('tabs__item')) {
	// 		this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'));
	// 		e.target.classList.add('active')
	// 	}

	// 	menuSlider.forEach(slider => slider.classList.remove('show'));
	// 	let tabIndex = e.target.dataset.tab;
	// 	let thisSwiper = document.querySelector(tabIndex)
	// 	console.log(thisSwiper);
	// 	thisSwiper.classList.add("show")
	// })

	let partnershipSliderImg = document.querySelectorAll('.partnership__slider--img');
	partnershipSliderImg.forEach((item) => {
		item.addEventListener('mouseover', bounceDance);
	});
	function bounceDance() {
		this.classList.add('animate__bounce');
		setTimeout(() => {
			this.classList.remove('animate__bounce');
		}, 2000)
	}

	let buttonHidden = documetnt.querySelector('.button--hidden')
	let slideHidden = documetnt.querySelectorAll('.slide__hidden')
	console.log(slideHidden)
	buttonHidden.addEventListener('click', ()=>{
		console.log(slideHidden)
	})


	//crocHeader

		
		// let croc = document.querySelector('.croc-blur')
		// if(window.innerWidth>900){
		// 		document.querySelector('.preloader').classList.add('show');
		// 		croc.innerHTML = '<div class="croc" data-w-id="ee0dfb00-8829-c091-ad03-92e8d1ef2e6e" data-animation-type="lottie" data-src="image/dist/animation.json" data-loop="0" data-direction="1" data-autoplay="0" data-is-ix2-target="1" data-renderer="svg" data-default-duration="2" data-duration="0"></div>\n';
		// } else {
		// 		croc.innerHTML = '<img src="images/background.jpg" alt="Background" class="croc-img">\n';
		// }

		// setTimeout(function(){
		// 		document.body.classList.add('finish');
		// },400)

	//crocHeader
})
