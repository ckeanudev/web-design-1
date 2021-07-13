let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

timeline
.to('.franzpic', 2, {y: -250, opacity: 0})
.to('.hi', 2, {y: -200, opacity: 0}, '-=2')
.to('.greet', 2, {y: -200, opacity: 0}, '-=2')

.fromTo('.about-col1', {y: 300, opacity: 0}, {y: 0, opacity: 1, duration: 2})
.fromTo('.about-col2', {y: 300, opacity: 0}, {y: 0, opacity: 1, duration: 2})
.to('.about-col1', 1, {opacity: 1})
.to('.about-col2', 1, {opacity: 1}, '-=1')
.to('.about-col1', 2, {y: -250, opacity: 0})
.to('.about-col2', 2, {y: -250, opacity: 0}, '-=2')


.fromTo('.h1-skills', {y: 200, opacity: 0}, {y: 0, opacity: 1, duration: 2})
.fromTo('.skills-grid', {y: 200, opacity: 0}, {y: 0, opacity: 1, duration: 2})
.to('.h1-skills', 1, {opacity: 1})
.to('.skills-grid', 1, {opacity: 1}, '-=1')
.to('.h1-skills', 2, {y: -200, opacity: 0})
.to('.skills-grid', 2, {y: -200, opacity: 0}, '-=2')

.fromTo('.h1-contact', {y: 200, opacity: 0}, {y: 0, opacity: 1, duration: 2})
.fromTo('.contact-col1', {y: 200, opacity: 0}, {y: 0, opacity: 1, duration: 2})
.fromTo('.contact-col2', {y: 400, opacity: 0}, {y: 0, opacity: 1, duration: 2})





let scene = new ScrollMagic.Scene({
    triggerElement: '.intro-section',
    duration: '315%',
    triggerHook: 0,
})

.setTween(timeline)
.addTo(controller)