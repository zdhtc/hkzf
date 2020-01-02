import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import Index from '../Index/'
import HouseList from '../HouseList/'
import Profile from '../Profile/'

import './index.css';
import '../../assets/fonts/iconfont.css'
import tabbar from './tabbar.json'

class Home extends React.Component {
  state = {
    selectedTab: this.props.location.pathname
  }

  componentDidMount() {

  }

  renderTabBar = () => {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        {tabbar.map(item => (
          <TabBar.Item
            title={item.title}
            key={item.key}
            icon={<i className={`iconfont ${item.iconFont}`}></i>}
            selectedIcon={<i className={`iconfont ${item.iconFont}`}></i>}
            selected={this.state.selectedTab === item.pathname}
            onPress={() => {
              this.props.history.push(item.pathname)
              this.setState({
                selectedTab: item.pathname,
              });
            }}
          />

        ))}
      </TabBar>

    )
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" exact component={Index} />
          <Route path="/home/list" component={HouseList} />
          <Route path="/home/profile" component={Profile} />
        </Switch>
        <div className="tabbar">
          {/* tabbar */}
          {this.renderTabBar()}
        </div>
      </div>
    )
  };
}

export default Home;
