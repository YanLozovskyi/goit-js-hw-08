// Импортируем функцию throttle из библиотеки lodash
import _throttle from 'lodash.throttle';

// Создаем объект, содержащий ссылки на элементы формы
const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input[name="email"]'),
  textAreaEl: document.querySelector('textarea[name="message"]'),
};

// устанавливаем ключ для локального хранилища
const LOCALSTORAGE_KEY = 'feedback-form-state';

// Заполняем поля формы данными из локального хранилища (если они имеются)
populateFormFieldsFromStorage();

// Добавляем слушателей событий на форму
refs.formEl.addEventListener('input', _throttle(updateFormData, 500));
refs.formEl.addEventListener('submit', submitFormHandler);

// Объявляем переменную, в которую будут сохраняться данные формы
let feedbackData = {};

// Функция, которая обновляет данные формы и сохраняет их в локальное хранилище
function updateFormData(evt) {
  feedbackData.email = refs.inputEl.value;
  feedbackData.message = refs.textAreaEl.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackData));
}

// Функция, которая заполняет поля формы данными из локального хранилища
function populateFormFieldsFromStorage() {
  const persistedData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsePersistedData = JSON.parse(persistedData);

  if (!persistedData) return;
  refs.inputEl.value = parsePersistedData.email;
  refs.textAreaEl.value = parsePersistedData.message;
}

// Функция, которая обрабатывает отправку формы
function submitFormHandler(evt) {
  evt.preventDefault(); // сбрасываем поведение по умолчанию
  console.log(feedbackData); // выводим в консоль объект с данными формы
  refs.formEl.reset(); // очищаем поля формы
  localStorage.removeItem(LOCALSTORAGE_KEY); // удаляем данные из локального хранилища
}

