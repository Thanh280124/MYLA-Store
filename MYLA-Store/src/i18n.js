// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  vi: {
    translation: {
      // Header
      storeName: "MYLA Store",
      home: "Trang chủ",
      product: "Sản Phẩm",
      contact: "Liên Hệ",
      // Hero
      welcome: "Chào mừng đến với MYLA Store",
      welcomeSubtitle: "Nơi bạn tìm thấy những đồ ăn tốt nhất cho cuộc sống hàng ngày, ngon bổ rẻ! Hãy mua ngay",
      explore: "Khám Phá Ngay",
      // Products
      productsTitle: "Sản Phẩm",
      searchPlaceholder: "Tìm kiếm sản phẩm...",
      close: "Đóng",
      // Contact
      contactTitle: "Liên Hệ Với MYLA Store",
      phone: "Số Điện Thoại",
      address: "Địa Chỉ",
      seller: "Người Bán",
      sellerEmail: "Email",
      // Footer
      email: "Email",
      phone2: "Số điện thoại",
      slogan: "MYLA Store - Tươi Ngon Mỗi Ngày, Chất Lượng Đỉnh Cao!",
      copyright: "© 2025 MYLA Store. Tất cả quyền được bảo lưu.",
      // Products (tên và mô tả)
      products: {
        1: { name: "Tôm Big Ray 16/20", description: "Tôm 16/20 tươi sống, chất lượng cao, thích hợp cho các món ăn hải sản như tôm nướng, hấp hoặc xào." },
        2: { name: "Tôm Big Ray 20/330", description: "Tôm 20/330 tươi ngon, giàu dinh dưỡng, lý tưởng cho các món salad hoặc súp hải sản." },
        3: { name: "Tôm (Asian Choice) 16/20", description: "Tôm 16/20 Asian Choice, tươi ngon, chất lượng cao, thích hợp cho các món ăn châu Á như xào hoặc nướng." },
        4: { name: "Tôm DAYSEEDAY 13/15", description: "Tôm DAYSEEDAY 13/15, tươi sống, chất lượng cao, thích hợp cho các món ăn hải sản như tôm hấp hoặc nướng." },
        5: { name: "Cá Tra", description: "Cá Tra tươi ngon, giàu dinh dưỡng, lý tưởng cho các món chiên hoặc nướng." },
        6: { name: "Mực Trứng", description: "Mực Trứng tươi sống, chất lượng cao, thích hợp cho các món nướng hoặc xào với rau củ." },
        7: { name: "Vẹm Xanh", description: "Vẹm Xanh tươi ngon, giàu dinh dưỡng, lý tưởng cho các món súp hoặc nướng với tỏi và bơ." },
        8: { name: "Ốc Hương", description: "Ốc Hương tươi sống, chất lượng cao, thích hợp cho các món xào hoặc nướng với gia vị đặc trưng." },
        9: { name: "Gà (1.3kg)", description: "Gà tươi sống, trọng lượng 1.3kg, lý tưởng cho các món nướng hoặc hầm với rau củ và gia vị." },
        10: { name: "Gà (1.6kg)", description: "Gà tươi sống, trọng lượng 1.6kg, thích hợp cho các món nướng hoặc hầm, mang lại hương vị đậm đà và thơm ngon." },
        11: { name: "Chân Gà", description: "Chân Gà tươi sống, chất lượng cao, thích hợp cho các món xào hoặc nướng, mang lại hương vị đặc trưng và giòn ngon." },
        12: { name: "Vịt (1.5kg)", description: "Vịt tươi sống, trọng lượng 1.5kg, lý tưởng cho các món nướng hoặc hầm, mang lại hương vị đậm đà và thơm ngon." },
        13: { name: "Vịt (2.1kg)", description: "Vịt tươi sống, trọng lượng 2.1kg, thích hợp cho các món nướng hoặc hầm, mang lại hương vị đậm đà và thơm ngon." },
        14: { name: "Sấu", description: "Sấu tươi ngon, chất lượng cao, thích hợp cho các món canh hoặc nấu với thịt, mang lại hương vị chua thanh và thơm mát." },
        15: { name: "Tương ớt Chinsu", description: "Tương ớt Chinsu, gia vị cay nồng, thích hợp cho các món ăn Việt Nam, mang lại hương vị đậm đà và thơm ngon." },
        16: { name: "Cafe G7", description: "Cafe G7, cà phê hòa tan chất lượng cao, mang lại hương vị đậm đà và thơm ngon, lý tưởng cho những ai yêu thích cà phê tiện lợi." },
        17: { name: "Bánh Hỏi", description: "Bánh Hỏi, món ăn truyền thống Việt Nam, được làm từ bột gạo, có vị ngọt nhẹ và thường được dùng kèm với thịt nướng hoặc nước mắm chua ngọt." },
        18: { name: "Bún Tươi", description: "Bún Tươi, sợi bún mềm mịn, được làm từ gạo tươi, thường được dùng trong các món bún nước hoặc bún xào, mang lại hương vị thơm ngon và dễ ăn." },
        19: { name: "Bún Tươi 2", description: "Bún Tươi 2, sợi bún mềm mịn, được làm từ gạo tươi, thường được dùng trong các món bún nước hoặc bún xào, mang lại hương vị thơm ngon và dễ ăn." },
        20: { name: "Miến Dong", description: "Miến Dong, sợi miến trong suốt, được làm từ bột dong riềng, thường được dùng trong các món canh hoặc xào, mang lại hương vị thanh mát và dễ ăn." },
        21: { name: "Bún bò Huế", description: "Bún bò Huế, món ăn đặc sản của miền Trung Việt Nam, với sợi bún to, nước dùng đậm đà từ xương bò và gia vị truyền thống, mang lại hương vị thơm ngon và hấp dẫn." },
        22: { name: "Bánh Phồng Tôm", description: "Bánh Phồng Tôm, món ăn vặt truyền thống Việt Nam, được làm từ bột tôm và bột gạo, có vị giòn tan và thường được dùng kèm với nước mắm chua ngọt hoặc tương ớt." },
      }
    }
  },
  en: {
    translation: {
      // Header
      storeName: "MYLA Store",
      home: "Home",
      product: "Products",
      contact: "Contact",
      // Hero
      welcome: "Welcome to MYLA Store",
      welcomeSubtitle: "Where you find the best food for daily life, delicious, nutritious, and affordable! Shop now",
      explore: "Explore Now",
      // Products
      productsTitle: "Products",
      searchPlaceholder: "Search for products...",
      close: "Close",
      // Contact
      contactTitle: "Contact MYLA Store",
      phone: "Phone Number",
      address: "Address",
      seller: "Seller",
      sellerEmail: "Email",
      // Footer
      email: "Email",
      phone2: "Phone",
      slogan: "MYLA Store - Fresh Every Day, Top Quality!",
      copyright: "© 2025 MYLA Store. All rights reserved.",
      // Products
      products: {
        1: { name: "Big Ray Shrimp 16/20", description: "Fresh 16/20 shrimp, high quality, perfect for seafood dishes like grilling, steaming, or stir-frying." },
        2: { name: "Big Ray Shrimp 20/330", description: "Fresh and nutritious 20/330 shrimp, ideal for salads or seafood soups." },
        3: { name: "Asian Choice Shrimp 16/20", description: "Fresh and high-quality Asian Choice 16/20 shrimp, suitable for Asian dishes like stir-frying or grilling." },
        4: { name: "DAYSEEDAY Shrimp 13/15", description: "Fresh DAYSEEDAY 13/15 shrimp, high quality, suitable for seafood dishes like steaming or grilling." },
        5: { name: "Pangasius Fish", description: "Fresh and nutritious Pangasius fish, ideal for frying or grilling." },
        6: { name: "Squid Eggs", description: "Fresh and high-quality squid eggs, suitable for grilling or stir-frying with vegetables." },
        7: { name: "Green Mussels", description: "Fresh and nutritious green mussels, ideal for soups or grilling with garlic and butter." },
        8: { name: "Perfume Snails", description: "Fresh and high-quality perfume snails, suitable for stir-frying or grilling with special spices." },
        9: { name: "Chicken (1.3kg)", description: "Fresh chicken, 1.3kg, ideal for grilling or stewing with vegetables and spices." },
        10: { name: "Chicken (1.6kg)", description: "Fresh chicken, 1.6kg, suitable for grilling or stewing, offering rich and delicious flavor." },
        11: { name: "Chicken Feet", description: "Fresh and high-quality chicken feet, suitable for stir-frying or grilling, offering a distinctive and crunchy taste." },
        12: { name: "Duck (1.5kg)", description: "Fresh duck, 1.5kg, ideal for grilling or stewing, offering rich and delicious flavor." },
        13: { name: "Duck (2.1kg)", description: "Fresh duck, 2.1kg, suitable for grilling or stewing, offering rich and delicious flavor." },
        14: { name: "Sour Plum", description: "Fresh and high-quality sour plums, suitable for soups or cooking with meat, offering a tangy and refreshing taste." },
        15: { name: "Chinsu Chili Sauce", description: "Chinsu chili sauce, spicy and flavorful, suitable for Vietnamese dishes, offering a rich and delicious taste." },
        16: { name: "G7 Coffee", description: "G7 instant coffee, high quality, offering a rich and delicious flavor, ideal for coffee lovers seeking convenience." },
        17: { name: "Bánh Hỏi", description: "Bánh Hỏi, a traditional Vietnamese dish made from rice flour, with a light sweet taste, often served with grilled meat or sweet and sour fish sauce." },
        18: { name: "Fresh Vermicelli", description: "Fresh vermicelli, soft and smooth, made from fresh rice, often used in noodle soups or stir-fried dishes, offering a delicious and easy-to-eat flavor." },
        19: { name: "Fresh Vermicelli 2", description: "Fresh vermicelli 2, soft and smooth, made from fresh rice, often used in noodle soups or stir-fried dishes, offering a delicious and easy-to-eat flavor." },
        20: { name: "Dong Rieu Noodles", description: "Dong Rieu noodles, transparent noodles made from arrowroot flour, often used in soups or stir-fried dishes, offering a light and refreshing taste." },
        21: { name: "Huế Beef Noodle", description: "Huế beef noodle, a specialty of Central Vietnam, with thick noodles and rich broth from beef bones and traditional spices, offering a delicious and appealing flavor." },
        22: { name: "Shrimp Crackers", description: "Shrimp crackers, a traditional Vietnamese snack, made from shrimp and rice flour, with a crispy texture, often served with sweet and sour fish sauce or chili sauce." },
      }
    }
  },
  sv: {
    translation: {
      // Header
      storeName: "MYLA Butik",
      home: "Hem",
      product: "Produkter",
      contact: "Kontakt",
      // Hero
      welcome: "Välkommen till MYLA Store",
      welcomeSubtitle: "Här hittar du de bästa livsmedlen för vardagen, läckra, näringsrika och prisvärda! Handla nu",
      explore: "Utforska nu",
      // Products
      productsTitle: "Produkter",
      searchPlaceholder: "Sök efter produkter...",
      close: "Stäng",
      // Contact
      contactTitle: "Kontakta MYLA Store",
      phone: "Telefonnummer",
      address: "Adress",
      seller: "Säljare",
      sellerEmail: "E-post",
      // Footer
      email: "E-post",
      phone2: "Telefon",
      slogan: "MYLA Store - Färskt varje dag, toppkvalitet!",
      copyright: "© 2025 MYLA Store. Alla rättigheter förbehållna.",
      // Products
      products: {
        1: { name: "Big Ray Räkor 16/20", description: "Färska 16/20 räkor, hög kvalitet, perfekta för skaldjursrätter som grillning, ångning eller wok." },
        2: { name: "Big Ray Räkor 20/330", description: "Färska och näringsrika 20/330 räkor, idealiska för sallader eller skaldjurssoppor." },
        3: { name: "Asian Choice Räkor 16/20", description: "Färska och högkvalitativa Asian Choice 16/20 räkor, lämpliga för asiatiska rätter som wok eller grillning." },
        4: { name: "DAYSEEDAY Räkor 13/15", description: "Färska DAYSEEDAY 13/15 räkor, hög kvalitet, lämpliga för sk다ljursrätter som ångning eller grillning." },
        5: { name: "Pangasiusfisk", description: "Färsk och näringsrik Pangasiusfisk, idealisk för stekning eller grillning." },
        6: { name: "Bläckfiskägg", description: "Färska och högkvalitativa bläckfiskägg, lämpliga för grillning eller wok med grönsaker." },
        7: { name: "Gröna Musslor", description: "Färska och näringsrika gröna musslor, idealiska för soppor eller grillning med vitlök och smör." },
        8: { name: "Parfymsniglar", description: "Färska och högkvalitativa parfymsniglar, lämpliga för wok eller grillning med speciella kryddor." },
        9: { name: "Kyckling (1,3 kg)", description: "Färsk kyckling, 1,3 kg, idealisk för grillning eller stuvning med grönsaker och kryddor." },
        10: { name: "Kyckling (1,6 kg)", description: "Färsk kyckling, 1,6 kg, lämplig för grillning eller stuvning, med rik och läcker smak." },
        11: { name: "Kycklingfötter", description: "Färska och högkvalitativa kycklingfötter, lämpliga för wok eller grillning, med en distinkt och krispig smak." },
        12: { name: "Anka (1,5 kg)", description: "Färsk anka, 1,5 kg, idealisk för grillning eller stuvning, med rik och läcker smak." },
        13: { name: "Anka (2,1 kg)", description: "Färsk anka, 2,1 kg, lämplig för grillning eller stuvning, med rik och läcker smak." },
        14: { name: "Sura Plommon", description: "Färska och högkvalitativa sura plommon, lämpliga för soppor eller matlagning med kött, med en syrlig och uppfriskande smak." },
        15: { name: "Chinsu Chilisås", description: "Chinsu chilisås, kryddig och smakrik, lämplig för vietnamesiska rätter, med en rik och läcker smak." },
        16: { name: "G7 Kaffe", description: "G7 snabbkaffe, hög kvalitet, med en rik och läcker smak, idealisk för kaffeälskare som söker bekvämlighet." },
        17: { name: "Bánh Hỏi", description: "Bánh Hỏi, en traditionell vietnamesisk rätt gjord av rismjöl, med en lätt söt smak, ofta serverad med grillat kött eller söt och sur fisksås." },
        18: { name: "Färska Vermicelli", description: "Färska vermicelli, mjuka och släta, gjorda av färskt ris, ofta använda i nudelsoppor eller wokade rätter, med en läcker och lättsmält smak." },
        19: { name: "Färska Vermicelli 2", description: "Färska vermicelli 2, mjuka och släta, gjorda av färskt ris, ofta använda i nudelsoppor eller wokade rätter, med en läcker och lättsmält smak." },
        20: { name: "Dong Rieu Nudlar", description: "Dong Rieu nudlar, transparenta nudlar gjorda av arrowrootmjöl, ofta använda i soppor eller wokade rätter, med en lätt och uppfriskande smak." },
        21: { name: "Huế Biffnudlar", description: "Huế biffnudlar, en specialitet från centrala Vietnam, med tjocka nudlar och rik buljong från nötköttsben och traditionella kryddor, med en läcker och tilltalande smak." },
        22: { name: "Räkkex", description: "Räkkex, ett traditionellt vietnamesiskt mellanmål, gjort av räkor och rismjöl, med en krispig textur, ofta serverat med söt och sur fisksås eller chilisås." },
      }
    },
  },

   fi: {
  translation: {
    // Header
    storeName: "MYLA Kauppa",
    home: "Koti",
    product: "Tuotteet",
    contact: "Yhteystiedot",
    // Hero
    welcome: "Tervetuloa MYLA Kauppaan",
    welcomeSubtitle: "Täältä löydät parhaat elintarvikkeet arkeen – herkullisia, ravitsevia ja edullisia! Osta nyt",
    explore: "Tutustu nyt",
    // Products
    productsTitle: "Tuotteet",
    searchPlaceholder: "Etsi tuotteita...",
    close: "Sulje",
    // Contact
    contactTitle: "Ota yhteyttä MYLA Kauppaan",
    phone: "Puhelinnumero",
    address: "Osoite",
    seller: "Myyjä",
    sellerEmail: "Sähköposti",
    // Footer
    email: "Sähköposti",
    phone2: "Puhelin",
    slogan: "MYLA Kauppa – Tuoretta joka päivä, huippulaatua!",
    copyright: "© 2025 MYLA Kauppa. Kaikki oikeudet pidätetään.",
    // Products
    products: {
      1: { name: "Big Ray Katkaravut 16/20", description: "Tuoreet 16/20 katkaravut, korkealaatuisia, täydellisiä äyriäisruokiin kuten grillaus, höyrytys tai wok." },
      2: { name: "Big Ray Katkaravut 20/330", description: "Tuoreet ja ravitsevat 20/330 katkaravut, ihanteellisia salaatteihin tai äyriäiskeittoihin." },
      3: { name: "Asian Choice Katkaravut 16/20", description: "Tuoreet ja korkealaatuiset Asian Choice 16/20 katkaravut, sopivat aasialaisiin ruokiin kuten wokkiin tai grilliin." },
      4: { name: "DAYSEEDAY Katkaravut 13/15", description: "Tuoreet DAYSEEDAY 13/15 katkaravut, korkealaatuisia, sopivia äyriäisruokiin kuten höyrytys tai grillaus." },
      5: { name: "Pangas-kala", description: "Tuore ja ravitseva pangasius-kala, ihanteellinen paistamiseen tai grillaamiseen." },
      6: { name: "Mustekalan munat", description: "Tuoreet ja korkealaatuiset mustekalan munat, sopivia grilliin tai wokkiin vihannesten kanssa." },
      7: { name: "Vihreät simpukat", description: "Tuoreet ja ravitsevat vihreät simpukat, ihanteellisia keittoihin tai grilliin valkosipulin ja voin kera." },
      8: { name: "Hajusteen kotilot", description: "Tuoreet ja korkealaatuiset hajusteen kotilot, sopivia wokkiin tai grilliin erityisten mausteiden kanssa." },
      9: { name: "Kana (1,3 kg)", description: "Tuore kana, 1,3 kg, ihanteellinen grilliin tai haudutukseen vihannesten ja mausteiden kanssa." },
      10: { name: "Kana (1,6 kg)", description: "Tuore kana, 1,6 kg, sopiva grilliin tai haudutukseen, rikkaalla ja herkullisella maulla." },
      11: { name: "Kananjalat", description: "Tuoreet ja korkealaatuiset kanan jalat, sopivia wokkiin tai grilliin, erottuvalla ja rapealla maulla." },
      12: { name: "Ankka (1,5 kg)", description: "Tuore ankka, 1,5 kg, ihanteellinen grilliin tai haudutukseen, rikkaalla ja herkullisella maulla." },
      13: { name: "Ankka (2,1 kg)", description: "Tuore ankka, 2,1 kg, sopiva grilliin tai haudutukseen, rikkaalla ja herkullisella maulla." },
      14: { name: "Hapankuulumat", description: "Tuoreet ja korkealaatuiset hapankuulumat, sopivat keittoihin tai liharuokien kanssa, happamalla ja virkistävällä maulla." },
      15: { name: "Chinsu Chilikastike", description: "Chinsu chilikastike, tulinen ja maukas, sopii vietnamilaisiin ruokiin, rikkaalla ja herkullisella maulla." },
      16: { name: "G7 Kahvi", description: "G7 pikakahvi, korkealaatuinen, rikkaalla ja herkullisella maulla, ihanteellinen kahvin ystäville, jotka arvostavat helppoutta." },
      17: { name: "Bánh Hỏi", description: "Bánh Hỏi, perinteinen vietnamilainen ruoka valmistettu riisijauhosta, hieman makea maku, usein tarjoillaan grillatun lihan tai hapanimelän kalakastikkeen kanssa." },
      18: { name: "Tuoreet Vermisellit", description: "Tuoreet vermisellit, pehmeät ja sileät, valmistettu tuoreesta riisistä, usein käytetty nuudelikeitoissa tai wokkiruoissa." },
      19: { name: "Tuoreet Vermisellit 2", description: "Tuoreet vermisellit 2, pehmeät ja sileät, valmistettu tuoreesta riisistä, usein käytetty nuudelikeitoissa tai wokkiruoissa." },
      20: { name: "Dong Rieu Nuudelit", description: "Dong Rieu nuudelit, läpinäkyvät nuudelit valmistettu nuolenjuurijauhosta, usein käytetty keitoissa tai wokkiruoissa, kevyellä ja virkistävällä maulla." },
      21: { name: "Huế-naudanlihanuudelit", description: "Huế naudanlihanuudelit, Keski-Vietnamin erikoisuus, paksut nuudelit ja rikas liemi naudan luista ja perinteisistä mausteista." },
      22: { name: "Katkarapulastut", description: "Katkarapulastut, perinteinen vietnamilainen välipala, valmistettu katkaravuista ja riisijauhosta, rapea koostumus, tarjoillaan usein hapanimelän kalakastikkeen tai chilikastikkeen kanssa." },
    }
  }
}
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi', 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;