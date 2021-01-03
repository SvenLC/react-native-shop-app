import Moment from 'moment';

class Order {
  constructor(id, items, totalAmout, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmout;
    this.date = date;
  }

  get readableDate() {
    // return this.date.toLocaleDateString('fr-FR', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });
    return Moment(this.date).format('MMMM Do YYYY, hh:mm');
  }
}

export default Order;
