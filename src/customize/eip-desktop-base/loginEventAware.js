import {Logger} from 'eip-common-kernel'
let logger = new Logger(module.id)

function afterLogin (user, jwtToken) {
  logger.info('登录成功', user, jwtToken)
  document.title = '工作台Demo·' + user.userName
}

function beforeLogout (user) {
  logger.info('用户已退出', user)
  document.title = '工作台Demo'
}

export {afterLogin, beforeLogout}
