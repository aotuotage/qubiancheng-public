//角色认证
function role(code){
  if(code != 'qubianchengadmin' ){
    return false
  }
}

module.exports = role;