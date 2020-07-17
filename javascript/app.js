const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click',()=>{
		//Toggle navigation
		nav.classList.toggle('nav-active');
		
		//Burger icon animation
		burger.classList.toggle('nav-active');

		//Animate links
		navLinks.forEach((link, index) => {
			
			if(link.style.animation) {
				link.style.animation = '';
			}else{
				link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
			}
		});
	});
}

function dropdownTimeline() {
	const buttons = document.querySelectorAll('.read-more-button');
	const readmores = document.querySelectorAll('.read-more-text');

	buttons.forEach((button, index) => {
		button.addEventListener('click', () => {
			var contentHeight = readmores[index].scrollHeight
			document.documentElement.style.setProperty('--dropdown-height', contentHeight+"px");
			readmores[index].classList.toggle('read-more-toggle');
		})
	})
}

function videoPopup() {
	const videos = document.querySelectorAll('.vid');
	const iframes = document.querySelectorAll('.iframe-control');
	const popups = document.querySelectorAll('.popup');
	const closePopup = document.querySelectorAll('close-popup');

	videos.forEach((video, index) => {
		video.addEventListener('click', () => {
			popups[index].classList.toggle('active');
		})
	})

	popups.forEach((popup, index) => {
		popup.addEventListener('click' , () => {
			popup.classList.toggle('active');
			// Stop the video after closing popup by refreshing iframe src
			iframes[index].src = iframes[index].src;
		})
	})
}

navSlide();
dropdownTimeline();
videoPopup();