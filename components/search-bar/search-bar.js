function filterFunction() {
   const input = document.getElementById("search-input");
   const filter = input.value.toUpperCase();
   const div = document.getElementsByClassName("myDropdown");
   const a = document.querySelectorAll(".drop-down a");

   for (let i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
         a[i].style.display = "";
      } else {
         a[i].style.display = "none";
      }
   }
}
