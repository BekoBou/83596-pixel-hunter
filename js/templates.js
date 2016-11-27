export const getElementFromTemplate = (content) => {
  const node = document.createElement('span');
  node.innerHTML = content;
  return node.cloneNode(true);
};

export const renderTemplate = (template, element = document.getElementById('main')) => {
  element.innerHTML = '';
  element.appendChild(template);
};
