import React, { Component } from "react";

type StateType = {
  component: () => Promise<any>;
};
const asyncComponent1 = (importComponent: () => Promise<any>) => {
  class AsyncComponent extends Component <any, StateType> {
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
      console.log("C", C);
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}

export default asyncComponent1
