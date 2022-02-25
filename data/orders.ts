export type Order = {
  id: string;
  orderedOn: Date;
  lineItems: OrderLineItem[];
};

export type OrderLineItem = {
  quantity: number;
  productId: string;
};

export const orders: Order[] = [
  {
    id: '1',
    orderedOn: new Date(2021, 1, 1),
    lineItems: [
      {
        quantity: 1,
        productId: 'kiwi-1',
      },
      {
        quantity: 2,
        productId: 'apple-1',
      },
    ],
  },
  {
    id: '2',
    orderedOn: new Date(2022, 2, 2),
    lineItems: [
      {
        quantity: 10,
        productId: 'banana-1',
      },
      {
        quantity: 20,
        productId: 'apple-1',
      },
    ],
  },
];
