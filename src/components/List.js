import * as React from 'react'

export default class List extends React.Component {
  getProps = (message) => {
    return {
      onClick: () => {
        alert(message)
      }
    }
  }

  getHandler = (message) => {
    return () => {
      alert(message)
    }
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id} onClick={this.getHandler(item.id)}>{item.text}</li>
        ))}
      </ul>
    )
  }
}
