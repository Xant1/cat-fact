const fact = document.querySelector('.fact');

async function getFact() {
  const response = await fetch('https://catfact.ninja/fact');
  const data = await response.json();

  fact.innerText = data['fact'];
}

