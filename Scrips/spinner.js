const spinner = document.getElementById("spinner");

function loadData() {
  spinner.removeAttribute('hidden');
  fetch('https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=1500ms')
    .then(response => response.json())
    .then(data => {
      spinner.setAttribute('hidden', '');
      console.log(data)
    });
}