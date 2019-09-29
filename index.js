const container = document.querySelector('.container');
const navAbout = document.querySelector('.top-nav a[href="#section-1"]');
const navProjects = document.querySelector('.top-nav a[href="#section-2"]');
const navContacts = document.querySelector('.top-nav a[href="#section-3"]');
const about = document.querySelector('section[class="about"]');
const projects = document.querySelector('section[class="projects"]');
const contacts = document.querySelector('section[class="contacts"]');
const contactsText = document.querySelector('.contacts div');
const languageIcons = document.querySelectorAll('.about i[class^="devicon"]');
const topNav = document.querySelector('.top-nav');
const diagram = document.querySelector('.diagram');
const gallery = document.querySelector('.gallery');

let isScrolling;
// Highlight current section and auto hide navbar
window.addEventListener('scroll', () => {
	window.clearTimeout(isScrolling);
	topNav.style.transform = 'translateY(0)';

	// Use ratio so it works the same for all viewport size
	const scrollRatio = window.scrollY / container.scrollHeight;
	// console.log(scrollRatio);

	if (scrollRatio >= 0.71) {
		navContacts.style.color = '#ff3f74';
		[navProjects, navAbout].forEach(item => (item.style.color = 'white'));
		// To show animation
		contactsText.style.display = 'block';
	} else if (scrollRatio >= 0.45) {
		navProjects.style.color = '#ff3f74';
		[navAbout, navContacts].forEach(item => (item.style.color = 'white'));
		gallery.style.opacity = 1;
		gallery.style.transform = 'translateY(0)';
	} else if (scrollRatio >= 0.19) {
		navAbout.style.color = '#ff3f74';
		[navProjects, navContacts].forEach(
			item => (item.style.color = 'white')
		);
		diagram.style.opacity = 1;
		diagram.style.transform = 'translateY(0)';
	} else {
		[navAbout, navProjects, navContacts].forEach(
			item => (item.style.color = 'white')
		);
		// Reset values for transition
		diagram.style.opacity = 0;
		diagram.style.transform = 'translateY(100px)';
		gallery.style.opacity = 0;
		gallery.style.transform = 'translateY(100px)';
		contactsText.style.display = 'none';
	}

	if (scrollRatio >= 0.24734177215189873) {
		isScrolling = setTimeout(() => {
			// console.log('not scrolling');
			topNav.style.transform = 'translateY(-50px)';
		}, 2000);
	}
});

// Icon hover animation
languageIcons.forEach(icon => {
	icon.addEventListener('mouseover', () => {
		icon.classList.add('animated', 'heartBeat');
	});
	icon.addEventListener('mouseout', () => {
		icon.classList.remove('animated', 'heartBeat');
	});
});
