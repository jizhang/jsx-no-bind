import * as React from 'react'

const StatelessChild = props => {
  console.log('render stateless')
  return (
    <h2 onClick={props.onClick}>{props.message}</h2>
  )
}

class PureChild extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.message)
  }

  render() {
    console.log('render pure')
    return (
      <h2 onClick={this.handleClick} className={this.props.className}>{this.props.message}</h2>
    )
  }
}

class RegularChild extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.message !== nextProps.message
  }

  render() {
    console.log('render regular')
    return (
      <h2 onClick={this.props.onClick}>{this.props.message}</h2>
    )
  }
}


export default class Parent extends React.Component {
  state = {
    count: 0,
    className: '',
  }

  increment = () => {
    this.setState(state => {
      return {
        count: state.count + 1,
        className: 'count-' + (state.count + 1),
      }
    })
  }

  handleClick = message => {
    console.log(message)
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.increment}>Add</button>
          Count: {this.state.count}
        </div>
        <StatelessChild message="stateless" onClick={() => { console.log('stateless') }} />
        <PureChild message="pure" onClick={this.handleClick} className={this.state.className} />
        <RegularChild message="regular" onClick={() => { console.log('reguler') }} />
      </React.Fragment>
    )
  }
}
