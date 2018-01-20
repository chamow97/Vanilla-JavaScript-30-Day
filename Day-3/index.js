const inputs = document.querySelectorAll('.controls input');
function updateValues(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener('change', updateValues));
inputs.forEach(input => input.addEventListener('mousemove', updateValues));
