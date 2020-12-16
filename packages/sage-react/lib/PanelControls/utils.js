export const listCurrentRange = (page, itemsShown, itemsTotal) => {
  const start = ((page - 1) * itemsShown) + 1;
  const maxEnd = start + (itemsShown - 1);
  const end = maxEnd > itemsTotal ? itemsTotal : maxEnd;

  return {
    start,
    end,
  };
};

export const listCurrentRangeString = (page, itemsShown, itemsTotal) => {
  const { start, end } = listCurrentRange(page, itemsShown, itemsTotal);
  return `${start}–${end}`;
};

export const listDisplayString = (page, itemsShown, itemsTotal, noun = { plural: 'items' }) => {
  let displayStr = `Displaying ${listCurrentRangeString(page, itemsShown, itemsTotal)} of ${itemsTotal}`;

  if (noun && noun.plural) {
    displayStr += ` ${noun.plural}`;
  }

  return displayStr;
};
