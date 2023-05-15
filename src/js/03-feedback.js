// Импортируем функцию throttle из библиотеки lodash
import _throttle from 'lodash.throttle';

// Создаем объект, содержащий ссылки на элементы формы
const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input[name="email"]'),
  textAreaEl: document.querySelector('textarea[name="message"]'),
};

// refs.inputEl.setAttribute('required', '');

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
  // feedbackData[evt.target.name] = evt.target.value;
  // console.log(feedbackData);
  const { name, value } = evt.target;
  if (feedbackData[name] !== value) {
    feedbackData[name] = value;
    console.log(feedbackData);
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackData));
}

// Функция, которая заполняет поля формы данными из локального хранилища
function populateFormFieldsFromStorage() {
  const persistedData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsePersistedData = JSON.parse(persistedData);

  if (!persistedData) return;
  refs.inputEl.value = parsePersistedData.email || '';
  refs.textAreaEl.value = parsePersistedData.message || '';
}

// Функция, которая обрабатывает отправку формы
function submitFormHandler(evt) {
  evt.preventDefault(); // сбрасываем поведение по умолчанию
  // console.log(feedbackData); // выводим в консоль объект с данными формы
  // feedbackData = {}; // очищаем объект
  const formDataObj = {};
  const formData = new FormData(refs.formEl);

  const email1 = evt
  console.log(email1);

  formData.forEach((value, key) => {
    console.log(key, value);
    formDataObj[key] = value;
  });

  console.log('Дані з форми:', formDataObj);
  refs.formEl.reset(); // очищаем поля формы
  localStorage.removeItem(LOCALSTORAGE_KEY); // удаляем данные из локального хранилища
}
