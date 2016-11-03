import React, { Component } from 'react'

import AlertIcon from './../atoms/AlertIcon'
import SettingIcon from './../atoms/SettingIcon'
import ClockIcon from './../atoms/ClockIcon'

import StackedListItem from './../molecules/StackedListItem'

class HomeMenu extends Component {

  render() {
    return (
      <section className="bordered-form home-menu">
        <label>Overview</label>
        <ul className="menu">
          <li>
            <a href="#">
              <SettingIcon />
              <StackedListItem
                label="Cooling Profile"
                value="At Home" />
            </a>
          </li>
          <li>
            <a href="#">
              <ClockIcon />
              <StackedListItem
                label="Next Mode"
                value="5:00p" />
            </a>
          </li>
          <li>
            <a href="#">
              <AlertIcon />
              <StackedListItem
                label="Messages"
                value="None" />
            </a>
          </li>
        </ul>
      </section>
    )
  }

}

HomeMenu.propTypes = {}

export default HomeMenu
