const toggleValue = (currentValue, checkValue, elseValue) => {
  if (currentValue === checkValue) return elseValue;

  return checkValue;
};

export default toggleValue;
