function toggleTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  console.log('toggle theme', theme);
  const newTheme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
