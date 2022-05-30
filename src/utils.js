export const calculatePos = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();

  const top = event.pageX - rect.left;
  const left = event.pageY - window.scrollY - rect.top;

  return [top, left];
};

// Return the coordinate relative to the event target
export const calculateRelativeCoordinateOnClickEvent = (event) => {
  const [x, y] = calculatePos(event);
  const rect = event.currentTarget.getBoundingClientRect();

  const offsetX = parseFloat(x / rect.width).toFixed(4);
  const offsetY = parseFloat(y / rect.height).toFixed(4);

  return [offsetX, offsetY];
};

// Calculate if the hit is within the hitbox or not
export const isInTheHitBox = (hitBox, coordinate) => {
  const { horizontalHitBox, verticalHitBox } = hitBox;
  const [x, y] = coordinate;

  if (
    x >= horizontalHitBox[0] &&
    x <= horizontalHitBox[1] &&
    y >= verticalHitBox[0] &&
    y <= verticalHitBox[1]
  ) {
    return true;
  }

  return false;
};
