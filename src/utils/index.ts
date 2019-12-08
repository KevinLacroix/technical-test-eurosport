export const formatWeight = (weight: number) => {
  return weight / 1000;
};

export const formatHeight = (height: number) => {
  return (height / 100).toString().replace('.', ',');
};
