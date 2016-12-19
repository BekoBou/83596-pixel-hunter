const mainContainer = document.getElementById('main');

export const getElementFromTemplate = (content, attrClass = null) => {
  const node = document.createElement('div');
  node.innerHTML = content;
  if (attrClass !== null) {
    node.setAttribute('class', attrClass);
  }
  return node.cloneNode(true);
};

export const renderTemplate = (template, element = mainContainer) => {
  element.innerHTML = '';
  element.appendChild(template);
};
