document.getElementById("btn-subs").addEventListener("click", function(){
    const email = document.getElementById("email");
    const button = document.getElementById("btn-subs");
    if ( email.value === null || email.value === '' ){
        email.classList.add("shake");
        alert("Error !!! Please enter your email");
        return;
    }
    else{
        email.style.display = "none";
        button.style.flexGrow = "1";
        alert("Thanks for subscribing!");
        return;
    }
});

const modeToggleBtn = document.getElementById('theme-toggle');
const button = document.getElementById('btn-subs');
let mode = 'light';

modeToggleBtn.addEventListener('click', () => {
  switch (mode) {
    case 'light':
      // Switch to dark mode
      button.style.background = 'black';
      button.style.color = 'white';
      mode = 'dark';
      break;
    case 'dark':
      // Switch to light mode
      button.style.background = 'var(--primary-color)';
      button.style.color = 'var(--color)';
      mode = 'light';
      break;
  }
});

