import React from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
  );
};

class ProductCategoryRow extends React.Component {
  render() {
    const { category } = this.props;

    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const { name, price, stocked } = this.props.product;

    const productName = stocked ? (
      name
    ) : (
      <span style={{ color: 'red' }}> {name} </span>
    );

    return (
      <tr>
        <td>{productName}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

class TableBody extends React.Component {
  render() {
    const { products, inStockOnly, filteredText } = this.props;

    const rows = [];
    let categoryTemp;
    console.log(filteredText);
    products.forEach(product => {
      if (!product.name.includes(filteredText)) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== categoryTemp) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }

      rows.push(<ProductRow product={product} key={product.name} />);
      categoryTemp = product.category;
    });

    return <tbody>{rows}</tbody>;
  }
}

class Table extends React.Component {
  render() {
    const { products, inStockOnly, filteredText } = this.props;

    return (
      <table>
        <TableHead />
        <TableBody
          products={products}
          inStockOnly={inStockOnly}
          filteredText={filteredText}
        />
      </table>
    );
  }
}

export default Table;
