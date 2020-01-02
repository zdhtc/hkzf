import React from 'react'
import { Carousel, Flex } from 'antd-mobile'
import {getSwipeData} from './api.js'

import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
import './index.css'

const navs = [
  {
    id: 1,
    img: Nav1,
    title: '整租',
    path: '/home/a'
  },
  {
    id: 2,
    img: Nav2,
    title: '合租',
    path: '/home/b'
  },
  {
    id: 3,
    img: Nav3,
    title: '地图找房',
    path: '/map'
  },
  {
    id: 4,
    img: Nav4,
    title: '去出租',
    path: '/rent/add'
  }
]

class Index extends React.Component {
  state = {
    data: [],
    imgHeight: 176,
    isloaded: false
  }

  loadSwiperData = async () => {
    const { data } = await getSwipeData()
    data.status === 200 && this.setState({
      data: data.body,
      isloaded: true
    })
  }
  componentDidMount() {
    // 请求轮播图图片
    this.loadSwiperData()
  }

  renderSwiper = () => {
    return (
        <Carousel
          autoplay={this.state.isloaded}
          autoplayInterval={1500}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val.id}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`http://localhost:8080${val.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    )
  }

  renderNavs = () => (
    <Flex>
      {navs.map(item => {
        return (
          <Flex.Item
           key={item.id}
           className="nav"
           onClick={() => {
            //  =====================todos
            this.props.history.push(item.path)
           }}
          >
            <img src={item.img} />
        <p>{item.title}</p>
          </Flex.Item>
        )
      })}
    </Flex>
  )
  render() {
    return (
      <div>
        {/* 轮播图区域 */}
        {this.renderSwiper()  }
        {/* 四个nav盒子 */}
        {this.renderNavs()}
      </div>
    )
  }
}

export default Index