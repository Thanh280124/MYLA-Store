 const products = [
      { 
        id: 1, 
        name: "Tôm Big Ray 16/20", 
        price: "11 euro", 
        image: "/assets/product 1.jpg",
        description: "Tôm 16/20 tươi sống, chất lượng cao, thích hợp cho các món ăn hải sản như tôm nướng, hấp hoặc xào."
      },
      { 
        id: 2, 
        name: "Tôm Big Ray 20/330", 
        price: "10 euro",
        image: "assets/product 2.jpg", 
        description: "Tôm 20/330 tươi ngon, giàu dinh dưỡng, lý tưởng cho các món salad hoặc súp hải sản."
      },
      { 
        id: 3, 
        name: "Tôm (Asian Choice) 16/20", 
        price: "12 euro",
        image: "assets/product 3.jpg", 
        description: "Tôm 16/20 Asian Choice, tươi ngon, chất lượng cao, thích hợp cho các món ăn châu Á như xào hoặc nướng."
      },
      { 
        id: 4, 
        name: "Tôm DAYSEEDAY 13/15", 
        price: "12 euro",
        image: "assets/product 4.jpg", 
        description: "Tôm DAYSEEDAY 13/15, tươi sống, chất lượng cao, thích hợp cho các món ăn hải sản như tôm hấp hoặc nướng."
      },
      { 
        id: 5, 
        name: "Cá Tra ", 
        price: "6 euro",
        image: "assets/product 5.jpg", 
        description: "Cá Tra tươi ngon, giàu dinh dưỡng, lý tưởng cho các món chiên hoặc nướng."
      },
        { 
            id: 6, 
            name: "Mực Trứng", 
            price: "12 euro",
            image: "assets/product 6.jpg", 
            description: "Mực Trứng tươi sống, chất lượng cao, thích hợp cho các món nướng hoặc xào với rau củ."
        },
        { 
            id: 7, 
            name: "Vẹm Xanh", 
            price: "12.55 euro",
            image: "assets/product 7.jpg", 
            description: "Vẹm Xanh tươi ngon, giàu dinh dưỡng, lý tưởng cho các món súp hoặc nướng với tỏi và bơ."
        },
        { 
            id: 8, 
            name: "Ốc Hương", 
            price: "11 euro",
            image: "assets/product 8.jpg", 
            description: "Ốc Hương tươi sống, chất lượng cao, thích hợp cho các món xào hoặc nướng với gia vị đặc trưng."
        },
        { 
            id: 9, 
            name: "Gà (1.3kg)", 
            price: "5.7 euro",
            image: "assets/product 9.jpg", 
            description: "Gà tươi sống, trọng lượng 1.3kg, lý tưởng cho các món nướng hoặc hầm với rau củ và gia vị."
        },
        { 
            id: 10, 
            name: "Gà (1.6kg)", 
            price: "7.5 euro",
            image: "assets/product 10.jpg", 
            description: "Gà tươi sống, trọng lượng 1.6kg, thích hợp cho các món nướng hoặc hầm, mang lại hương vị đậm đà và thơm ngon."
        },
        { 
            id: 11, 
            name: "Chân Gà", 
            price: "44.5 euro",
            image: "assets/product 11.jpg", 
            description: "Chân Gà tươi sống, chất lượng cao, thích hợp cho các món xào hoặc nướng, mang lại hương vị đặc trưng và giòn ngon."
        },
        { 
            id: 12, 
            name: "Vịt (1.5kg)", 
            price: "12 euro",
            image: "assets/product 12.jpg", 
            description: "Vịt tươi sống, trọng lượng 1.5kg, lý tưởng cho các món nướng hoặc hầm, mang lại hương vị đậm đà và thơm ngon."
        },
        { 
            id: 13, 
            name: "Vịt (2.1kg)", 
            price: "16 euro",
            image: "assets/product 13.jpg", 
            description: "Vịt tươi sống, trọng lượng 2.1kg, thích hợp cho các món nướng hoặc hầm, mang lại hương vị đậm đà và thơm ngon."
        },
        { 
            id: 14, 
            name: "Sấu", 
            price: "4.55 euro",
            image: "assets/product 14.jpg", 
            description: "Sấu tươi ngon, chất lượng cao, thích hợp cho các món canh hoặc nấu với thịt, mang lại hương vị chua thanh và thơm mát."
        },
        { 
            id: 15, 
            name: "Tương ớt Chinsu", 
            price: "22 euro",
            image: "assets/product 15.jpg", 
            description: "Tương ớt Chinsu, gia vị cay nồng, thích hợp cho các món ăn Việt Nam, mang lại hương vị đậm đà và thơm ngon."
        },
        { 
            id: 16, 
            name: "Cafe G7", 
            price: "5.55 euro",
            image: "assets/product 16.jpg", 
            description: "Cafe G7, cà phê hòa tan chất lượng cao, mang lại hương vị đậm đà và thơm ngon, lý tưởng cho những ai yêu thích cà phê tiện lợi."
        },
        { 
            id: 17, 
            name: "Bánh Hỏi", 
            price: "2.88 euro",
            image: "assets/product 17.jpg", 
            description: "Bánh Hỏi, món ăn truyền thống Việt Nam, được làm từ bột gạo, có vị ngọt nhẹ và thường được dùng kèm với thịt nướng hoặc nước mắm chua ngọt."
        },
        { 
            id: 18, 
            name: "Bún Tươi", 
            price: "2 euro",
            image: "assets/product 18.jpg", 
            description: "Bún Tươi, sợi bún mềm mịn, được làm từ gạo tươi, thường được dùng trong các món bún nước hoặc bún xào, mang lại hương vị thơm ngon và dễ ăn."
        },
        { 
            id: 19, 
            name: "Bún Tươi 2", 
            price: "2 euro",
            image: "assets/product 19.jpg", 
            description: "Bún Tươi 2, sợi bún mềm mịn, được làm từ gạo tươi, thường được dùng trong các món bún nước hoặc bún xào, mang lại hương vị thơm ngon và dễ ăn."
        },
        { 
            id: 20, 
            name: "Miến Dong", 
            price: "3.2 euro",
            image: "assets/product 20.jpg", 
            description: "Miến Dong, sợi miến trong suốt, được làm từ bột dong riềng, thường được dùng trong các món canh hoặc xào, mang lại hương vị thanh mát và dễ ăn."
        },
        { 
            id: 21, 
            name: "Bún bò Huế", 
            price: "2 euro",
            image: "assets/product 21.jpg", 
            description: "Bún bò Huế, món ăn đặc sản của miền Trung Việt Nam, với sợi bún to, nước dùng đậm đà từ xương bò và gia vị truyền thống, mang lại hương vị thơm ngon và hấp dẫn."
        },
        { 
            id: 22, 
            name: "Bánh Phồng Tôm", 
            price: "6.5 euro",
            image: "assets/product 22.jpg", 
            description: "Bánh Phồng Tôm, món ăn vặt truyền thống Việt Nam, được làm từ bột tôm và bột gạo, có vị giòn tan và thường được dùng kèm với nước mắm chua ngọt hoặc tương ớt."
        }
    ];

 export default products;