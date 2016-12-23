import Application from './application';
import 'whatwg-fetch';

const statusHTTP = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

const url = 'https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions';

Application.showIntro();

window.fetch(url)
    .then(statusHTTP)
    .then((response) => response.json())
    .then((data) => {
      Application.data = data;
    })
    .then(Application.showGreating)
    .catch(Application.showError);
