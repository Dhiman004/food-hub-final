const items = [
    {
        id: 1,
        name: "Margherita",
        price: 99,
        image: "https://img.freepik.com/premium-photo/italian-pizza-margarita-black-background-top-view-free-space-text_275899-410.jpg",
        amount: 1,
    },
    {
        id: 2,
        name: "Garden Delight Pizza",
        price: 140,
        image: "https://lh3.googleusercontent.com/tCKPz3ufCFVtsAcArjWNhK8VS85L2iXte8rqDhi7zJ45IcoaVXDb0B5Nlob59cedH56DbJUtqBbvbiQbrTqHYxGUZL1xeytAE29YRUw",
        amount: 1,
    },
    {
        id: 3,
        name: "Spring Filing Pizza",
        price: 140,
        image: "https://cdnaz.plotch.io/image/upload/w_550/C/V/PLO8NHeB2V1702466451_c0f53e72ff98122a5bc1b921ae4cdeab2f2ac626eb1a09483ad6eccaf5cacc86.jpg",
        amount: 1,
    },
    {
        id: 4,
        name: "Country Side",
        price: 140,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lvdpvmmsuexxtqmdjbp2",
        amount: 1,
    },
    {
        id: 5,
        name: "Garden Special Pizza",
        price: 160,
        image: "https://media-cdn.tripadvisor.com/media/photo-s/1a/c2/97/2f/buddha-garden-pizza.jpg",
        amount: 1,
    },
    {
        id: 6,
        name: "Farm Villa",
        price: 160,
        image: "https://lh3.googleusercontent.com/k2NTeglmS6S0OS9mW-Bkik8ZUnbczPdwFiqJy_N4F43_iM6okwTrpCDsnQ0mKZOYoaVxAgeSPAFuS2KBvsz4HudOcCfPTJ0s40zzllLj=w512-rw",
        amount: 1,
    },
    {
        id: 7,
        name: "Burn To Hell",
        price: 160,
        image: "https://i.pinimg.com/736x/20/f5/51/20f5510a762bdf261ad3c309dd6c6fbe.jpg",
        amount: 1,
    },
    {
        id: 8,
        name: "Peri Peri Veg Pizza",
        price: 180,
        image: "https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/restaurant%2F685551%2Frestaurant220221128110538.jpeg",
        amount: 1,
    },
    {
        id: 9,
        name: "Hot Passion Pizza",
        price: 180,
        image: "https://slice-menu-assets-prod.imgix.net/103981/1706125648_cd95c703b8?fit=crop&w=480&h=480",
        amount: 1,
    },
    {
        id: 10,
        name: "Las Vegas Treat Pizza",
        price: 180,
        image: "https://lh5.googleusercontent.com/Hfm6dB8LYq__Q4OPFYRmj8oAkk3rnJuvvkEIutbW2_el0I5hyHDUVN0irkpKCUyCWT04Ap7PPG7273yg0b0Fn6osfJK82ZRfjrnyBQeiwV-_sKSsRa_0WSg_UzhF2kD6E2qH2nzlk-EkkFV5v9uVdaxCdIDf5upTtqsEjSZOy8zA4_koVH97THdFX1yzNA",
        amount: 1,
    },
    {
        id: 11,
        name: "Onions",
        price: 75,
        image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/07073d703ac8e4e2048128ea59f208a3",
        amount: 1,
    },
    {
        id: 12,
        name: "Sweet Corns",
        price: 85,
        image: "https://www.midwestliving.com/thmb/_xaM6iqD2g4H-XOlD2cS1zUmgB4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sweet-Corn-Pizza-101685028_w_0-597a83191e81495395b2d5084de7132e.jpg",
        amount: 1,
    },
    {
        id: 13,
        name: "Onions & Paneer",
        price: 115,
        image: "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=1200,height=672,format=auto/https://doordash-static.s3.amazonaws.com/media/photos/91d733ce-bf1c-4294-b412-4b6dde982a52-retina-large.jpg",
        amount: 1,
    },
    {
        id: 14,
        name: "Capcicum & Paneer",
        price: 115,
        image: "https://i.pinimg.com/564x/e2/07/2c/e2072cfd98096b1be40186b5a10b1035.jpg",
        amount: 1,
    },
    {
        id: 15,
        name: "Mexicana",
        price: 169,
        image: "https://static.toiimg.com/photo/93068647.cms",
        amount: 1,
    },
    {
        id: 16,
        name: "Italiano",
        price: 169,
        image: "https://www.indianveggiedelight.com/wp-content/uploads/2022/12/white-sauce-pasta-featured.jpg",
        amount: 1,
    },
    {
        id: 17,
        name: "Mix Sauce",
        price: 169,
        image: "https://aartimadan.com/wp-content/uploads/2020/07/White-Sauce-Pasta.jpg",
        amount: 1,
    },
    {
        id: 18,
        name: "Paneer, Sweet Corn and Cheese",
        price: 129,
        image: "https://t3.ftcdn.net/jpg/06/17/39/44/360_F_617394412_tdBld0pWwFLeeLKitDCk0TYb5xymcabP.jpg",
        amount: 1,
    },
    {
        id: 19,
        name: "Mushroom, Olives and Cheese",
        price: 129,
        image: "https://www.foodandwine.com/thmb/Cwd1RrdtjUS3DBqWT9eGrRBFlSM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Mushroom-Reuben-Quesadilla-FT-RECIPE0321-199e3d7edb924572b1a7c2b1369db6a9.jpg",
        amount: 1,
    },
    {
        id: 20,
        name: "Veggie Mexican",
        price: 129,
        image: "https://curlytales.com/wp-content/uploads/2023/08/quesadilla.jpg",
        amount: 1,
    },
    {
        id: 21,
        name: "Mushroom, Corns and Onions",
        price: 129,
        image: "https://static.vecteezy.com/system/resources/previews/023/186/683/large_2x/tacos-with-meat-and-vegetables-on-a-black-background-with-smoke-ai-generative-image-free-photo.jpg",
        amount: 1,
    },
    
];

export default items;
