class Slideshow {
    constructor() {
        this.current = 1;
        this.timeline = new TimelineMax({ delay: 1 });
        this.slides = document.querySelectorAll('.img');
        this.links = document.querySelectorAll('#nav ul li')
        this.slidesLength = this.slides.length;
        this.init()
    }
    init() {
        this.timeline
            .staggerFrom(this.links, .5, {
                x: 20,
                autoAlpha: 0
            }, .1)
        this.initEvents()
    }
    initEvents() {
        for (let i = 0; i < this.links.length; i++) {
            let link = this.links[i];
            link.addEventListener('mouseenter', this.mouseEnter.bind(this))
            link.addEventListener('mouseleave', this.mouseLeave.bind(this))
        }
    }
    mouseEnter(e) {
        let target = e.target;
        let linkData = target.getAttribute('data-link'); 

        for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides[i];
            let imageData = slide.getAttribute('data-img');
            if ((linkData === imageData)) {
                if (slide.classList.contains('img__active')) return;
                slide.classList.add('img__active')
                TweenMax.fromTo(slide, 1, {
                    scale: 1.1,
                    autoAlpha: 0      
                }, {
                    scale: 1,
                    autoAlpha: 1,
                    ease: Expo.easeOut
                })
            }
            else {
                slide.classList.remove('img__active')
                TweenMax.to(slide, .5, {
                    autoAlpha: 0   
                })
            }
        }  
    }
    mouseLeave(e) {
        let target = e.target;
    }
}

export default Slideshow;