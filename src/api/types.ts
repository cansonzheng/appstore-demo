// 应用响应数据
export type getAppsRes = {
  feed: {
    entry: Array<{
      "im:name": {
        label: string // 应用名
      },
      "im:image": [
        {
          label: string,
          attributes: {
            height: string
          }
        },
      ],
      category: {
        attributes: {
          "im:id": string,
          term: string,
          scheme: string,
          label: string // 分类名
        }
      },
    }>
  }
}