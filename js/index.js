// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
const mainEl = document.querySelector('main');
const topMenuEl = document.getElementById('top-menu');
const subMenuEl = document.getElementById('sub-menu');
const topMenuLinks = [];
const h1 = document.createElement('h1');
mainEl.style.backgroundColor='var(--main-bg)';
h1.textContent = 'DOM Manipulation';
mainEl.classList.add('flex-ctr');
mainEl.appendChild(h1)
topMenuEl.style.height='100%';
topMenuEl.style.background='var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
topMenuEl.addEventListener('click', topMenuClick);
subMenuEl.style.height='100%'
subMenuEl.style.background='var(--sub-menu-bg)';
subMenuEl.style.position='absolute';
subMenuEl.style.top='0';
subMenuEl.classList.add('flex-around');
subMenuEl.addEventListener('click', subMenuClick);
menuLinks.forEach(element => {
    const a = document.createElement('a');
    a.setAttribute('href', element.href);
    a.textContent = element.text;
    topMenuEl.appendChild(a);
    topMenuLinks.push(a);
});

function topMenuClick(event){
  event.preventDefault();
  if(event.target.nodeName !== 'A'){ return; };
  console.log(event.target);
  topMenuLinks.forEach(element => {
    element === event.target ? event.target.classList.toggle('active') : element.classList.remove('active');
  });
    if(event.target.classList.contains('active')){
      menuLinks.forEach(object => {
        if(object.text === event.target.textContent) {
          if(object.subLinks !== undefined){
            subMenuEl.style.top='100%';
            buildSubmenu(object.subLinks);
          } else {
            subMenuEl.style.top='0';
            mainEl.lastElementChild.textContent = event.target.textContent;
          }
        }
      });
    } else subMenuEl.style.top=0;
}

function subMenuClick(event){
  event.preventDefault();
  if(event.target.nodeName !== 'A'){ return; };
  console.log(event.target);
  subMenuEl.style.top='0';
  topMenuLinks.forEach(element => element.classList.remove('active'));
  mainEl.lastElementChild.textContent = event.target.textContent;
}

function buildSubmenu(linkArray){
  while(subMenuEl.lastElementChild !== null){
    subMenuEl.lastElementChild.remove();
  }
  linkArray.forEach(element => {
    const a = document.createElement('a');
    a.setAttribute('href', element.href);
    a.textContent = element.text;
    subMenuEl.appendChild(a);
  });
}