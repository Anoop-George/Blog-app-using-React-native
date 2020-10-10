
const userloggedin = (token) => ({
  type: "USERLOGIN",
  payload:token
});

const userlogout = () => ({
  type: "USERLOGOUT"
});

export default {userloggedin,userlogout};
