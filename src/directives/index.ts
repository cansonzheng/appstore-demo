import type { App } from 'vue'
import intersect from './intersect'

/**
 * 自定义指令注册
 * @param app 
 */
export function setupDirectives(app: App) {
  // 交叉观察者
  app.directive('intersect', intersect)
}