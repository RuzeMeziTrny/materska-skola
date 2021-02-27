'use strict';

/* ----- show or hide password value ----- */

const passwordElm = document.querySelector('#password-input');
const passwordVisibleElm = document.querySelector('#password-visible');

const showHidePasswordValue = () => {
  if (passwordElm.type === 'password') {
    passwordElm.type = 'text';
    passwordVisibleElm.src = '/images/eye-closed.svg';
  } else {
    passwordElm.type = 'password';
    passwordVisibleElm.src = '/images/eye-open.svg';
  }
};

passwordVisibleElm.addEventListener('click', showHidePasswordValue);

/* ----- show locked photogallery ------ */

const passwordFormElm = document.querySelector('#password-form');

const showLockedContent = (event) => {
  event.preventDefault();

  const pathname = location.pathname;
  const pathnameSlice = pathname.slice(7, pathname.length - 1);

  /* jen pro ilustraci, není to zabezpečené, kdokoliv se k tomu dostane z devtools */
  switch (true) {
    case pathnameSlice === 'broucci' && passwordElm.value === 'lucerna':
    case pathnameSlice === 'cvrcek' && passwordElm.value === 'housle':
    case pathnameSlice === 'krtecek' && passwordElm.value === 'kalhotky':
    case pathnameSlice === 'makova-panenka' && passwordElm.value === 'sukynka':
    case pathnameSlice === 'rakosnicek' && passwordElm.value === 'rybnik':
      location.assign(`${location.pathname}foto`);
      break;
    default:
      alert('Nezadali jste správné heslo, zkuste to prosím znovu.');
  }
};

passwordFormElm.addEventListener('submit', showLockedContent);
