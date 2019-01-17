import {Logger} from 'eip-common-kernel'
let logger = new Logger(module.id)

function refreshJwtToken (user, currentToken) {
  let promise = new Promise((resolve, reject) => {
    logger.debug('refreshJwtToken', user, currentToken)
    // axios.get('/internal-auth/refreshToken').then((resp) => {
    //   console.log('正常情况下应该调用一个远程接口，从服务器获得最新的 jwtToken')
    //   resolve(resp.data)
    // }).catch(error => {
    //   reject(error)
    // })
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    resolve(token)
  })
  return promise
}

let REFRESH_INTERVAL = 30 // 每800秒更新一次

export { REFRESH_INTERVAL }
export default refreshJwtToken
