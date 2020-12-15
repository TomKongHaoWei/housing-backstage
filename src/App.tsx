import React, { Component, Suspense } from 'react';
import Router from './router/index'

interface IProps {
  state: {}
}

class App extends Component {
  state: { hasError: boolean }
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    })
  }

  render() {
    if (this.state.hasError) return <div>error</div>
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Router/>
        </Suspense>
      </div>
    );
  }
}
export default App;
