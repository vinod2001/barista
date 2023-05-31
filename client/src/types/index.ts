export type Products = {
    categoryName: string,
    lists: [{
        name: string,
        price: number,
        id: number,
        discount: null,
        url: string,
        comboId: number
    }]
}

export type Lists = {
    name: string,
    price: number,
    id: number,
    discount: null,
    url: string,
    comboId: number
}

export type Total = {
    subTotal: number,
    salesTax: number,
    discount: number,
    grandTotal: number,
    discountPercentage: number,
}

export type ComboType = {
    discount: string,
    comboId: number,
    combo: [{
        item: string,
        url: string,
    }]
}
export type ComboListType = {
    item: string,
    url: string,
}   
