    // Step 2 Create an array
      let products = [
        { name: "Skate Blades", category: "Skate", price: 39.99, inventory: 25 },
        { name: "Helmet", category: "Headwear",    price: 79.99, inventory: 32 },
        { name: "Stick",  category: "Equipment", price: 129.99,  inventory: 60 },
        { name: "Knee Pads",  category: "Padding", price: 35.99, inventory: 8 },
        { name: "Tape", category: "Miscellaneous", price: 5.99, inventory: 40 },
     ];

     console.log(products)
    //Step 3 Write a for...of loop
     for(let p of products) {
        let discount =0;
        switch (products.category) {
            case "Skate": discount = .25; break;
            case "Headwear": discount = .10; break;
            case "Equipment": discount = .15; break;
            case "Padding": discount = .30; break;
            case "Miscellaneous": discount = .05; break;
            default: discount = 0; break;}
            products.promoPrice = (p.price * (1 - discount)).toFixed(2);
        }
        console.log (products.promoPrice)
    //Step 4 Create a Variable
        let customerType = "Athlete";
        let extraDiscount;

        if (customerType === "Athlete") {extraDiscount = .05;}
        else if (customerType === "student") {extraDiscount = .10;}
        else {extraDiscount = 0;}

        console.log(`Extra discount for ${customerType}: ${extraDiscount * 100}%`);
    //Step 5 Checkout Process & Inventory
        for (let i = 1; i <= 3; i++) {
        let subtotal = 0;

         for (let p of products) {
            if (p.inventory > 0) {
            subtotal += parseFloat(p.promoPrice);
            p.inventory--;} }

        let extraDiscount;

        if (customerType === "Athlete") {extraDiscount = .05;}
        else if (customerType === "student") {extraDiscount = .10;}
        else {extraDiscount = 0;}

    let finalTotal = subtotal * (1 - extraDiscount);
    console.log(`Customer ${i}: $${finalTotal.toFixed(2)}`);}

    console.log("Remaining inventory:", products);
    //Step 6 Use for...in to log