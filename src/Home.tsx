import AuthStore from 'login/AuthStore'

const accessToken = AuthStore.getToken()
const userInfo = AuthStore.getUserInfo()

export const Home = () => {
  return (
    <div>
      <span>{accessToken}</span>
      <br />
      <span>{userInfo && userInfo.name}</span>
    </div>
  )
}
