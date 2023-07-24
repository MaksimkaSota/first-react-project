export const requiredField = (value) => {
  return value ? undefined : 'Field is required';
};

export const maxLengthCreator = (maxLength) => (value) => {
  return (value.length && value.length > maxLength) ? `Max length is ${maxLength}` : undefined;
};
