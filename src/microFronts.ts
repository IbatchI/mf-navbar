declare module 'login/Login'

declare module 'login/AuthStore' {
  interface UserInfo {
    id: number
    name: string
    lastaName: string
    userName: string
  }

  const AuthStore: {
    getToken: () => string
    setToken: (token: string) => void
    getUserInfo: () => UserInfo | null
    setUserInfo: (user: UserInfo) => void
  }

  export default AuthStore
}
