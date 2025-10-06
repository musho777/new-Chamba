export const withAnchorPoint = (
  transform,
  anchorPoint,
  size
) => {
  'worklet';
  const translateX = size.width * (anchorPoint.x - 0.5);
  const translateY = size.height * (anchorPoint.y - 0.5);
  
  return {
    transform: [
      { translateX },
      { translateY },
      ...transform.transform,
      { translateX: -translateX },
      { translateY: -translateY },
    ],
  };
};