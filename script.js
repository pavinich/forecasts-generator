/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastBtn = document.querySelector('.forecast-btn');
//const forecastContainer = document.querySelector('.container');
const currentForecast = document.querySelector('.current-forecast');
const currentText = currentForecast.querySelector('h1');
const currentPercent = currentForecast.querySelector('p');

const forecastList = document.querySelector('.forecasts');
const template = document.querySelector('#forecast-item');

function makeNewTemplate(text, percent) {
    const templateItem = template.content.cloneNode(true);
    templateItem.querySelector('h3').textContent = text;
    templateItem.querySelector('p').textContent = percent;

    return templateItem;
}

function getRandomInt(min, max) {
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    return randNum;
}

forecastBtn.addEventListener('click', function() {
    const forecastNumber = getRandomInt(1, 6);
    let forecastText = "";

    if (forecastNumber == 1) {
        forecastText = "Твой выбор уже сделан.Тебе остается его осознать.";
    } else if (forecastNumber == 2) {
        forecastText = "Пора собирать чемоданы: Вас ждет путешествие в приятной компании.";
    } else if (forecastNumber == 3) {
        forecastText = "Все загаданные желания и намеченные планы осуществятся.";
    } else if (forecastNumber == 4) {
        forecastText = "Не огорчайтесь, если дела идут не так, как Вам бы этого хотелось, удача уже на пороге.";
    } else {
        forecastText = "Пришло время заявить о себе, даже если это кому-то не понравится.";
    }

    const probability = getRandomInt(0, 101);

    currentText.textContent = forecastText;
    currentPercent.textContent = `${probability}% `;

    const newTemplate = makeNewTemplate(forecastText, probability);
    forecastList.prepend(newTemplate);
});












