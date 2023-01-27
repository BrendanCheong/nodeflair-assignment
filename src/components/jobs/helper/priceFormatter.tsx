/**
 * Takes a price and adds a comma to every 3 digits
 * So 1000 becomes 1,000
 * And 1000000 becomes 1,000,000
 * @param price number
 * @returns string
 */
export const priceFormatter = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}    
