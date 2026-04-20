import { STORAGE_KEYS } from './constants';
import { refs } from './refs';

export function onNameInput(event) {
  // console.log(event.target.value.trim());
  const userName = event.target.value.trim();
  refs.wellcomeText.textContent = `Привіт, ${userName}!`;
  localStorage.setItem(STORAGE_KEYS.USER_NAME, JSON.stringify(userName)); //setItem(ключ, значення)
  // console.log(String{});
  if (userName === '') {
    refs.wellcomeText.textContent = `Привіт, гість!`;
  }
}
export function initWellcomeTaskPage(event) {
  try {
    const storageUserName = JSON.parse(
      localStorage.getItem(STORAGE_KEYS.USER_NAME)
    );
    refs.wellcomeText.textContent = storageUserName
      ? `Привіт, ${storageUserName}`
      : `Привіт, гість!`;

    refs.nameInput.value = storageUserName;
  } catch (error) {
    console.log(error);
  }
}
