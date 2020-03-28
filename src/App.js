import React from 'react';
import SearchBar from './SearchBar';
import Table from './Table';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class App extends React.Component {
  state = {
    filteredText: '',
    inStockOnly: false
  };

  handleFilteredText = event => {
    this.setState({ filteredText: event });
  };

  handleStockFilter = event => {
    this.setState({ inStockOnly: !this.state.inStockOnly });
    console.log(this.state.inStockOnly);
  };

  render() {
    return (
      <div>
        <SearchBar
          filteredText={this.state.filteredText}
          handleFilteredText={this.handleFilteredText}
          handleStockFilter={this.handleStockFilter}
        />
        <Table
          products={PRODUCTS}
          inStockOnly={this.state.inStockOnly}
          filteredText={this.state.filteredText}
        />
      </div>
    );
  }
}

export default App;
