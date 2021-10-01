import React from 'react';
import Item from './Item';

class Listing extends React.Component {
  render() {
    const { items  = [] } = this.props;
    return (
      <div className="item-list">
        { items.map((item) => <Item item={item} key={item.listing_id} />) }
      </div>
    )
  }
}
export default Listing;
