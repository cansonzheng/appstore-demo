import type { getAppsRes } from '@/api/types'


// 应用模型
export class AppItemModel {
  constructor(entry?: getAppsRes['feed']['entry'][number]) {
    if (entry) {
      this.id = entry.id.attributes['im:id']
      this.name = entry['im:name'].label
      this.icon = entry['im:image'][0].label
      this.category = entry.category.attributes.label
      this.artist = entry['im:artist'].label
      this.summary = entry.summary.label
    }
  }
  id: string = ''
  name: string = '' // 应用名
  icon: string = '' // 应用图标
  category: string = '' // 分类名
  rating: number = 0 // 评分
  ratingCount: number = 0 // 评价数
  artist: string = '' // 开发者
  summary: string = '' // 描述

  // 自定义图标大小
  customIconSize(size: number) {
    return this.icon.replace(/\d+x\d+/, `${size}x${size}`)
  }
}