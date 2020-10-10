
  
  const userstate = (state={token:null}, action) => {
    switch (action.type) {
      case "USERLOGIN": {
        return {token:action.payload};
      }
      case "USERLOGOUT": {
        return {token:null};
      }
      
      default:
        return state;
    }
  };
  
  export default userstate;
  