import faker from "faker";
import moment from "moment";

export default [
  {
    id: 0,
    description: faker.commerce.productName(),
    amount: faker.commerce.price(1, 29),
    createdAt: moment(faker.date.recent(7))
  },
  {
    id: 1,
    description: faker.commerce.productName(),
    amount: faker.commerce.price(101, 200),
    createdAt: moment(faker.date.recent(1))
  },
  {
    id: 2,
    description: "Magazines",
    amount: 29.99,
    createdAt: moment(faker.date.recent(3))
  }
];
