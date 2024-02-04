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

let Mobile = false;
function myFunction(x) {
    if (x.matches) { // If media query matches
        Mobile = true;
    } else {
        Mobile = false;
    }
  }
  
  // Create a MediaQueryList object
var x = window.matchMedia("(max-width: 900px)")
  
  // Call listener function at run time
myFunction(x);
  
  // Attach listener function on state changes
x.addEventListener("change", function() {
    myFunction(x);
    if (Mobile == false) {
        Containers.forEach((el) => {
            Cards = el.querySelectorAll(`.Card`);
            // Cards = document.querySelectorAll(`.Card`);
            CardLength = 0;
            EachLength = 0;
            Iterations = 0;
            AngleOffset = 0;
            CardOffset = 0;
            Cards.forEach((el) => {
                EachLength = parseFloat(el.getBoundingClientRect().bottom) - parseFloat(el.getBoundingClientRect().top);
                // console.log(EachLength);
                AngleOffset = EachLength - el.offsetHeight;
                // console.log(AngleOffset);
                if(Iterations == 0) {
                    CardOffset = AngleOffset / 2;
                }
                if (Iterations == 1) {
                    CardOffset = CardLength + (AngleOffset / 2) - 64;
                }
                if (Iterations == 2) {
                    CardOffset = CardLength + (AngleOffset / 2) - 64;
                }
                el.style.setProperty(`--OffsetHeight`, `${CardOffset + 32}px`);
                CardLength = CardLength + EachLength;
                Iterations = Iterations + 1;
            });
        
            CardContainer = el;
            CardContainer.style.setProperty(`--ContainerHeight`, `${CardLength + 96}px`);
            // console.log(CardContainer.style.getPropertyValue("--ContainerHeight"));
        });
    }
});


Containers = document.querySelectorAll('.CardContainer');
// console.log(Containers[0].querySelectorAll(`.Card`));
// Containers.forEach((el) => {
//     console.log(el.querySelectorAll(`.Card`));
// })


let CardLength = 0;
let EachLength = 0;
let Iterations = 0;
let AngleOffset = 0;
let CardOffset = 0;
if (Mobile == false) {
    Containers.forEach((el) => {
        Cards = el.querySelectorAll(`.Card`);
        // Cards = document.querySelectorAll(`.Card`);
        CardLength = 0;
        EachLength = 0;
        Iterations = 0;
        AngleOffset = 0;
        CardOffset = 0;
        Cards.forEach((el) => {
            EachLength = parseFloat(el.getBoundingClientRect().bottom) - parseFloat(el.getBoundingClientRect().top);
            // console.log(EachLength);
            AngleOffset = EachLength - el.offsetHeight;
            // console.log(AngleOffset);
            if(Iterations == 0) {
                CardOffset = AngleOffset / 2;
            }
            if (Iterations == 1) {
                CardOffset = CardLength + (AngleOffset / 2) - 64;
            }
            if (Iterations == 2) {
                CardOffset = CardLength + (AngleOffset / 2) - 64;
            }
            el.style.setProperty(`--OffsetHeight`, `${CardOffset + 32}px`);
            CardLength = CardLength + EachLength;
            Iterations = Iterations + 1;
        })
    
        CardContainer = el;
        CardContainer.style.setProperty(`--ContainerHeight`, `${CardLength + 96}px`);
        // console.log(CardContainer.style.getPropertyValue("--ContainerHeight"));
    })
}


var t
window.onresize = () => {
    resizing(this, this.innerWidth, this.innerHeight) //1
    if (typeof t == 'undefined') resStarted() //2
    clearTimeout(t); t = setTimeout(() => { t = undefined; resEnded() }, 500) //3
}

function resizing(target, w, h) {
    console.log(`Youre resizing: width ${w} height ${h}`);
    if (Mobile == false) {
        Containers.forEach((el) => {
            Cards = el.querySelectorAll(`.Card`);
            // Cards = document.querySelectorAll(`.Card`);
            CardLength = 0;
            EachLength = 0;
            Iterations = 0;
            AngleOffset = 0;
            CardOffset = 0;
            Cards.forEach((el) => {
                EachLength = parseFloat(el.getBoundingClientRect().bottom) - parseFloat(el.getBoundingClientRect().top);
                // console.log(EachLength);
                AngleOffset = EachLength - el.offsetHeight;
                // console.log(AngleOffset);
                if(Iterations == 0) {
                    CardOffset = AngleOffset / 2;
                }
                if (Iterations == 1) {
                    CardOffset = CardLength + (AngleOffset / 2) - 64;
                }
                if (Iterations == 2) {
                    CardOffset = CardLength + (AngleOffset / 2) - 64;
                }
                el.style.setProperty(`--OffsetHeight`, `${CardOffset + 32}px`);
                CardLength = CardLength + EachLength;
                Iterations = Iterations + 1;
            });
        
            CardContainer = el;
            CardContainer.style.setProperty(`--ContainerHeight`, `${CardLength + 96}px`);
            // console.log(CardContainer.style.getPropertyValue("--ContainerHeight"));
        });
    }
}    
function resStarted() { 
    document.body.classList.add("resize-animation-stopper");
    console.log('Resize Started') 
}
function resEnded() { 
    document.body.classList.remove("resize-animation-stopper");
    console.log('Resize Ended') 
}
