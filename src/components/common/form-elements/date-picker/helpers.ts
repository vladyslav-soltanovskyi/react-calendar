export const getTextWidthFromInput = (value: string, inputElem: HTMLInputElement) => {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  
  const { padding, fontSize } = getComputedStyle(inputElem);
  ctx.font = `${fontSize} Arial`;

  const paddingSize = +padding.replace(/[0-9]+(px)?\s/g, '').replace('px', '');
  const paddingWidth = paddingSize * 2;
  
  const textWidth = ctx.measureText(value).width + paddingWidth * 2;
  return textWidth;
}
