import hfRequest from '@/service'

export function getPageListData(url: string, queryInfo: any) {
  return hfRequest.post({
    url: url,
    data: queryInfo
  })
}
