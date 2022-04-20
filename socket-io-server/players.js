const c_users = [];



function join_User(id, username) {
  

  if (c_users.length == 0){
    var p_user = { id, username, role:1}
    c_users.push(p_user);
    console.log(c_users, "users");
    return p_user;
  } else {
    var p_user = { id, username, role:0}
    c_users.push(p_user);
    console.log(c_users, "users");
    return p_user;
  }

  
}

console.log("user out", c_users);

function start(){
  if (c_users.length === 1){
    return 1;
  }
}

function get_Current_User(id) {
  return c_users.find((p_user) => p_user.id === id);
}

function get_Name(id) {
 const user = c_users.find((p_user) => p_user.id === id);
 return user.username
}



function getRole(id){
  const user = c_users.find((p_user) => p_user.id === id);
  return user.role
}

function shuffleHost(){
  var i = 0;
  if (c_users.length > 1){
    while (i <= c_users.length){
      if (c_users[i].role === 1){
        c_users[i].role = 0;
        if ((i+1)>= c_users.length){
          c_users[0].role = 1
          return {off: c_users[i].id, on:c_users[0].id}
        } else {
          c_users[i+1].role = 1
          return {off: c_users[i].id, on:c_users[i+1].id}
        }
      }
      i++
    }
  } 

}


function user_Disconnect(id) {
  const index = c_users.findIndex((p_user) => p_user.id === id);

  if (index !== -1) {
    return c_users.splice(index, 1)[0];
  }
}

module.exports = {
  join_User,
  get_Current_User,
  user_Disconnect,
  getRole,
  shuffleHost,
  get_Name,
  start
};