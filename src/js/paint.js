export default function paint() {
  for (let i = 0; i < 16; i += 1) {
    const field = document.querySelector('.field');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'square');
    field.append(newDiv);
  }
}
