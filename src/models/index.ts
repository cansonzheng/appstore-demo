import type { getRecommendAppsRes } from '@/api/types'


// 应用模型
export class AppItemModel {
  constructor(entry?: getRecommendAppsRes['feed']['entry'][number]) {
    if (entry) {
      this.name = entry['im:name'].label
      this.icon = entry['im:image'][0].label
      this.category = entry.category.attributes.label
    }
  }
  name: string = ''
  icon: string = ''
  category: string = ''
}