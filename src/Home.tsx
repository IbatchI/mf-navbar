import AuthStore from 'login/AuthStore'

const accessToken = AuthStore.getToken()
const userInfo = AuthStore.getUserInfo()

export const Home = () => {
  return (
    <div>
      <h1>Soy el home</h1>
      <span>{accessToken}</span>
      <br />
      <span>{userInfo && userInfo.name}</span>
    </div>
  )
}
