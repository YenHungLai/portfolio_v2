const container = document.querySelector('.container');
const navAbout = document.querySelector('.top-nav a[href="#section-1"]');
const navProjects = document.querySelector('.top-nav a[href="#section-2"]');
const navContacts = document.querySelector('.top-nav a[href="#section-3"]');
const about = document.querySelector('section[class="about"]');
const projects = document.querySelector('section[class="projects"]');
const contacts = document.querySelector('section[class="contacts"]');
const contactsText = document.querySelector('.contacts div');
const languageIcons = document.querySelectorAll('.about i[class^="devicon"]');

// Highlight current section
window.addEventListener('scroll', () => {
	// Use ratio so it works the same for all viewport size
	const scrollRatio = window.scrollY / container.scrollHeight;
	console.log(scrollRatio);

	if (scrollRatio >= 0.71) {
		navContacts.style.color = '#ff3f74';
		[navProjects, navAbout].forEach(item => (item.style.color = 'white'));
		// To show animation
		contactsText.style.display = 'block';
	} else if (scrollRatio >= 0.45) {
		navProjects.style.color = '#ff3f74';
		[navAbout, navContacts].forEach(item => (item.style.color = 'white'));
	} else if (scrollRatio >= 0.19) {
		navAbout.style.color = '#ff3f74';
		[navProjects, navContacts].forEach(
			item => (item.style.color = 'white')
		);
	} else {
		[navAbout, navProjects, navContacts].forEach(
			item => (item.style.color = 'white')
		);
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
