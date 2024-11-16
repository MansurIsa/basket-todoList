export const initialState={
    products: [
        {
            id: 1,
            title: "telefon",
            price: 5
        },
        {
            id: 2,
            title: "planset",
            price: 7
        },
        {
            id: 3,
            title: "komputer",
            price: 8
        }
    ],
    basket: JSON.parse(localStorage.getItem("basket")) || [],





    countries: []
}