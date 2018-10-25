import React from 'react';
import memoize from 'memoize-one';

export default class Memoization extends React.Component {
  // State only needs to hold the current filter text value:
  state = { filterText: '' };

  // Re-run the filter whenever the list array or filter text changes:
  filter = memoize(
    (list, filterText) => list.filter(item => item.text.includes(filterText))
  );

  handleChange = event => {
    this.setState({ filterText: event.target.value });
  };

  render() {
    // Calculate the latest filtered list. If these arguments haven't changed
    // since the last render, `memoize-one` will reuse the last return value.
    const filteredList = this.filter(this.props.list, this.state.filterText);

    return (
      <>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>{filteredList.map(item => <li key={item.id}>{item.text}</li>)}</ul>
      </>
    );
  }
}

/**
 * When using memoization, remember a couple of constraints

  1. In most cases, you’ll want to attach the memoized function to a component instance. This prevents multiple instances of a component from resetting each other’s memoized keys.
  2. Typically you’ll want to use a memoization helper with a limited cache size in order to prevent memory leaks over time. (In the example above, we used memoize-one because it only caches the most recent arguments and result.)
  3. None of the implementations shown in this section will work if props.list is recreated each time the parent component renders. But in most cases, this setup is appropriate.
 */
