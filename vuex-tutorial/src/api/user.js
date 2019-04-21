import axios from 'axios'
export default {
  async addUser(name,username,email) {
    const url = "http://jsonplaceholder.typicode.com/users";
    const data = await axios({
      method:"post",
      url,
      data:{
        name,username,email
      }
    })
    console.log(data.data)
  }
};
