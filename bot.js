const fetch = require('node-fetch');

const BOT_TOKEN = '6903658767:AAEtq4YMoi4PglTtytmqWZ0NZ8dHgUcPH9U';
const CHAT_ID = '5329024653';

function sendMessage(message) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const data = {
    chat_id: CHAT_ID,
    text: message,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => console.log('Сообщение отправлено:', result))
    .catch(error => console.error('Ошибка отправки сообщения:', error));
}

// Пример использования:
sendMessage('Привет, это ваш бот!');

// Вы можете вызывать функцию sendMessage с любым текстом сообщения, который вы хотите отправить.
