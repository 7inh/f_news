function toggleTheme() {
  const currentOpt = document.myTheme.theme.value;
  const currentTheme =
    currentOpt === 'random'
      ? getCurrentTheme()
      : currentOpt === 'light'
      ? 'dark'
      : 'light';

  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
}

function getCurrentTheme() {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark';
  } else {
    return 'light';
  }
}
