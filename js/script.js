
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.text-desc');

let index = 0;

const activeSlide = i => {
    for(let slide of slides) {
        slide.classList.remove('active');
    }
    slides[i].classList.add('active');
};

const activeDot = i => {
    console.log(i);
    for(let dot of dots) {
        dot.classList.remove('active');
    }
    dots[i].classList.add('active');
};

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
};

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
        // clearInterval(interval); // остоновка автоматичесого переключателя  после нажатия на dots
    });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// const interval = setInterval(nextSlide, 2500); // автоматическое переключание


const modalTrigger = document.getElementById('duck'),
    modal = document.querySelector('.flex-wrapper');

modalTrigger.addEventListener('click', () => {
   modal.classList.toggle('show');
   modalTrigger.classList.toggle('hide');
});


