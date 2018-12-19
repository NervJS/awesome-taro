import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import WxParse from '../../components/wxParse/wxParse'

import './wxParse.scss'

/**
 * 需要注意的是，在项目的 config/index.js 文件中，有 copy 模板与样式的操作
 */
export default class ParseComponent extends Component {
  componentDidMount () {
    const article = '<div style="color: red">我是HTML代码</div>'
    // console.log(this.$scope,666)
    WxParse.wxParse('article', 'html', article, this.$scope, 5)
  }

  render () {
    return (
      <View>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}'/>
      </View>
    )
  }
}