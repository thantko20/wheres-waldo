// Return the coordinate relative to the event target
export const useRelativeCoordinateOnClickEvent = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();

  const x = event.pageX - rect.left;
  const y = event.pageY - window.scrollY - rect.top;

  const offsetX = parseFloat(x / rect.width).toFixed(4);
  const offsetY = parseFloat(y / rect.height).toFixed(4);

  return [offsetX, offsetY];
};
