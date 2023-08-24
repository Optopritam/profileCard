const nameToEmail = (name) => {
  if (!name) {
    return "";
  }
  return `${
    name
      .toLowerCase()
      .split(" ")
      .join(".")
    }@cat.com`;
};

export default nameToEmail;