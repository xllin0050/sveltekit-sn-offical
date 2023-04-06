// See how the options work here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
let options = {
	root: null,
	rootMargin: '200px',
	threshold: 0
};

export const lazyLoad = (image: HTMLImageElement, src: string) => {
	const loaded = () => {
		image.style.opacity = '1'; // REPL hack to apply loading animation
	};
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				image.src = src; // replace placeholder src with the image src on observe
				if (image.complete) {
					// check if instantly loaded
					loaded();
				} else {
					// if the image isn't loaded yet, add an event listener
					image.addEventListener('load', loaded);
				}
				observer.unobserve(image);
			}
		});
	}, options);
	observer.observe(image); // intersection observer

	return {
		destroy() {
			image.removeEventListener('load', loaded); // clean up the event listener
		}
	};
};
