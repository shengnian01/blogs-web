import request from '@/utils/request'
import qs from 'qs'

export function adminaudit(param) {
  return request({
    url: '/user/getUser',
    method: 'GET',
		param
  })
}
