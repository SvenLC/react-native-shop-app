import Moment from 'moment';

class Order {
  constructor(id, items, totalAmout, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmout;
    this.date = date;
  }

  get readableDate() {
    return Moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
