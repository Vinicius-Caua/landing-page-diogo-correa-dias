const openLink = (url: string) => {
  return () => {
    window.open(url, "_blank");
  };
};

export default openLink;
