export default function handler(req, res) {
  function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
      setTimeout(() => element.innerHTML += letter, 75 * i);
    });
  }

typeWriter(document.querySelector('h1'));
typeWriter(document.querySelector('h2'));
typeWriter(document.querySelector('p'));
}
