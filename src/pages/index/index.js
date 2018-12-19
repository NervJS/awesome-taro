import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView,Input,Image} from '@tarojs/components'
import './index.scss'
import Feed from '../../components/feed/feed'
import searchPng from '../../asset/images/search.png'
import lightingPng from '../../asset/images/lighting.png'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor() {
    super(...arguments)
    this.state = {
      loading:true,
      list:[]
    }
  }
  componentDidMount () {
    // 获取远程数据
    Taro.showLoading({ title: '加载中' })
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          loading: false,
          list: res.data.data
        })
      }
    })
  }
  updateList = () => {
    if (this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          loading:false,
          list:res.data.data
        })
      }
    })
  }
  appendNextPageList = () => {
    if (this.state.loading) {
      return
    }
    this.state.loading = true
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then(res => {
      Taro.hideLoading()
      if (res.data.success) {
        this.setState({
          list: this.state.list.concat(res.data.data),
          loading: false
        })
      }
    })
  }
  render () {
    return (
        <View>
        <View className='search flex-wrp'>
          <View className='search-left flex-item'>
            <View className='flex-wrp'>
              <View className='flex1'><Image src={searchPng}></Image></View>
              <View className='flex6'><Input type='text' placeholder={'搜索话题, 问题或人'} placeholderClass='search-placeholder' /></View>
            </View>
          </View>
          <View className='search-right flex-item'>
            <Image onClick={this.updateList} src={lightingPng}></Image>
          </View>
        </View>
        <ScrollView className='container'
          scrollY
          scrollWithAnimation
          scrollTop='0'
          lowerThreshold='10'
          upperThreshold='10'
          style='height:300px'
          onScrollToUpper={this.updateList}
          onScrollToLower={this.appendNextPageList}
        >
        {
          this.state.loading
          ? <View className='txcenter'>加载中</View>
          : this.state.list.map(item => {
            return <Feed
              key={item}
              feedSourceImg={item.feed_source_img}
              feedSourceName={item.feed_source_name}
              feedSourceTxt={item.feed_source_txt}
              question={item.question}
              answerCtnt={item.good_num}
              goodNum={item.comment_num}
              commentNum={item.commentNum}
            />
          })
        }
      </ScrollView>
      </View>
    )
  }
}

