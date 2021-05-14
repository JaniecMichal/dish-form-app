export const sendDish = (dishToSend) => {
  fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dishToSend),
  })
    .then((response) => response.json())
    .then((responseMessage) => handleServerResponse(responseMessage))
    .catch((error) => console.error('Something bad happened!', error));
};

const handleServerResponse = (response) => {
  alert(`This is server response: ${JSON.stringify(response)}`);
};
