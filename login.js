let userId = 0
export function login(email, password){
  return{
    type: 'SET_LOGIN',
    email,
    password,
    userId: userId++
  }

}
export function signUp(email, password){
  return{
    type: 'SIGN_UP',
    email,
    password,
    userId: userId++
  }

}