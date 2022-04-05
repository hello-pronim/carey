// Pixel to rem converter for inline styles, works on an array of numbers, as well as individual.

const rem = (value: string) => {
  const toNumber = parseInt(value.replace("px", ""));
  return toNumber / 16 + "rem";
};

export default rem;
