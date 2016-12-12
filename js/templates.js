export const getElementFromTemplate = (content, attrClass = null) => {
  const node = document.createElement('div');
  node.innerHTML = content;
  if (attrClass !== null) {
    node.setAttribute('class', attrClass);
  }
  return node.cloneNode(true);
};

export const renderTemplate = (template, element = document.getElementById('main')) => {
  element.innerHTML = '';
  element.appendChild(template);
};
