const change_theme_button = document.querySelector('.change_theme');
let news_wrapper = document.querySelector('.news-wrapper');
const news = document.querySelector('.grid');

// change_theme_button.addEventListener('click', () => document.body.classList.add('dark'));


const f_top = Math.pow(0.5 * window.innerHeight, 2);




const filters = document.querySelectorAll('.filter input');

filters.forEach(filter => {
    let filter_wrapper = filter.parentElement;
    filter.addEventListener('focus', () => {
        filter_wrapper.classList.add('hov');
    });

    filter.addEventListener('focusout', () => {
        filter_wrapper.classList.remove('hov');
    })

})

// Зпрос на сервер
class Nnew {
    constructor(text, date, company) {
        this.text = text;
        
        this.date = date;
        
        this.company = company;
    }

    get domElement() {
        let elem = document.createElement('div');
        elem.classList.add('new');
        let newHeader = document.createElement('div');
        newHeader.classList.add('new-header');
        let newBody = document.createElement('div');
        newBody.classList.add('new-body');
        let company = document.createElement('h2');
        company.classList.add('company-name');
        let date = document.createElement('div');
        date.classList.add('date');
        
        let a = document.createElement('a');
        let p = document.createElement('p');
        p.innerHTML = this.text;
        a.appendChild(p);
        newBody.appendChild(a);
        company.innerHTML = this.company;
        date.innerHTML = this.date;
        newHeader.appendChild(company);
        newHeader.appendChild(date);
        
        elem.appendChild(newHeader);
        elem.appendChild(newBody);
        return elem
    }
    
}

let text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique blanditiis quod harum dolores et aliquid deserunt consectetur aspernatur, suscipit nam officiis nemo, autem enim tenetur vitae! Necessitatibus ratione qui ducimus.';
let companies = ['Apple', 'Google', 'Yandex'];
let dates = ['23 May', '14 Nov', '1 Feb', '17 Jan', '2 Aug'];
companies.forEach(company => {
    dates.forEach(date => {
        let n = new Nnew(text=text, date=date, company=company);
        news_wrapper.appendChild(n.domElement);
    })
})
let all_news = news_wrapper.children;
// document.addEventListener('scroll', (e) => {
//     // console.log(e);
    
//     // console.log(all_news);


//     Array.from(all_news).forEach(elem => {
//         // console.log(elem);
//         elem.style.opacity = Math.min(1, Math.abs((f_top + 1050) / Math.pow(elem.getBoundingClientRect().top, 2)));
//     })
// })