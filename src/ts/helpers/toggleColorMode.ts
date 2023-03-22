export function getColorModeBtn(): void {
  const toggleColorModeButton: HTMLButtonElement = document.querySelector('.colorMode-btn') as HTMLButtonElement;
  toggleColorModeButton.addEventListener('click', () => {
    toggleColorMode(toggleColorModeButton);
  });
}

export function toggleColorMode(button: HTMLButtonElement): void {
  document.body.classList.toggle('darkmode');

  if (document.body.classList.contains('darkmode')) {
    button.innerHTML = 'Välj ljust läge';
  } else {
    button.innerHTML = 'Välj mörkt läge';
  }
}
