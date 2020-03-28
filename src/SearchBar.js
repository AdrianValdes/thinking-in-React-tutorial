import React from 'react';

class SearchBar extends React.Component {
  onFilteredTextChange = event => {
    this.props.handleFilteredText(event.target.value);
  };
  onStockFilterChange = event => {
    this.props.handleStockFilter();
  };
  render() {
    return (
      <form action="">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search..."
          onChange={this.onFilteredTextChange}
          value={this.props.filteredText}
        />
        <p>
          <input
            type="checkbox"
            name="products"
            id="products"
            onChange={this.onStockFilterChange}
          />
          Only show products in stock
        </p>
      </form>
    );
  }
}

export default SearchBar;
