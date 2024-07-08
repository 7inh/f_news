document.getElementById("btn-subs").addEventListener("click", function(){
    const email = document.getElementById("email");
    const button = document.getElementById("btn-subs");
    if ( email.value === null || email.value === '' ){
        alert("Error !!! Please enter your email");
    }
    else{
        email.style.display = "none";
        email.value = "";
        button.style.flexGrow = "1";
        button.innerHTML = "Đã đăng ký";
        button.style.transition ="all 0.7s ease";
        alert("Thanks for subscribing!"); 
    }
});




