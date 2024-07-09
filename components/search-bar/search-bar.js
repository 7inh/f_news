function filterFunction() {
  const input = document.getElementById('search-input');
  const filter = input.value.toUpperCase();
  const div = document.getElementsByClassName('search-result');
  const items = document.querySelectorAll('.result-item');
  const a = document.querySelectorAll('.result-item span');

  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }

  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = '';
      items[i].style.display = '';
    } else {
      a[i].style.display = 'none';
      items[i].style.display = 'none';
    }
  }
}
