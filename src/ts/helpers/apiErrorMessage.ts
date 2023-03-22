export function displayErrorMessage(): void {
  const messageContainer: HTMLDivElement = document.createElement('div');
  const errorMessage: HTMLHeadingElement = document.createElement('h4');

  messageContainer.classList.add('error-message');

  errorMessage.innerHTML = 'Oops! Nånting gick fel vid hämtningen av programmen :( Försök igen!';
  messageContainer.appendChild(errorMessage);
  document.body.appendChild(messageContainer);
}
