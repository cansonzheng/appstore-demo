import type { getRecommendAppsRes } from './types'

export default {
  // 获取推荐应用
  getRecommendApps(limit: number = 10): Promise<getRecommendAppsRes> {
    return fetch(`https://itunes.apple.com/hk/rss/topgrossingapplications/limit=${limit}/json`).then(res => res.json())
  }
}