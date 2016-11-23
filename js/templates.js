export const getElementFromTemplate = (content) => {
  const node = document.createElement('span');
  node.innerHTML = content;
  return node.cloneNode(true);
};
