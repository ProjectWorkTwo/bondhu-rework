const hidePopUp = (e, boxRef, setStatus, stopPropagation = false, setData) => {
  stopPropagation && e.stopPropagation();
  if (!boxRef?.current?.contains(e.target)) {
    if (setData) {
      return setStatus((prev) => setData);
    }
    return setStatus((prev) => false);
  }
};

export default hidePopUp;
