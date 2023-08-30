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
	const tl = gsap.timeline({ defaults: { duration: IN_DURATION, ease: 'sine.out' } });
	const texts = gsap.utils.toArray('.text');

	tl.from('#hero a', {
		opacity: 0.4,
		stagger: 0.2
	})
		.from(
			texts,
			{
				opacity: 0.4,
				stagger: 0.2
			},
			'>-=.2'
		)
		.from('.sometime', {
			opacity: 0
		})
		.from(
			'.write',
			{
				xPercent: -50
			},
			'<'
		);

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
	gsap.set('#nav-drawer', { yPercent: -100 });

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
	gsap.set('#line-2', { xPercent: 30 });

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
			ease: 'quintic.out',
			scrollTrigger: {
				start: 'top 80%',
				trigger: skill
			}
		});
	});
}

export function animateProjectCard() {
	gsap.utils.toArray<HTMLElement>('.project-container').forEach((item) => {
		const revealEl = item.querySelector('.card-img-reveal');
		gsap.set(revealEl, { yPercent: -100 });
		gsap.to(revealEl, {
			yPercent: 100,
			duration: 1,
			ease: 'power3.out',
			scrollTrigger: {
				start: 'top 70%',
				trigger: item
			}
		});
	});
}
