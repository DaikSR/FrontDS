export function useValidateSession() {

  const token = localStorage.getItem("token");
  if (token) {
    return true
  }else{
    return false
  }

} 

export function useValidateUser() {
  const token = localStorage.getItem("token");

  
  if (token) {
    return true
  }else{
    return false
  }

}