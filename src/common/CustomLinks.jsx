const customLink = (href) => {
  let link = `${process.env.ASSET_PREFIX}${href}`;
  if (process.env.ASSET_PREFIX != '') {
    link = `${process.env.ASSET_PREFIX}${href}.html`;
  }
  if (href == '/') {
    link = `${process.env.ASSET_PREFIX}`;
  }
  return link;
};

export default customLink;
