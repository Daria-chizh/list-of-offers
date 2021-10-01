import React from 'react';

class Item extends React.Component {

  render() {
    const { item } = this.props;
    const { title, price, quantity, url, MainImage: picture } = item;

    // select poster image
    const mainPicture = picture ? picture.url_570xN: '';

    // display truncated title
    const shortTitle = title ? title.length > 50 ? title.substr(0, 50) + '…' : title : '';

    // display price with currency sign
    const currencyCode = item.currency_code;
    let totalPrice = `${price} ${currencyCode}`;
    if (currencyCode === 'USD') {
      totalPrice = `$${price}`;
    } else if (currencyCode === 'EUR') {
      totalPrice =`€${price}`;
    }

    // assign class for quantity field
    let qtyClass;
    if (quantity !== undefined) {
      if (quantity <= 10) {
        qtyClass = 'level-low';
      }
      if (quantity <= 20) {
        qtyClass = 'level-medium';
      }
      if (quantity > 20) {
        qtyClass = 'level-high';
      }
    }

    return (
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={mainPicture} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{shortTitle}</p>
          <p className="item-price">{totalPrice}</p>
          <p className={`item-quantity ${qtyClass}`}>{quantity} left</p>
        </div>
      </div>
    );
  }
}
export default Item;
