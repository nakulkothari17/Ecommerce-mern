const products = [
  {
    name: "Redmi Note 10 Pro Max",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81wpfxGtahL._SX679_.jpg",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 499,
    countInStock: 15,
    category:"mobiles",
  },
  {
    name: "Redmi Note 12",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/815Q47HzdgL._SL1500_.jpg",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
    category:"mobiles",
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
    category:"camera",
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
    category:"audio",
  },
  {
    name: "Ai smart Watch",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/61hHrG1ebwL._SL1500_.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
    category:"accessories",
  },

  ///////
  {
    name: "Unique Crocks",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/G/31/img21/shoes/February/SS21/MS/PC/SBC3/SBC-Mens-footwear-3._SY530_QL85_.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 120,
    countInStock: 4,
    category:"footwear",
  },
  {
    name: "Nike smart shoes",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/G/31/img21/shoes/February/SS21/MS/PC/SBC4/SBC-Mens-footwear-4._SY530_QL85_.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 799,
    countInStock: 4,
    category:"footwear",
  },
  {
    name: "Rebook next gen 4",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/G/31/img21/shoes/February/SS21/MS/topbrands/reebok._SS680_QL85_.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 789,
    countInStock: 50,
    category:"footwear",
  },
  {
    name: "Ai smart Mask",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/G/31/img20/Fashion/COVID_Fashion/Mask/4._SS680_QL85_.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 99,
    countInStock: 1000,
    category:"Accessories",
  },
  {
    name: "uniques Mask designer",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/G/31/img20/Fashion/COVID_Fashion/Mask/V5/BALACLAVA._SS680_QL85_.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 250,
    countInStock: 500,
    category:"Accessories",
  },
  ///////
  {
    name: "L classic-o Football",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81qPbd%2BWZEL._SL1500_.jpg",
    description:
      "Football for next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
    category:"games",
  },

  {
      name:'Nike Slim Shirts',
      category:'Shirts',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_04._CB429518094_.jpg',
      price:500,
      countInStock:200,
      
      // rating:4.5,
      // numReview:50,
      description:'From range of exclusive Nike collection',
  },
  {
      
      name:'Nike Girls Shirts',
      category:'Girls Shirts',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/JuneWRS/updatedSBC/tshirt._CB429787231_.jpg',
      price:700,
      countInStock:20,
      description:'From range of exclusive Nike collection',
  },
  {
    name: "Next Gen hand Sanatizer",
    imageUrl:
      "https://images-eu.ssl-images-amazon.com/images/I/41TH03VfLUL._AC_SX184_.jpg",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 49,
    countInStock: 500,
    category:"personal",
  },
  {
     
      name:'Nike Sando',
      category:'Casual',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_11._CB429518094_.jpg',
      price:250,
      countInStock:0,
      description:'From range of exclusive Nike collection',
  },
  {
    name:'Gits Gulab Jamun',
    category:'eatables',
    imageUrl:'https://m.media-amazon.com/images/I/51xVCmE240L.jpg',
    price:220,
    countInStock:12,
    
    description:'From range of exclusive Gits collection sizzling Gilab Jamun',
},
  {
    name: "Hand Crafted Saree",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/JuneWRS/updatedSBC/saree._CB429787229_.jpg",
    description:
      "Saree For Young generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 700,
    countInStock: 10,
    category:"games",
  },
  {
    name:'HEsrsheys Choclates',
    category:'eatables',
    imageUrl:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/Coop21/FebSVD/cadbury_RD-750x375.jpg',
    price:220,
    countInStock:12,
    
    description:'From range of exclusive Nike collection',
},
  {
      
      name:'Nike Slim Shirts',
      category:'Shirts',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_02._CB429518095_.jpg',
      price:500,
      countInStock:50,
      description:'From range of exclusive Nike collection',
  },
  {
      name:'Nike Slim T-Shirts',
      category:'T-Shirts',
      imageUrl:'https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/MA2020/JUNE-WRS/SBC/V3/Men-SBC-3_06._CB429518094_.jpg',
      price:550,
      countInStock:12,
      
      description:'From range of exclusive Nike collection',
  },
];

module.exports = products;