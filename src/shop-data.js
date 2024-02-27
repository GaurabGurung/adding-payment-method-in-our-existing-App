const SHOP_DATA = [
  {
    title: "Hats",
    items: [
      {
        id: 1,
        title: "hats",
        name: "Sunny Summer Hat",
        imageUrl:
          "https://images.unsplash.com/photo-1587108526807-5191bbfd784e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25,
      },
      {
        id: 2,
        title: "hats",
        name: "Orange Round hat",
        imageUrl:
          "https://images.unsplash.com/photo-1551734413-5943d61e002a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18,
      },
      {
        id: 3,
        title: "hats",
        name: "Brown Cowboy",
        imageUrl:
          "https://images.unsplash.com/photo-1670397767434-3aab9b36bb56?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 35,
      },
      {
        id: 4,
        title: "hats",
        name: "Brown Sun Hat",
        imageUrl:
          "https://images.unsplash.com/photo-1548693706-3dd435584a51?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25,
      },
      {
        id: 5,
        title: "hats",
        name: "Red Beanie",
        imageUrl:
          "https://images.unsplash.com/photo-1544984581-05ede8383f4c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18,
      },
      {
        id: 6,
        title: "hats",
        name: "Pink beanie with a puffy white tail",
        imageUrl:
          "https://images.unsplash.com/photo-1617442137585-ae532ca1645f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 14,
      },
      {
        id: 7,
        title: "hats",
        name: "Yellow Beanie",
        imageUrl:
          "https://images.unsplash.com/photo-1577565177023-d0f29c354b69?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 18,
      },
      {
        id: 8,
        title: "hats",
        name: "BaseBall Cap",
        imageUrl:
          "https://images.unsplash.com/photo-1568246621541-5704b4f0bbf2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 14,
      },
      {
        id: 9,
        title: "hats",
        name: "Blue Hat",
        imageUrl:
          "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 16,
      },
    ],
  },
  {
    title: "Sneakers",
    items: [
      {
        id: 10,
        title: "sneakers",
        name: "Adidas NMD",
        imageUrl:
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 220,
      },
      {
        id: 11,
        title: "sneakers",
        name: "Adidas Yeezy",
        imageUrl:
          "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 280,
      },
      {
        id: 12,
        title: "sneakers",
        name: "Black Converse",
        imageUrl:
          "https://images.unsplash.com/photo-1565379793984-e65b51b33b37?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 110,
      },
      {
        id: 13,
        title: "sneakers",
        name: "Nike White AirForce",
        imageUrl:
          "https://images.unsplash.com/photo-1704949871220-3f4f4488623e?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 160,
      },
      {
        id: 14,
        title: "sneakers",
        name: "Nike AirForce",
        imageUrl:
          "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 160,
      },
      {
        id: 15,
        title: "sneakers",
        name: "Nike Yellow High Tops",
        imageUrl:
          "https://images.unsplash.com/photo-1620138546344-7b2c38516edf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 160,
      },
      {
        id: 16,
        title: "sneakers",
        name: "Adidas Gazelle Bold",
        imageUrl:
          "https://images.unsplash.com/photo-1698611028521-4c284ca88b11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 190,
      },
      {
        id: 17,
        title: "sneakers",
        name: "Nike AJ1 Low",
        imageUrl:
          "https://images.unsplash.com/photo-1704677982224-89cd6d039fa6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 200,
      },
    ],
  },
  {
    title: "Jackets",
    items: [
      {
        id: 18,
        title: "jackets",
        name: "Black overfit Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1669479033025-01bc44921fff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 125,
      },
      {
        id: 19,
        title: "jackets",
        name: "Blue Jean Jacket",
        imageUrl:
          "https://images.pexels.com/photos/6764725/pexels-photo-6764725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 90,
      },
      {
        id: 20,
        title: "jackets",
        name: "Brown Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1608976198709-5e70a09b9ff0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90,
      },
      {
        id: 21,
        title: "jackets",
        name: "Black Leather Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1592158249887-ac6ae7921691?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 165,
      },
      {
        id: 22,
        title: "jackets",
        name: "Red Jacket",
        imageUrl:
          "https://images.pexels.com/photos/10508561/pexels-photo-10508561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 185,
      },
      {
        id: 36,
        title: "jackets",
        name: "Brown winter jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
      },
      {
        id: 45,
        title: "jackets",
        name: "Green Check Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1616715623022-65d18f0042ae?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
      },

      {
        id: 46,
        title: "jackets",
        name: "Bright Red Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1647125879212-c5e49f29fa06?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
      },
      {
        id: 47,
        title: "jackets",
        name: "White Puffy Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1640501986254-0020f49593fd?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
      },
      {
        id: 48,
        title: "jackets",
        name: "Orange Puffy Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1677123718817-5a203404d638?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
      },
      {
        id: 49,
        title: "jackets",
        name: "Black Puffy Jacket",
        imageUrl:
          "https://images.unsplash.com/photo-1672093977441-949375db52e1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
      },
    ],
  },
  {
    title: "Womens",
    items: [
      {
        id: 23,
        title: "womens",
        name: "Leisure Wear",
        imageUrl:
          "https://plus.unsplash.com/premium_photo-1693242804278-322d05ffcac2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25,
      },
      {
        id: 24,
        name: "Red Matching outfit",
        imageUrl:
          "https://images.unsplash.com/photo-1565325058695-f614c1580d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20,
      },
      {
        id: 25,
        title: "womens",
        name: "Floral Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 80,
      },
      {
        id: 26,
        name: "Blue slim fit",
        imageUrl:
          "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 80,
      },
      {
        id: 27,
        title: "womens",
        name: "White Summer Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 45,
      },
      {
        id: 28,
        title: "womens",
        name: "Long Red Party Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1562349502-153e491776bc?q=80&w=2188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 135,
      },
      {
        id: 29,
        title: "womens",
        name: "Classy Office Dress",
        imageUrl:
          "https://images.unsplash.com/photo-1583846539095-4dd7d202b00f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20,
      },
      {
        id: 37,
        title: "womens",
        name: "Red shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1602562887763-851fa56061e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 60,
      },
      {
        id: 38,
        title: "womens",
        name: "Long Grey Coat",
        imageUrl:
          "https://images.unsplash.com/photo-1541123528198-f724e428cab5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90,
      },
      {
        id: 43,
        title: "womens",
        name: "Skin Color Winter Wear",
        imageUrl:
          "https://images.unsplash.com/photo-1545912193-41b5212f30ee?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90,
      },
      {
        id: 44,
        title: "womens",
        name: "Black womens Suit",
        imageUrl:
          "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90,
      },
      {
        id: 45,
        title: "womens",
        name: "Red half sleeve top",
        imageUrl:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 90,
      },
    ],
  },
  {
    title: "Mens",
    items: [
      {
        id: 30,
        title: "mens",
        name: "Orange top with black pant",
        imageUrl:
          "https://images.pexels.com/photos/10508560/pexels-photo-10508560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 325,
      },
      {
        id: 31,
        title: "mens",
        name: "Orange jumper",
        imageUrl:
          "https://images.unsplash.com/photo-1578476574717-366d862771a0?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 20,
      },
      {
        id: 32,
        title: "mens",
        name: "Black Long Sleeve Top",
        imageUrl:
          "https://images.unsplash.com/photo-1614495039368-525273956716?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25,
      },
      {
        id: 33,
        title: "mens",
        name: "Black Half-Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1599032909527-370ebfaac86f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25,
      },
      {
        id: 34,
        title: "mens",
        name: "Black Kuku Shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1590999659195-e64a988eaf4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 40,
      },
      {
        id: 35,
        title: "mens",
        name: "White Out-Cast T-shirt",
        imageUrl:
          "https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25,
      },
      {
        id: 39,
        title: "mens",
        name: "Blue Suit",
        imageUrl:
          "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 125,
      },
      {
        id: 40,
        title: "mens",
        name: "White Suit with Vertical Strip",
        imageUrl:
          "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 25,
      },
      {
        id: 41,
        title: "mens",
        name: "Grey and Black Suit",
        imageUrl:
          "https://images.unsplash.com/photo-1622497170185-5d668f816a56?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 125,
      },
      {
        id: 42,
        title: "mens",
        name: "Black Suit",
        imageUrl:
          "https://images.unsplash.com/photo-1679101893310-9b9adb4b733b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 155,
      },
      {
        id: 50,
        title: "mens",
        name: "Brownish Tshirt with Black Pant",
        imageUrl:
          "https://images.pexels.com/photos/3116018/pexels-photo-3116018.jpeg",
        price: 155,
      },
      {
        id: 51,
        title: "mens",
        name: "Smiley Tshirt",
        imageUrl:
          "https://images.pexels.com/photos/3822943/pexels-photo-3822943.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 155,
      },
      {
        id: 52,
        title: "mens",
        name: "White Jumper",
        imageUrl:
          "https://images.pexels.com/photos/7431563/pexels-photo-7431563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 155,
      },
    ],
  },
];

export default SHOP_DATA;
