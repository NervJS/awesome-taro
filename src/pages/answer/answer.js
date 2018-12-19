import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './answer.less'


import img2 from '../../asset/images/good-bad.png'
import img3 from '../../asset/images/flag.png'
import img4 from '../../asset/images/heart2.png'
import img5 from '../../asset/images/star2.png'
import img6 from '../../asset/images/comment.png'
import img7 from '../../asset/images/icon1.jpeg'


export default class Answer extends Component {
    config = {
        navigationBarTitleText: '答案'
    }
    constructor() {
        super(...arguments)
    }

    navigateTo(url) {
        Taro.navigateTo({ url: url })
    }
    render() {
        return (
          <View className='answer_container'>
            <View className='question' onClick={this.navigateTo.bind(this,'/pages/question/question')}>
                <Text className='question-title'>选择 Kindle 而不是纸质书的原因是什么？</Text>
            </View>
            <View className='answerer-wrp'>
              <View className='bg-half'></View>
              <View className='answerer flex-wrp'>
                <View className='avatar flex-item'>
                  <Image src={img7}></Image>
                </View>
                <View className='answerer-info flex-item'>
                  <Text className='answerer-name'>Rebecca</Text>
                  <Text className='answerer-des'>WEB前端*不靠谱天气预报员*想做代码小仙女</Text>
                </View>
                <View className='follow flex-item'>
                  <Text>十 关注</Text>
                </View>
              </View>
            </View>
            <View className='answer-content'>
              <Text>难道不明白纸质书更贵啊！！！
                若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
                另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）
                而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！
                碎片时间阅读总不能天天背着一本书吧，那么占地方。
                看到描述最后一段，感觉有骗答案的嫌疑
              </Text>
            </View>
            <View className='answer-footer flex-wrp'>
              <View className='good flex-item'>
                  <View className='good-bad'>
                      <Image src={img2}></Image>
                  </View>
                  <View className='good-num'>2.1k</View>
              </View>
              <View className='operation-wrp flex-item'>
                <View className='operation flex-wrp flex-tab'>
                  <View className='operation-btn flex-item'>
                    <Image src={img3}></Image>
                    <Text>没有帮助</Text>
                  </View>
                  <View className='operation-btn flex-item'>
                    <Image src={img4}></Image>
                    <Text>感谢</Text>
                  </View>
                  <View className='operation-btn flex-item'>
                    <Image src={img5}></Image>
                    <Text>收藏</Text>
                  </View>
                  <View className='operation-btn flex-item'>
                    <Image src={img6}></Image>
                    <Text>302</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )
    }
}

