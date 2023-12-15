const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    const res = await fetch('https://icanhazdadjoke.com/', config);
    if (res.ok) {
      const data = await res.json();
      jokeEl.innerHTML = data.joke;
    } else {
      console.error('Error al obtener un chiste');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }
}




//   HINTS
// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   >>fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
