import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  render () {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
