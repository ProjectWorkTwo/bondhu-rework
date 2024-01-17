const hidePopUp = (e, boxRef, setStatus) => {
  e.stopPropagation();
  if (!boxRef?.current?.contains(e.target)) return setStatus((prev) => false);
};
export default hidePopUp;
