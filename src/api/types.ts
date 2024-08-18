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
      "im:artist": {
        label: string // 开发者名
      },
      category: {
        attributes: {
          "im:id": string,
          term: string,
          scheme: string,
          label: string // 分类名
        }
      },
      id: {
        attributes: {
          "im:id": string
        }
      },
      summary: {
        label: string // 描述
      }
    }>
  }
}

// 应用查询响应数据
export type lookupAppsRes = {
  resultCount: number,
  results: Array<{
    trackId: number,
    averageUserRating: number, // 平均评分
    userRatingCount: number // 评论数
  }>
}