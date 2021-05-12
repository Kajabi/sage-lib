export const getCentered = (isCentered) => (
  isCentered ? {
    cx: "50%",
    cy: "50%",
  } : {}
);

export const getDataEntries = (data, entriesLimit) => {
  if (entriesLimit && data.length > entriesLimit) {
    const topEntries = data.slice(0, entriesLimit);
    const remainingValue = data.slice(entriesLimit).reduce((acc, curr) => acc + curr.value, 0);
    return [...topEntries, { name: 'Other', value: remainingValue }];
  }

  return [...data];
};

export const getDonutRadiuses = (size, stroke) => ({
  innerRadius: (size - stroke) / 2,
  outerRadius: size / 2,
});

export const getDonutStartPosition = (position) => {
  let startAngle,
    endAngle = -360;
  switch(position) {
    case 'right':
      startAngle = 0;
    break;
    case 'bottom':
      startAngle = 270;
    break;
    case 'left':
      startAngle = 180;
    break;
    case 'top':
    default:
      startAngle = 90;
    break;
  }

  return { startAngle, endAngle };
};

export const getTotal = (data) => {
  return data.reduce((acc, curr) => acc + curr.value, 0);
};
