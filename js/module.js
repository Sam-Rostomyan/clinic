export function tabs(allBtns, allTabs, activeBtn, activeTab) {
    let btns = document.querySelectorAll(`.${allBtns}`);
    let tabs = document.querySelectorAll(`.${allTabs}`);
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('active');
        tabs[i].classList.remove('active');
    }
    activeBtn.classList.add('active');
    document.querySelector(`#${activeTab}`).classList.add('active');
}

export function toggleActive(...props) {
    for (let key of props) {
        if (typeof (key) == 'object') {
            key.classList.toggle('active');
        } else {
            document.querySelector(`${key}`).classList.toggle('active');
        }
    }
}

// Samvel ***********************************************************
export function selectArrowActive(arrowToggle) {
    document.querySelector(`${arrowToggle}`).classList.toggle('active');
}

export function burgerServiseActive(thisBtn, serviseContent) {
    document.querySelector(`${thisBtn}`).classList.toggle('active');
    document.querySelector(`${serviseContent}`).classList.toggle('active');
}

// burger Open
export function burgerOpen(openBurger) {
    document.querySelector(`${openBurger}`).style.left = '0%';
}
// burger Close
export function burgerClose(closeBurger) {
    document.querySelector(`${closeBurger}`).style.left = '-100%';
}
// servicesTab Open
export function servicesTabOpen(openTab) {
    document.querySelector(`${openTab}`).style.left = '0%';
}
// servicesTab Close
export function servicesTabClose(closeTab) {
    document.querySelector(`${closeTab}`).style.left = '-100%';
}

// navbar Close Search and Modal
export function closeModal() {
    document.addEventListener("click", function (e) {
        if (e.target == document.querySelector('#search')) {
            document.querySelector('#search').classList.remove('active');
        }

        if (e.target == document.querySelector('#appointmentModal')) {
            document.querySelector('#appointmentModal').classList.remove('active');
        }
    })
}

// activeClassDot
export function activeClassDot(thisActive) {
    let dotNumber = document.querySelectorAll(".dots_number");
    for (let i = 0; i < dotNumber.length; i++) {
        dotNumber[i].classList.remove('active');
    }
    thisActive.classList.add('active');
}

// accordion dropdownTab
export function dropdownTab(thisBtn, dropdonwOpen) {
    let acc = document.querySelector(`#${dropdonwOpen}`);
    let btn = document.querySelector(`#${thisBtn}`);

    if (acc.style.maxHeight) {
        acc.style.maxHeight = null;
    } else {
        acc.style.maxHeight = acc.style.maxHeight + acc.scrollHeight + 'px';
    }

    btn.classList.toggle('active');
}

// accordion dropdown
export function dropdown(thisBtn) {
    let acc = thisBtn.nextElementSibling;

    if (acc.style.maxHeight) {
        acc.style.maxHeight = null;
    } else {
        acc.style.maxHeight = acc.style.maxHeight + acc.scrollHeight + 'px';
    }

    thisBtn.classList.toggle('active');
}

// stepMouseover
export function stepMouseover() {

    let steps = document.querySelectorAll('.steps__desc_step');
    let texts = document.querySelectorAll('.steps__desc_text');

    for (let i = 0; i < steps.length; i++) {
        steps[i].addEventListener("mouseover", function () {
            texts[i].style.color = '#88BD6F';
            texts[i].style.transition = '.2s linear';
        });

        steps[i].addEventListener("mouseout", function () {
            texts[i].style.color = '';
            texts[i].style.transition = '.2s linear';
        });
    }
}

// stepsTabs
export function stepsTabs(jsStep, thisStep, jcText, thisText, thisTab, allTabs) {
    let step = document.querySelectorAll(`${thisStep}`);
    let text = document.querySelectorAll(`${jcText}`);
    let tabs = document.querySelectorAll(`${allTabs}`);

    for (let i = 0; i < step.length; i++) {
        step[i].classList.remove('active');
        text[i].classList.remove('active');
        tabs[i].classList.remove('active');
    }

    document.querySelector(`${thisTab}`).classList.add('active');
    document.querySelector(`${thisText}`).classList.add('active');
    document.querySelector(`${jsStep}`).classList.add('active');
}

// stepDescActive 
export function stepDescActive(stepDesc, thisStepDesc, jcText, thisText, jsStep, jsThisStep) {
    let stepDeesc = document.querySelectorAll(`${stepDesc}`);
    let text = document.querySelectorAll(`${jcText}`);
    let jsSteps = document.querySelectorAll(`${jsStep}`);

    for (let i = 0; i < stepDeesc.length; i++) {
        stepDeesc[i].classList.remove('active');
        text[i].classList.remove('active');
        jsSteps[i].classList.remove('active');
    }

    document.querySelector(`${thisStepDesc}`).classList.add('active');
    document.querySelector(`${thisText}`).classList.add('active');
    document.querySelector(`${jsThisStep}`).classList.add('active');
}

// navLinkActive
export function navLinkActive() {
    let brg = document.querySelectorAll('.burger');
    let link = document.querySelectorAll('.navbar__menu_link');

    for (let i = 0; i < brg.length; i++) {
        if (document.body.clientWidth <= 860) {
            link[i].addEventListener("click", function (event) {
                event.preventDefault();
                brg[i].classList.toggle('active');
            });
        }
    }
}

// aboutClinic Photo Zoom
export function photoZoom(allSlide, thisSlide) {
    let allSlides = document.querySelectorAll(`${allSlide}`);

    for (let i = 0; i < allSlides.length; i++) {
        allSlides[i].classList.remove('active');
    }
    
    thisSlide.classList.add('active');
    console.log(thisSlide);
}


// Scroll Up 
export function scrollUp() {
    window.onscroll = function () {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 400) {
            document.querySelector("#scrollUp").style.display = 'flex';
        } else {
            document.querySelector("#scrollUp").style.display = 'none';
        }
    }
}
