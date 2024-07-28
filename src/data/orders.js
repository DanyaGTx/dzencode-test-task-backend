const orders = [
    {
      id: 1,
      title: "Длинное предлинное название прихода для Заказа 1",
      date: "2017-06-29",
      products: [
        {
          id: 1,
          serialNumber: "SN-12.312412",
          isNew: true,
          photo: "https://content.rozetka.com.ua/goods/images/big/440095817.jpg",
          title: "Монитор 27'' Samsung Odyssey DG50 S27DG502EI (LS27DG502EIXCI)",
          type: "monitor",
          order_name: "Длинное предлинное название прихода",
          specification: "Specification 1",
          status: "free",
          guarantee: {
            start: "2017-06-29",
            end: "2017-06-29",
          },
          price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
          ],
          order: 1,
          date: "2017-06-29",
        },
        {
          id: 2,
          serialNumber: "SN-12.312412",
          isNew: true,
          photo: "https://content.rozetka.com.ua/goods/images/big/440095817.jpg",
          title: "Монитор 27'' Samsung Odyssey DG50 S27DG502EI (LS27DG502EIXCI)",
          type: "monitor",
          order_name: "Длинное предлинное название прихода",
          specification: "Specification 1",
          status: "free",
          guarantee: {
            start: "2017-06-29",
            end: "2017-06-29",
          },
          price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
          ],
          order: 1,
          date: "2017-06-29",
        },
      ],
    },
    {
      id: 2,
      title: "Совершенно другое название прихода для Заказа 2",
      date: "2017-06-29",
      products: [
        {
          id: 1,
          serialNumber: "SN-12.312412",
          isNew: true,
          photo: "https://content2.rozetka.com.ua/goods/images/big/404971763.jpg",
          title: "Монитор 27'' Samsung Odyssey DG50 S27DG502EI (LS27DG502EIXCI)",
          type: "monitor",
          order_name: "Длинное предлинное название прихода",
          specification: "Specification 1",
          status: "free",
          guarantee: {
            start: "2017-06-29",
            end: "2017-06-29",
          },
          price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
          ],
          order: 1,
          date: "2017-06-29",
        },
      ],
    },
    {
      id: 3,
      title: "Также другое название прихода для Заказа 3",
      date: "2017-06-29",
      products: [
        {
          id: 1,
          serialNumber: "SN-12.312412",
          isNew: true,
          photo: "https://content2.rozetka.com.ua/goods/images/big/411231783.jpg",
          title: "Монитор 27'' Samsung Odyssey DG50 S27DG502EI (LS27DG502EIXCI)",
          type: "monitor",
          order_name: "Длинное предлинное название прихода",
          specification: "Specification 1",
          status: "repairing",
          guarantee: {
            start: "2017-06-29",
            end: "2017-06-29",
          },
          price: [
            { value: 100, symbol: "USD", isDefault: 0 },
            { value: 2600, symbol: "UAH", isDefault: 1 },
          ],
          order: 1,
          date: "2017-06-29",
        },
      ],
    },
  ];
  
  module.exports = orders;
  