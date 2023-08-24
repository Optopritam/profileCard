const nameToEmail = (name) => {
  console.log("name", name);
  return `${
    name
      .toLowerCase()
      .split(" ")
      .join(".")
    }@trybe.com`;
};

export default nameToEmail;