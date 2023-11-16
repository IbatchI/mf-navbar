import AuthStore from 'login/AuthStore'

const accessToken = AuthStore.getToken()
const userInfo = AuthStore.getUserInfo()

export const Home = () => {
  return (
    <div>
      <h1>Home Navbar-MF</h1>
      <hr />
      <br />
      <h2>Datos del usuario</h2>
      {userInfo && (
        <article>
          <p>Nombre: {`${userInfo.name} ${userInfo.lastaName}`}</p>
          <p>Access Token: {accessToken}</p>
        </article>
      )}
    </div>
  )
}
