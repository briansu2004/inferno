/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

import React from 'inferno-compat';

describe('ReactChildren', function () {
  let ReactChildren;

  beforeEach(function () {
    ReactChildren = React.Children;
  });

  it('should support identity for simple', function () {
    const callback = jasmine.createSpy().and.callFake(function (kid, index) {
      return kid;
    });

    const simpleKid = <span key="simple" />;

    // First pass children into a component to fully simulate what happens when
    // using structures that arrive from transforms.

    const instance = (
      <div>
        <span key="simple" />
      </div>
    );
    ReactChildren.forEach(instance.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0, jasmine.any(Array));
    callback.calls.reset();
    ReactChildren.map(instance.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0, jasmine.any(Array));
    // expect(mappedChildren[0]).toEqual(<span key="simple" />);
  });

  it('should treat single arrayless child as being in array', function () {
    const callback = jasmine.createSpy().and.callFake(function (kid, index) {
      return kid;
    });

    const simpleKid = <span />;
    const instance = (
      <div>
        <span />
      </div>
    );
    ReactChildren.forEach(instance.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0, jasmine.any(Array));
    callback.calls.reset();
    ReactChildren.map(instance.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0, jasmine.any(Array));
    // expect(mappedChildren[0]).toEqual(<span key=".0" />);
  });

  it('should treat single child in array as expected', function () {
    const callback = jasmine.createSpy().and.callFake(function (kid, index) {
      return kid;
    });

    const simpleKid = <span key="simple" />;
    // Use optimization flag to avoid normalization to keep flags same... for below assertion
    const instance = <div $HasNonKeyedChildren>{[<span key="simple" />]}</div>;
    ReactChildren.forEach(instance.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0, jasmine.any(Array)); // Third param is the array
    callback.calls.reset();

    ReactChildren.map(instance.children, callback);
    expect(callback).toHaveBeenCalledWith(simpleKid, 0, jasmine.any(Array));
    // expect(mappedChildren[0]).toEqual(<span key="simple" />);
    // Flags dont match because its implementation detail in Inferno
  });

  it('should pass key to returned component', function () {
    const mapFn = function (kid, index) {
      return <div>{kid}</div>;
    };
    const instance = (
      <div>
        <span key="simple" />
      </div>
    );

    const mappedChildren = ReactChildren.map(instance.children, mapFn);

    expect(ReactChildren.count(mappedChildren)).toBe(1);
    expect(mappedChildren[0].children.key).toBe('simple');
  });

  it('should invoke callback with the right context', function () {
    let lastContext;
    const callback = function (kid, index) {
      lastContext = this;
      return this;
    };

    const scopeTester = { fooScope: 'barScope' };

    const simpleKid = <span key="simple" />;
    const instance = <div>{simpleKid}</div>;
    ReactChildren.forEach(instance.children, callback, scopeTester);
    expect(lastContext).toEqual(scopeTester);

    const mappedChildren = ReactChildren.map(
      instance.children,
      callback,
      scopeTester,
    );

    expect(ReactChildren.count(mappedChildren)).toBe(1);
    expect(mappedChildren[0]).toEqual(scopeTester);
  });

  it('ForEach should not fail if null children is provided', () => {
    expect(React.Children.forEach(null, null, null)).toBe(undefined);
  });

  // it('should be called for each child', function() {
  //   var zero = <div key="keyZero" />;
  //   var one = null;
  //   var two = <div key="keyTwo" />;
  //   var three = null;
  //   var four = <div key="keyFour" />;
  //
  //   var zeroMapped = <div key="giraffe" />;  // Key should be joined to obj key
  //   var oneMapped = null;  // Key should be added even if we don't supply it!
  //   var twoMapped = <div />;  // Key should be added even if not supplied!
  //   var threeMapped = <span />; // Map from null to something.
  //   var fourMapped = <div key="keyFour" />;
  //
  //   var callback = jasmine.createSpy().and.callFake(function(kid, index) {
  //     return index === 0 ? zeroMapped :
  //       index === 1 ? oneMapped :
  //       index === 2 ? twoMapped :
  //       index === 3 ? threeMapped : fourMapped;
  //   });
  //   var instance = (
  //     <div>
  //       {zero}
  //       {one}
  //       {two}
  //       {three}
  //       {four}
  //     </div>
  //   );
  //
  //   ReactChildren.forEach(instance.children, callback);
  //   expect(callback).toHaveBeenCalledWith(zero, 0);
  //   expect(callback).toHaveBeenCalledWith(one, 1);
  //   expect(callback).toHaveBeenCalledWith(two, 2);
  //   expect(callback).toHaveBeenCalledWith(three, 3);
  //   expect(callback).toHaveBeenCalledWith(four, 4);
  //   callback.calls.calls.reset();
  //
  //   var mappedChildren =
  //     ReactChildren.map(instance.children, callback);
  //   expect(callback.calls.count()).toBe(5);
  //   expect(ReactChildren.count(mappedChildren)).toBe(4);
  //   // Keys default to indices.
  //   expect([
  //     mappedChildren[0].key,
  //     mappedChildren[1].key,
  //     mappedChildren[2].key,
  //     mappedChildren[3].key,
  //   ]).toEqual(
  //     ['giraffe/.$keyZero', '/.$keyTwo', '/.3', 'keyFour/.$keyFour']
  //   );
  //
  //   expect(callback).toHaveBeenCalledWith(zero, 0);
  //   expect(callback).toHaveBeenCalledWith(one, 1);
  //   expect(callback).toHaveBeenCalledWith(two, 2);
  //   expect(callback).toHaveBeenCalledWith(three, 3);
  //   expect(callback).toHaveBeenCalledWith(four, 4);
  //
  //   expect(mappedChildren[0]).toEqual(<div key="giraffe/.$keyZero" />);
  //   expect(mappedChildren[1]).toEqual(<div key="/.$keyTwo" />);
  //   expect(mappedChildren[2]).toEqual(<span key="/.3" />);
  //   expect(mappedChildren[3]).toEqual(<div key="keyFour/.$keyFour" />);
  // });

  // it('should be called for each child in nested structure', function() {
  //   var zero = <div key="keyZero" />;
  //   var one = null;
  //   var two = <div key="keyTwo" />;
  //   var three = null;
  //   var four = <div key="keyFour" />;
  //   var five = <div key="keyFiveInner" />;
  //   // five is placed into a JS object with a key that is joined to the
  //   // component key attribute.
  //   // Precedence is as follows:
  //   // 1. If grouped in an Object, the object key combined with `key` prop
  //   // 2. If grouped in an Array, the `key` prop, falling back to array index

  //   var zeroMapped = <div key="giraffe" />;  // Key should be overridden
  //   var twoMapped = <div />;  // Key should be added even if not supplied!
  //   var fourMapped = <div key="keyFour" />;
  //   var fiveMapped = <div />;

  //   var callback = jasmine.createSpy().and.callFake(function(kid, index) {
  //     return index === 0 ? zeroMapped :
  //       index === 1 ? twoMapped :
  //       index === 2 ? fourMapped : fiveMapped;
  //   });

  //   var frag = ReactFragment.create({
  //     firstHalfKey: [zero, one, two],
  //     secondHalfKey: [three, four],
  //     keyFive: five,
  //   });
  //   var instance = <div>{[frag]}</div>;

  //   expect([
  //     frag[0].key,
  //     frag[1].key,
  //     frag[2].key,
  //     frag[3].key,
  //   ]).toEqual([
  //     'firstHalfKey/.$keyZero',
  //     'firstHalfKey/.$keyTwo',
  //     'secondHalfKey/.$keyFour',
  //     'keyFive/.$keyFiveInner',
  //   ]);

  //   ReactChildren.forEach(instance.props.children, callback);
  //   expect(callback.calls.count()).toBe(4);
  //   expect(callback).toHaveBeenCalledWith(frag[0], 0);
  //   expect(callback).toHaveBeenCalledWith(frag[1], 1);
  //   expect(callback).toHaveBeenCalledWith(frag[2], 2);
  //   expect(callback).toHaveBeenCalledWith(frag[3], 3);
  //   callback.calls.calls.reset();

  //   var mappedChildren = ReactChildren.map(instance.props.children, callback);
  //   expect(callback.calls.count()).toBe(4);
  //   expect(callback).toHaveBeenCalledWith(frag[0], 0);
  //   expect(callback).toHaveBeenCalledWith(frag[1], 1);
  //   expect(callback).toHaveBeenCalledWith(frag[2], 2);
  //   expect(callback).toHaveBeenCalledWith(frag[3], 3);

  //   expect(ReactChildren.count(mappedChildren)).toBe(4);
  //   // Keys default to indices.
  //   expect([
  //     mappedChildren[0].key,
  //     mappedChildren[1].key,
  //     mappedChildren[2].key,
  //     mappedChildren[3].key,
  //   ]).toEqual([
  //     'giraffe/.0:$firstHalfKey/=1$keyZero',
  //     '/.0:$firstHalfKey/=1$keyTwo',
  //     'keyFour/.0:$secondHalfKey/=1$keyFour',
  //     '/.0:$keyFive/=1$keyFiveInner',
  //   ]);

  //   expect(mappedChildren[0]).toEqual(<div key="giraffe/.0:$firstHalfKey/=1$keyZero" />);
  //   expect(mappedChildren[1]).toEqual(<div key="/.0:$firstHalfKey/=1$keyTwo" />);
  //   expect(mappedChildren[2]).toEqual(<div key="keyFour/.0:$secondHalfKey/=1$keyFour" />);
  //   expect(mappedChildren[3]).toEqual(<div key="/.0:$keyFive/=1$keyFiveInner" />);
  // });

  // it('should retain key across two mappings', function() {
  //   var zeroForceKey = <div key="keyZero" />;
  //   var oneForceKey = <div key="keyOne" />;
  //
  //   // Key should be joined to object key
  //   var zeroForceKeyMapped = <div key="giraffe" />;
  //   // Key should be added even if we don't supply it!
  //   var oneForceKeyMapped = <div />;
  //
  //   var mapFn = function(kid, index) {
  //     return index === 0 ? zeroForceKeyMapped : oneForceKeyMapped;
  //   };
  //
  //   var forcedKeys = (
  //     <div>
  //       {zeroForceKey}
  //       {oneForceKey}
  //     </div>
  //   );
  //
  //   var expectedForcedKeys = ['giraffe/.$keyZero', '/.$keyOne'];
  //   var mappedChildrenForcedKeys =
  //     ReactChildren.map(forcedKeys.props.children, mapFn);
  //   var mappedForcedKeys = mappedChildrenForcedKeys.map((c) => c.key);
  //   expect(mappedForcedKeys).toEqual(expectedForcedKeys);
  //
  //   // var expectedRemappedForcedKeys = [
  //   //   'giraffe/.$giraffe/=1$keyZero',
  //   //   '/.$/=1$keyOne',
  //   // ];
  //   // var remappedChildrenForcedKeys =
  //   //   ReactChildren.map(mappedChildrenForcedKeys, mapFn);
  //   // expect(
  //   //   remappedChildrenForcedKeys.map((c) => c.key)
  //   // ).toEqual(expectedRemappedForcedKeys);
  //
  // });

  it('should not throw if key provided is a dupe with array key', function () {
    const zero = <div />;
    const one = <div key="0" />;

    const mapFn = function () {
      return null;
    };

    const instance = (
      <div>
        {zero}
        {one}
      </div>
    );

    expect(function () {
      ReactChildren.map(instance.props.children, mapFn);
    }).not.toThrow();
  });

  it('should return 0 for null children', function () {
    const numberOfChildren = ReactChildren.count(null);
    expect(numberOfChildren).toBe(0);
  });

  it('should return 0 for undefined children', function () {
    const numberOfChildren = ReactChildren.count(undefined);
    expect(numberOfChildren).toBe(0);
  });

  it('should return 1 for single child', function () {
    const simpleKid = <span key="simple" />;
    const instance = <div>{simpleKid}</div>;
    const numberOfChildren = ReactChildren.count(instance.children);
    expect(numberOfChildren).toBe(1);
  });

  it('should count the number of children in flat structure', function () {
    const zero = <div key="keyZero" />;
    const one = null;
    const two = <div key="keyTwo" />;
    const three = null;
    const four = <div key="keyFour" />;

    const instance = (
      <div>
        {zero}
        {one}
        {two}
        {three}
        {four}
      </div>
    );
    const numberOfChildren = ReactChildren.count(instance.children);
    expect(numberOfChildren).toBe(3); // Nulls are removed in Inferno
  });

  // it('should count the number of children in nested structure', function() {
  //   var zero = <div key="keyZero" />;
  //   var one = null;
  //   var two = <div key="keyTwo" />;
  //   var three = null;
  //   var four = <div key="keyFour" />;
  //   var five = <div key="keyFiveInner" />;
  //   // five is placed into a JS object with a key that is joined to the
  //   // component key attribute.
  //   // Precedence is as follows:
  //   // 1. If grouped in an Object, the object key combined with `key` prop
  //   // 2. If grouped in an Array, the `key` prop, falling back to array index

  //   var instance = (
  //     <div>{
  //       [
  //         ReactFragment.create({
  //           firstHalfKey: [zero, one, two],
  //           secondHalfKey: [three, four],
  //           keyFive: five,
  //         }),
  //         null,
  //       ]
  //     }</div>
  //   );
  //   var numberOfChildren = ReactChildren.count(instance.props.children);
  //   expect(numberOfChildren).toBe(5);
  // });

  it('should flatten children to an array', function () {
    expect(ReactChildren.toArray(undefined)).toEqual([]);
    expect(ReactChildren.toArray(null)).toEqual([]);

    expect(ReactChildren.toArray(<div />).length).toBe(1);
    expect(ReactChildren.toArray([<div />]).length).toBe(1);
    expect(ReactChildren.toArray(<div />)[0].key).toBe(
      ReactChildren.toArray([<div />])[0].key,
    );

    const flattened = ReactChildren.toArray([
      [<div key="apple" />, <div key="banana" />, <div key="camel" />],
      [<div key="banana" />, <div key="camel" />, <div key="deli" />],
    ]);
    expect(flattened.length).toBe(6);
    expect(flattened[1].key).toContain('banana');
    expect(flattened[3].key).toContain('banana');
    // Inferno will do this when it normalizes children
    // // expect(flattened[1].key).not.toBe(flattened[3].key);
    //
    // var reversed = ReactChildren.toArray([
    //   [<div key="camel" />, <div key="banana" />, <div key="apple" />],
    //   [<div key="deli" />, <div key="camel" />, <div key="banana" />],
    // ]);
    // expect(flattened[0].key).toBe(reversed[2].key);
    // expect(flattened[1].key).toBe(reversed[1].key);
    // expect(flattened[2].key).toBe(reversed[0].key);
    // expect(flattened[3].key).toBe(reversed[5].key);
    // expect(flattened[4].key).toBe(reversed[4].key);
    // expect(flattened[5].key).toBe(reversed[3].key);
    //
    // // null/undefined/bool are all omitted
    // expect(ReactChildren.toArray([1, 'two', null, undefined, true])).toEqual(
    //   [1, 'two']
    // );
  });

  it('should normalize children in forEach', function () {
    const children = [];
    const callback = function (child) {
      children.push(child);
    };

    ReactChildren.forEach([false, true, undefined], callback);
    expect(children).toEqual([null, null, null]);
  });
});
