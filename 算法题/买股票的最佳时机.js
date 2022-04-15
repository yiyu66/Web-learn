/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
    let maxProfit = 0, minPrices = Infinity
    prices.forEach(item => {
        minPrices = Math.min(item, minPrices)
        maxProfit = Math.max(item - minPrices, maxProfit)
    })
    return maxProfit
};