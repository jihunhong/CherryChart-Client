export const likerPropsAreEqual = (prevProps, nextProps) => {
  const prev = prevProps.liker;
  const next = nextProps.liker;

  if (prev.length !== next.length) {
    return false;
  }

  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== next[i]) {
      return false;
    }
  }
  return true;
};
