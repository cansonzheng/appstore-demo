import type { getAppsRes } from './types'

export default {
  // 获取推荐应用
  getGrossingApps(limit: number = 10): Promise<getAppsRes> {
    return fetch(`https://itunes.apple.com/hk/rss/topgrossingapplications/limit=${limit}/json`).then(res => res.json())
  },
  // 获取免费应用列表
  getFreeApps(limit: number = 100): Promise<getAppsRes> {
    return fetch(`https://itunes.apple.com/hk/rss/topfreeapplications/limit=${limit}/json`).then(res => res.json())
  },
}