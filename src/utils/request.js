import Taro from '@tarojs/taro'

export default function request(opt) {
  return Taro.request(opt).then((res) => {
    let {statusCode, data} = res;
    if (statusCode >= 200 && statusCode < 300) {
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}
