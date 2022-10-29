const countItemsByScreen = (percent: number, boxSize: number) => {
  const innerWidth = window.innerWidth > 1200 ? 1200 : window.innerWidth;
  if (typeof window === "undefined") return 0;
  return Math.floor((percent * innerWidth) / 100 / boxSize);
};

export default countItemsByScreen;
