const main = (operations) => {
    const result = {
        absProfit: 0,
        portfolio: {

        }
    }

    for (let i = 0; i <= operations.length - 1; i++) {
        const key = operations[i].ticker;
        const product = operations[i].price * operations[i].qnt;

        if (operations[i].type === "BUY") {
            result.absProfit -= product;

            if (result.portfolio[key]) {
                result.portfolio[key] -= product;
            } else {
                result.portfolio[key] = -product;
            }

        } else {
            result.absProfit += product

            if (result.portfolio[key]) {
                result.portfolio[key] += product;
            } else {
                result.portfolio[key] = product;
            }
        }
    }

    return result;
}

module.exports = main;