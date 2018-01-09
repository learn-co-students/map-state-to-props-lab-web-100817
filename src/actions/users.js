export const addUser = user => {
  console.log(user);
  return {
    type: "ADD_USER",
    user
  };
};
