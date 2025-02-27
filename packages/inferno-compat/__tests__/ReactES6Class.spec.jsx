/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

import React from 'inferno-compat';

const ReactDOM = React;

describe('ReactES6Class', function () {
  let container;
  const freeze = function (expectation) {
    Object.freeze(expectation);
    return expectation;
  };
  let Inner;
  let attachedListener = null;
  let renderedName = null;

  beforeEach(function () {
    container = document.createElement('div');
    attachedListener = null;
    renderedName = null;
    Inner = class extends React.Component {
      getName() {
        return this.props.name;
      }

      render() {
        attachedListener = this.props.onClick;
        renderedName = this.props.name;
        return <div className={this.props.name} />;
      }
    };
  });

  function test(element, expectedTag, expectedClassName) {
    const instance = ReactDOM.render(element, container);
    expect(container.firstChild).not.toBeNull();
    expect(container.firstChild.tagName).toBe(expectedTag);
    expect(container.firstChild.className).toBe(expectedClassName);
    return instance;
  }

  it('renders a simple stateless component with prop', function () {
    class Foo extends React.Component {
      render() {
        return <Inner name={this.props.bar} />;
      }
    }
    test(<Foo bar="foo" />, 'DIV', 'foo');
    test(<Foo bar="bar" />, 'DIV', 'bar');
  });

  it('renders based on state using initial values in this.props', function () {
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.state = { bar: this.props.initialValue };
      }

      render() {
        return <span className={this.state.bar} />;
      }
    }
    test(<Foo initialValue="foo" />, 'SPAN', 'foo');
  });

  it('renders based on state using props in the constructor', function () {
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.state = { bar: props.initialValue };
      }

      changeState() {
        this.setState({ bar: 'bar' });
      }

      render() {
        if (this.state.bar === 'foo') {
          return <div className="foo" />;
        }
        return <span className={this.state.bar} />;
      }
    }
    const instance = test(<Foo initialValue="foo" />, 'DIV', 'foo');
    instance.changeState();
    test(<Foo />, 'SPAN', 'bar');
  });

  it('renders based on context in the constructor', function () {
    class Foo extends React.Component {
      constructor(props, context) {
        super(props, context);

        this.state = { tag: context.tag, className: this.context.className };
      }

      render() {
        const Tag = this.state.tag;
        return <Tag className={this.state.className} />;
      }
    }
    Foo.contextTypes = {
      tag: React.PropTypes.string,
      className: React.PropTypes.string,
    };

    class Outer extends React.Component {
      getChildContext() {
        return { tag: 'span', className: 'foo' };
      }

      render() {
        return <Foo />;
      }
    }
    Outer.childContextTypes = {
      tag: React.PropTypes.string,
      className: React.PropTypes.string,
    };
    test(<Outer />, 'SPAN', 'foo');
  });

  it('renders only once when setting state in componentWillMount', function () {
    let renderCount = 0;
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.state = { bar: props.initialValue };
      }

      componentWillMount() {
        this.setState({ bar: 'bar' });
      }

      render() {
        renderCount++;
        return <span className={this.state.bar} />;
      }
    }
    test(<Foo initialValue="foo" />, 'SPAN', 'bar');
    expect(renderCount).toBe(1);
  });

  // it('should throw with non-object in the initial state property', function() {
  //   [['an array'], 'a string', 1234].forEach(function(state) {
  //     class Foo extends React.Component {
  //       constructor() {
  //         super();
  //         this.state = state;
  //       }
  //       render() {
  //         return <span />;
  //       }
  //     }
  //     expect(() => test(<Foo />, 'span', '')).toThrow();
  //   });
  // });

  it('should render with null in the initial state property', function () {
    class Foo extends React.Component {
      constructor() {
        super();
        this.state = null;
      }

      render() {
        return <span />;
      }
    }
    test(<Foo />, 'SPAN', '');
  });

  it('setState through an event handler', function () {
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.state = { bar: props.initialValue };
      }

      handleClick() {
        this.setState({ bar: 'bar' });
      }

      render() {
        return (
          <Inner name={this.state.bar} onClick={this.handleClick.bind(this)} />
        );
      }
    }
    test(<Foo initialValue="foo" />, 'DIV', 'foo');
    attachedListener();
    expect(renderedName).toBe('bar');
  });

  it('should not implicitly bind event handlers', function () {
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.state = { bar: props.initialValue };
      }

      handleClick() {
        this.setState({ bar: 'bar' });
      }

      render() {
        return <Inner name={this.state.bar} onClick={this.handleClick} />;
      }
    }
    test(<Foo initialValue="foo" />, 'DIV', 'foo');
    expect(attachedListener).toThrow();
  });

  it('renders using forceUpdate even when there is no state', function () {
    class Foo extends React.Component {
      constructor(props) {
        super(props);
        this.mutativeValue = props.initialValue;
      }

      handleClick() {
        this.mutativeValue = 'bar';
        this.forceUpdate();
      }

      render() {
        return (
          <Inner
            name={this.mutativeValue}
            onClick={this.handleClick.bind(this)}
          />
        );
      }
    }
    test(<Foo initialValue="foo" />, 'DIV', 'foo');
    attachedListener();
    expect(renderedName).toBe('bar');
  });

  it('will call all the normal life cycle methods', function () {
    let lifeCycles = [];
    class Foo extends React.Component {
      constructor() {
        super();
        this.state = {};
      }

      componentWillMount() {
        lifeCycles.push('will-mount');
      }

      componentDidMount() {
        lifeCycles.push('did-mount');
      }

      componentWillReceiveProps(nextProps) {
        lifeCycles.push('receive-props', nextProps);
      }

      shouldComponentUpdate(nextProps, nextState) {
        lifeCycles.push('should-update', nextProps, nextState);
        return true;
      }

      componentWillUpdate(nextProps, nextState) {
        lifeCycles.push('will-update', nextProps, nextState);
      }

      componentDidUpdate(prevProps, prevState) {
        lifeCycles.push('did-update', prevProps, prevState);
      }

      componentWillUnmount() {
        lifeCycles.push('will-unmount');
      }

      render() {
        return <span className={this.props.value} />;
      }
    }
    test(<Foo value="foo" />, 'SPAN', 'foo');
    expect(lifeCycles).toEqual(['will-mount', 'did-mount']);
    lifeCycles = []; // reset
    test(<Foo value="bar" />, 'SPAN', 'bar');
    expect(lifeCycles).toEqual([
      'receive-props',
      freeze({ value: 'bar' }),
      'should-update',
      freeze({ value: 'bar' }),
      {},
      'will-update',
      freeze({ value: 'bar' }),
      {},
      'did-update',
      freeze({ value: 'foo' }),
      {},
    ]);
    lifeCycles = []; // reset
    ReactDOM.unmountComponentAtNode(container);
    expect(lifeCycles).toEqual(['will-unmount']);
  });

  it('supports this.context passed via getChildContext', function () {
    class Bar extends React.Component {
      render() {
        return <div className={this.context.bar} />;
      }
    }
    Bar.contextTypes = { bar: React.PropTypes.string };
    class Foo extends React.Component {
      getChildContext() {
        return { bar: 'bar-through-context' };
      }

      render() {
        return <Bar />;
      }
    }
    Foo.childContextTypes = { bar: React.PropTypes.string };
    test(<Foo />, 'DIV', 'bar-through-context');
  });

  it('supports drilling through to the DOM using findDOMNode', function () {
    const instance = test(<Inner name="foo" />, 'DIV', 'foo');
    const node = ReactDOM.findDOMNode(instance);
    expect(node).toBe(container.firstChild);
  });
});
