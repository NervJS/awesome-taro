import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView,Image,Swiper,SwiperItem} from '@tarojs/components'
import './discovery.scss'
import Feed from '../../components/feed/feed'
import ParseComponent from '../wxParse/wxParseComponent'
import img1 from '../../asset/images/24213.jpg'
import img2 from '../../asset/images/24280.jpg'
import img3 from '../../asset/images/1444983318907-_DSC1826.jpg'
import img4 from '../../asset/images/icon1.jpeg'
import img5 from '../../asset/images/icon8.jpg'
import img6 from '../../asset/images/icon9.jpeg'

export default class Discovery extends Component {
  config = {
    navigationBarTitleText: '发现'
  }
  constructor() {
    super(...arguments)
    this.state = {
      imgUrls: [img1,img2,img3],
      currentNavtab: 0,
      navTab: ['推荐', '圆桌', '热门', '收藏'],
      feed:[
        {
            'question_id': 1,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca1',
            'feed_source_txt': '赞了回答1',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 2,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex2',
            'feed_source_txt': '回答了问题2',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 3,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George3',
            'feed_source_txt': '赞了回答3',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 4,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca4',
            'feed_source_txt': '赞了回答4',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 5,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex5',
            'feed_source_txt': '回答了问题5',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 6,
            'answer_id': 61,
            'feed_source_id': 25,
            'feed_source_name': 'George6',
            'feed_source_txt': '赞了回答6',
            'feed_source_img': img6,
            'question': '气象铁塔的辐射大吗？',
            'answer_ctnt': '我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 7,
            'answer_id': 3,
            'feed_source_id': 23,
            'feed_source_name': 'Rebecca7',
            'feed_source_txt': '赞了回答7',
            'feed_source_img': img4,
            'question': '选择 Kindle 而不是纸质书的原因是什么？',
            'answer_ctnt': '难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
            'good_num': '112',
            'comment_num': '18'
        },
        {
            'question_id': 8,
            'answer_id': 25,
            'feed_source_id': 24,
            'feed_source_name': 'Alex8',
            'feed_source_txt': '回答了问题8',
            'feed_source_img': img5,
            'question': '如何评价周杰伦的「中文歌才是最屌的」的言论？',
            'answer_ctnt': '不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
            'good_num': '112',
            'comment_num': '18'
        }
      ],
      html: '<h1>666</h1>',
    }
  }
  switchTab(index,e) {
    this.setState({
      currentNavtab: index
    })
  }
  componentDidMount() {
    // console.log(process.env.TARO_ENV)
    if (process.env.TARO_ENV === 'weapp') {
      // 这里 this.refs.input 访问的时候通过 `wx.createSeletorQuery` 取到的小程序原生组件
    } else if (process.env.TARO_ENV === 'h5') {
      // console.log(this.refs.input._rendered.dom)
      // this.refs.input._rendered.dom.innerHTML = '<span>666</span>'
      // 这里 this.refs.input 访问到的是 `@tarojs/components` 的 `Input` 组件实例
    }
  }
  
  render () {
    // console.log(process.env.TARO_ENV)
    return (
      <View>
        <View className='top-tab flex-wrp flex-tab' >
        {
          this.state.navTab.map((item,index) => {
            return (<View className={this.state.currentNavtab === index ? 'toptab flex-item active' : 'toptab flex-item' } key={index} onClick={this.switchTab.bind(this,index)}>
              {item}
            </View>)
          })
        }
        </View>
        <ScrollView scroll-y className='container discovery withtab'>
          <View ref='input' style={{color:'green'}}>123</View>
          {process.env.TARO_ENV === 'weapp' ? <ParseComponent /> : <View>只在小程序里支持</View>}
          <View className='ctnt0' hidden={this.state.currentNavtab==0 ? false : true}>
              <Swiper className='activity' indicatorDots='true'
                      autoplay='true' interval='5000' duration='500'>
                {this.state.imgUrls.map((item,index) => {
                  return (<SwiperItem key={index}>
                    <Image src={item} className='slide-image' width='355' height='375' />
                  </SwiperItem>)
                })}
              </Swiper>
              {this.state.feed.map((item, index)=>{
                return (
                  <Feed
                    key={`dis_${index}`}
                    feedSourceImg={item.feed_source_img}
                    feedSourceName={item.feed_source_name}
                    feedSourceTxt={item.feed_source_txt}
                    question={item.question}
                    goodNum={item.good_num}
                    commentNum={item.comment_num}
                    answerCtnt={item.answer_ctnt} />
                )
              })}
          </View>
            <View className='txcenter' hidden={this.state.currentNavtab==1 ? false : true}>
              <Text>圆桌</Text>
            </View>
            <View className='txcenter' hidden={this.state.currentNavtab==2 ? false : true}>
              <Text>热门</Text>
            </View>
            <View className='txcenter' hidden={this.state.currentNavtab==3 ? false : true}>
              <Text>收藏</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

