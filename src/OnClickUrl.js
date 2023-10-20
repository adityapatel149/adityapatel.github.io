const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

const onClickUrl = (url) => {
  return () => openInNewTab(url);
};

export default onClickUrl;
