const favoriteDrink = [
    {
        nama: "Cappuccino",
        harga: 20000,
        tersedia: true,
        topping: ["Whipped Cream", "Cinnamon"],
        lokasi: {
            kota: "Magetan"
        }
    },
    {
        nama: "Matcha Latte",
        harga: 25000,
        tersedia: true,
        topping: ["Ice Cream", "Cheese Foam"],
        lokasi: {
            kota: "Madiun"
        }
    },
    {
        nama: "Thai Tea Boba",
        harga: 18000,
        tersedia: false,
        topping: ["Milk", "Grass Jelly"],
        lokasi: {
            kota: "Surabaya"
        }
    },
    {
        nama: "Pistachio Latte",
        harga: 30000,
        tersedia: true,
        topping: ["Whipped Cream", "Chocolate Chips"],
        lokasi: {
            kota: "Yogyakarta"
        }
    },
    {
        nama: "Chocolate Milkshake",
        harga: 22000,
        tersedia: true,
        topping: ["Marshmallow", "Chocolate Syrup"],
        lokasi: {
            kota: "Bandung"
        }
    }

];

for (let i = 0; i < favoriteDrink.length; i++) {

    console.log(`\n=== Favorite Drink ${i + 1} ===`);

    for (let key in favoriteDrink[i]) {
        console.log(`${key}:`, favoriteDrink[i][key]);
    }

}