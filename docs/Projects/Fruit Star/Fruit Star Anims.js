gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    const id = el.getAttribute('href')?.slice(1)
    if (!id) return
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})


// const splitTypes = document.querySelectorAll('.CardPop');

// splitTypes.forEach((word, i) => {
//     const text = new SplitType(word, { types: `words`});
    
//     gsap.from(text.words, {
//         scrollTrigger: {
//             trigger: word,
//             start: 'top 90%',
//             end: 'top 40%',
//             scrub: true,
//             markers: false
//         },
//         x: 500,
//         opacity: 0,
//         stagger: 0.1
//     })

// })


const MainImgs = document.querySelectorAll(".ImgContainer");

MainImgs.forEach((Element, i) => {
    
    gsap.to(Element, {
        scrollTrigger: {
            trigger: Element,
            start: 'top -20%',
            end: 'top -70%',
            scrub: true,
            markers: false
        },
        // opacity: 0,
        filter: 'brightness(0) blur(10px)'
    });
    if(i != 0) {
        gsap.from(Element, {
            scrollTrigger: {
                trigger: Element,
                start: 'top 100%',
                end: 'top 50%',
                scrub: true,
                markers: false
            },
            // opacity: 0,
            filter: 'brightness(0) blur(10px)'
        });
    }
});

const TitleTimeline = gsap.timeline()
const MainText = document.querySelector(".MainText");
const Tagline = document.querySelector(".TaglineContainer")
console.log(MainText);

// gsap.from(MainText, {
//     x: -2000,
//     opacity: 0,
//     duration: 1.8,
//     ease: 'back.out(1.2)'
// })
// gsap.from(Tagline,{
//     x: 2000,
//     opacity: 0,
//     duration: 2,
//     ease: 'back.out(1.6)'
// }, "<")


const CardPopA = document.querySelector(".CardPop.A");

gsap.from(CardPopA, {
    scrollTrigger: {
        trigger: CardPopA,
        start: 'top 90%',
        end: 'top 20%',
        scrub: true,
        markers: false
    },
    x: -500,
    opacity: 0,
    rotate: -12

})
const CardA = document.querySelector(".Card.A");

gsap.from(CardA, {
    scrollTrigger: {
        trigger: CardA,
        start: 'top 70%',
        end: 'top 10%',
        scrub: true,
        markers: false
    },
    x: 500,
    opacity: 0,
    rotate: 12,

})

const CardPopB = document.querySelector(".CardPop.B");

gsap.from(CardPopB, {
    scrollTrigger: {
        trigger: CardPopB,
        start: 'top 110%',
        end: 'top 20%',
        scrub: true,
        markers: false
    },
    x: 500,
    opacity: 0,
    rotate: 17

})
const CardB = document.querySelector(".Card.B");

gsap.from(CardB, {
    scrollTrigger: {
        trigger: CardB,
        start: 'top 140%',
        end: 'top 10%',
        scrub: true,
        markers: false
    },
    x: -500,
    opacity: 0,
    rotate: -19,

})

const CardPopC = document.querySelector(".CardPop.C");

gsap.from(CardPopC, {
    scrollTrigger: {
        trigger: CardPopC,
        start: 'top 110%',
        end: 'top 20%',
        scrub: true,
        markers: false
    },
    x: 500,
    opacity: 0,
    rotate: 11

})
const CardC = document.querySelector(".Card.C");

gsap.from(CardC, {
    scrollTrigger: {
        trigger: CardC,
        start: 'top 110%',
        end: 'top 30%',
        scrub: true,
        markers: false
    },
    x: -500,
    opacity: 0,
    rotate: -11,

})

const CardPopD = document.querySelector(".CardPop.D");

gsap.from(CardPopD, {
    scrollTrigger: {
        trigger: CardPopD,
        start: 'top 110%',
        end: 'top 40%',
        scrub: true,
        markers: false
    },
    x: -500,
    opacity: 0,
    rotate: -9

})
const CardD = document.querySelector(".Card.D");

gsap.from(CardD, {
    scrollTrigger: {
        trigger: CardD,
        start: 'top 130%',
        end: 'top 20%',
        scrub: true,
        markers: false
    },
    x: 500,
    opacity: 0,
    rotate: 13,

})
const CardPopE = document.querySelector(".CardPop.E");

gsap.from(CardPopE, {
    scrollTrigger: {
        trigger: CardPopE,
        start: 'top 110%',
        end: 'top 40%',
        scrub: true,
        markers: false
    },
    x: 500,
    opacity: 0,
    rotate: 19

})
const CardE = document.querySelector(".Card.E");

gsap.from(CardE, {
    scrollTrigger: {
        trigger: CardE,
        start: 'top 110%',
        end: 'top 50%',
        scrub: true,
        markers: false
    },
    x: -500,
    opacity: 0,
    rotate: -13,

})


