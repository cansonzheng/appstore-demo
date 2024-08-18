import type { getAppsRes } from '@/api/types'


// 应用模型
export class AppItemModel {
  constructor(entry?: getAppsRes['feed']['entry'][number]) {
    if (entry) {
      this.name = entry['im:name'].label
      this.icon = entry['im:image'][0].label.replace(/\d+x\d+/, '100x100')
      this.category = entry.category.attributes.label
    }
  }
  name: string = ''
  icon: string = ''
  category: string = ''
}