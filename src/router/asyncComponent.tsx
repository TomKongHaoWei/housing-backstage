import React, { Component } from "react";

const asyncComponent = (importComponent: () => Promise<any>) => {
  class AsyncComponent extends Component <any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      this.setState({component});
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}

export default asyncComponent
