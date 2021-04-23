import request from '@/utils/request'
import qs from 'qs'

export function adminaudit(param) {
  return request({
    url: '/api/user/getUser',
    method: 'GET',
		param
  })
}
