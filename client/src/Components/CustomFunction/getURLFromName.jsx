export const getURLFromName = (prefix, name) => {
  return `${location.origin}/${prefix}/${name
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")}`;
};
