// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
const mainEl = document.querySelector('main');
const topMenuEl = document.getElementById('top-menu');
mainEl.style.backgroundColor='var(--main-bg)';
const h1 = document.createElement('h1');
h1.textContent = 'DOM Manipulation';
mainEl.classList.add('flex-ctr');
mainEl.appendChild(h1)
topMenuEl.setAttribute('height','100%')
topMenuEl.style.background='var(--top-menu-bg)';
console.log(topMenuEl.style.backgroundColor);
topMenuEl.classList.add('flex-around');
menuLinks.forEach(element => {
    const a = document.createElement('a');
    a.setAttribute('href', element.href);
    a.textContent = element.text;
    topMenuEl.appendChild(a);
});