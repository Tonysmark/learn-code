import axios from "axios";
export default {
  async addUser(name, email) {
    let url = "http://jsonplaceholder.typicode.com/users";
    const data =await axios({
      method: "post",
      url,
      data: {
        name,
        email
      }
    });
    console.log(data.data)
  }
};
