import { utilService } from "./utilService";
import { storageService } from "./storageService";
import axios from "axios";

async function createUser(username, email, password, avatar) {
  try {
    const URL = `https://yesno.wtf/api`;
    //? GET with axios
    const { data } = await axios.get(URL);
    const newUser = {
      id: utilService.generateId(),
      username,
      email,
      password,
      avatar: await data.image,
      isAdmin: false,
      createdAt: new Date(),
    };
    const allUsers = storageService.getUsers();
    storageService.saveUsers([...allUsers, newUser]);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// const removeUser = (userId) => {
//   const allUsers = storageService.getUsers();
//   const updatedUser = allUsers.filter((user) => user.id !== userId);
//   return updatedUser;
// };

const login = (username, password) => {
  //get all users
  const users = storageService.getUsers();
  //find a user
  const userExist = users.find(
    (user) => user.password === password && user.username === username
  );
  if (!userExist) return null;
  //user exist
  storageService.saveLoggedInUser(userExist);
  return userExist;
};

function logout() {
  storageService.clearAll();
}

async function fetchAvatar() {
  try {
    const URL = `https://yesno.wtf/api`;
    //? GET with axios
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const userService = {
  createUser,
  login,
  logout,
  fetchAvatar,
  // removeUser,
};

//? POST with axios:
// const fetchDataWithAxios = await axios.put(
//   `${URL}?username=shoshi&isAdmin=true`,
//   { data: "I Am a body" }
// );
// const { data } = fetchDataWithAxios;
