import { PRELOADER_DURATION } from '$lib/constants/animation';
import gsap, { ScrollTrigger } from '$lib/gsap';

const IN_DURATION = 0.4;

export function animateBottomSection() {
	return gsap.from('#hero-bottom-section', {
		duration: IN_DURATION,
		opacity: 0,
		yPercent: 50,
		ease: 'power3.out'
	});
}

export function animateHeroText() {
	const tweenValues: gsap.TweenVars[] = [
		{
			opacity: 0,
			x: -50
		},
		{
			opacity: 0,
			x: 50
		},
		{
			opacity: 0,
			x: -50
		}
	];
	const heroText = gsap.utils.toArray<HTMLElement>('#hero-text > *');
	const tl = gsap.timeline({ defaults: { duration: IN_DURATION, ease: 'power3.out' } });

	heroText.forEach((text, idx) => {
		const tween = gsap.from(text, { ...tweenValues[idx] });
		tl.add(tween, idx === 0 ? undefined : '<');
	});

	return tl;
}

export function animateNavbar() {
	const tween = gsap.from('#navbar', {
		delay: PRELOADER_DURATION,
		duration: IN_DURATION,
		opacity: 0,
		yPercent: -50
	});

	let lastDirection = 0;
	let playedOnce = false;

	ScrollTrigger.create({
		trigger: '#navbar',
		start: 'top top',
		end: 99999,
		onUpdate: (self) => {
			if (!playedOnce) {
				playedOnce = true;
				return;
			}

			if (lastDirection === self.direction) return;
			tween.delay(0).reversed(self.direction > 0);

			lastDirection = self.direction;
		}
	});
	return tween;
}

export function animatePanelOpen() {
	return gsap
		.timeline({ paused: true, ease: 'power3.out' })
		.to('#nav-drawer', { yPercent: 0 })
		.from("[data-animate='nav-link']", {
			opacity: 0,
			stagger: 0.1
		})
		.from(
			"[data-animate='separator']",
			{
				xPercent: -100,
				stagger: 0.1
			},
			'<'
		)
		.reverse();
}

export function animateMenuButton() {
	const tl = gsap
		.timeline({ paused: true })
		.to('#line-2', { xPercent: 0 })
		.to('#line-1', { rotate: 45, transformOrigin: 'center', y: 4, ease: 'power1.out', duration: 0.3 })
		.to('#line-2', { rotate: -45, transformOrigin: 'center', y: -5, ease: 'power1.out', duration: 0.3 }, '<')
		.reverse();
	return tl;
}

export function animateSkillSections() {
	gsap.utils.toArray<HTMLElement>('.skill-item').forEach((skill) => {
		gsap.from(skill, {
			y: 50,
			opacity: 0,
			duration: 0.4,
			ease: 'power3.out',
			scrollTrigger: {
				start: 'top 80%',
				trigger: skill
			}
		});
	});
}

export function animateProjectCard() {
	gsap.utils.toArray<HTMLElement>('.card-img-reveal').forEach((item) => {
		gsap.to(item, {
			yPercent: -100,
			duration: 0.5,
			ease: 'power3.out',
			scrollTrigger: {
				start: 'top 70%',
				trigger: item
			}
		});
	});
}
