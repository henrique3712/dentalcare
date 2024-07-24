const nav = document.querySelector(".navbar");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll('.menu li');

function handleButtonClick(event) {
    if (event.type === "touchstart") event.preventDefault();
    event.stopPropagation();
    nav.classList.toggle("active");
    handleClickOutside(menu, () => {
        nav.classList.remove("active");
    });
}

function handleClickOutside(targetElement, callback) {
    const html = document.documentElement;
    function handleHTMLClick(event) {
        if (!targetElement.contains(event.target)) {
            targetElement.removeAttribute("data-target");
            html.removeEventListener("click", handleHTMLClick);
            html.removeEventListener("touchstart", handleHTMLClick);
            callback();
        }
    }
    if (!targetElement.hasAttribute("data-target")) {
        html.addEventListener("click", handleHTMLClick);
        html.addEventListener("touchstart", handleHTMLClick);
        targetElement.setAttribute("data-target", "");
    }
}
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove("active");
    });
    
});

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);

//Responsive Animated Tabs
let filter_btns = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btns.length; i++) {
    filter_btns[i].addEventListener('click', function () {
        for (let j = 0; j < filter_btns.length; j++) {
            filter_btns[j].classList.remove('active');
        }
        filter_btns[i].classList.add('active');
        let selected_tab = filter_btns[i].getAttribute('data-tab');
        for (let t = 0; t < tab_items.length; t++) {
            document.querySelector('.tab-filter-item-container').style.height = 
            tab_items[t].scrollHeight + 'px';
            if (tab_items[t].classList.contains(selected_tab)) {
                tab_items[t].classList.add('selected_tab');
            } else {
                tab_items[t].classList.remove('selected_tab');
            }
        }
    });
}

for (let th = 0; th < tab_items.length; th++) {
    document.querySelector('.tab-filter-item-container').style.height = 
    tab_items[t].scrollHeight + 'px';
}