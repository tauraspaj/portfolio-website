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

function myFunction() {


	const buttons = document.querySelectorAll('.read-more-button')
	const readmores = document.querySelectorAll('.read-more-text')

	buttons.forEach((button, index) => {
		button.addEventListener('click', () => {
			var contentHeight = readmores[index].scrollHeight
			document.documentElement.style.setProperty('--dropdown-height', contentHeight+"px");
			readmores[index].classList.toggle('read-more-toggle');
		})
	})
}

navSlide();
myFunction();