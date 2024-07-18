const jokecontainer=document.getElementById("joke");
const btn=document.getElementById("btn");

async function fetchJoke() {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=twopart');
      const data = await response.json();
      if (!data.error) {
        jokecontainer.textContent = data.setup + data.delivery;
      } else {
        jokecontainer.textContent = 'Oops! Something went wrong. Please try again.';
      }
    } catch (error) {
        console.log('Oops! Something went wrong. Please try again.');
        jokecontainer.textContent = 'Oops! Something went wrong. Please try again.';
    }
  }

  btn.addEventListener("click",fetchJoke);

  //const jokes=async ()=>{
    //     let response=await fetch(https://v2.jokeapi.dev/joke/Any?type=twopart);
    //     console.log(response);
    //     let data=await response.json();
    //     console.log(data);
    // }
    // jokes();