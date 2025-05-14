const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section1',
            start: '50% 50%',
            end: '130% 50%',
            scrub: 1
        }
    });

    tl
        .to('#Group', {
            top: "105%",
            left: "5%",
            rotate: 120
        }, 'timeO')
        .to('#Black-Cherry-can', {
            top: "115%",
            left: "16%",
        }, 'timeO')

        .to('#Cherry', {
            top: "160%",
            left: "70%",
        }, 'timeO')
});

mm.add("(max-width: 799px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.section1',
            start: '50% 50%',
            end: '130% 50%',
            scrub: 1
        }
    });

    tl
        .to('#Group', {
            top: "105%",
            left: "5%",
            rotate: 120
        }, 'timeO')
        .to('#Black-Cherry-can', {
            top: "120%",
            left: "23%",
        }, 'timeO')

        .to('#Cherry', {
            top: "160%",
            left: "35%",
            width: "57vw"
        }, 'timeO')
});


let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section2',
            start: '50% 50%',
            end: '200% 100%',
            scrub: 1,

        }
    });

    tl2.to('#Black-Cherry-can', {
        top: "214%",
        left: "42.1%",
        width: "14.5vw",
    }, 'time1')

        .from('#Lemon-Lime-can', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')

        .from('#Grape-can', {
            y: 300,
            x: 700,
            rotate: 90,
        }, 'time1')
});

mm2.add("(max-width: 799px)", () => {
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.section3',
            start: '-100% 90%',
            end: '100% 100%',
            scrub: 1,

        }
    });

    tl2
        .from('#Lemon-Lime-can', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')

        .from('#Grape-can', {
            y: 300,
            x: -700,
            rotate: -90,
        }, 'time1')

        .from('#resp-Black-Cherry-can', {
            y: 300,
            x: 700,
            rotate: 90,
        }, 'time1')
});