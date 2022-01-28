import React, {PureComponent} from "react"

export default class Item extends PureComponent {
    render() {
      return <li>{this.props.name}</li>;
    }
  }