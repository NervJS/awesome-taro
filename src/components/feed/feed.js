import Taro, { Component } from '@tarojs/taro'
import { View,Image,Text } from '@tarojs/components'
import more from '../../asset/images/more.png'

import './feed.scss'

export default class Feed extends Component {
  navigateTo(url) {
    Taro.navigateTo({url:url})
  }
  render() {
    return (
      <View className='feed-item'>
        <View className='feed-source'>
          <View className='avatar flex1'>
              <Image className='avatar_img' src={this.props.feedSourceImg}></Image>
          </View>
          <View className='flex8'>
            <Text className='feed-source-txt'>{this.props.feedSourceName}{this.props.feedSourceTxt}</Text>
          </View>
          <View className='flex1'>
            <Image className='item-more' mode='aspectFit' src={more}></Image>
          </View>
        </View>
        <View className='feed-content'>
            <View className='question' onClick={this.navigateTo.bind(this,'/pages/question/question')}>
                <View className='question-link'>
                    <Text>{this.props.question}</Text>
                </View>
            </View>
            <View className='answer-body'>
                <View>
                    <Text className='answer-txt' onClick={this.navigateTo.bind(this,'/pages/answer/answer')} >{this.props.answerCtnt}</Text>
                </View>
                <View className='answer-actions'>
                    <View className='like dot'>
                        <View>{this.props.goodNum} 赞同 </View>
                    </View>
                    <View className='comments dot'>
                        <View>{this.props.commentNum} 评论 </View>
                    </View>
                    <View className='follow-it'>
                        <View>关注问题</View>
                    </View>
                </View>
            </View>
        </View>
      </View>
    )
  }
}
