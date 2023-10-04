

const initiale = {
    products: [],

}

const productreducer = (state = initiale, action) => {


    switch (action.type) {
        // case 'ADD_CART':
        //     const find = state.products.findIndex((item) => item.id === action.payload.id)
        //     if (find >= 0) {
        //         return (
        //             state.products[find].data

        //         )
        //     }
        //     else {
        //         return (
        //             {
        //                 ...state,
        //                 products: [...state.products, action.payload.data]
        //             }

        //         )
        //     }



        // case 'REMOVE_CART':

        //     let removedata = state.products

        //     let allproducts = removedata.filter((delet, id) => {
        //         return delet.id != action.payload
        //     })

        //     return (
        //         {
        //             ...state,
        //             products: allproducts
        //         }

        //     )

        // case 'INC':

        //     const id = action.payload

        //     const inccartitem = state.products.map((item) => {
        //         return item.id === id ? { ...item, qty: (item.qty || 1 ) + 1 } : item
        //     })

        //     return (
        //         {
        //             ...state,
        //             products: inccartitem
        //         }

        //     )


        // case 'DEC':

        //     const decid = action.payload
            
        //     const deccartitem = state.products.map((item) => {

        //         if(item.id === decid && item.qty > 1)
        //         {
        //             return { ...item, qty: (item.qty || 1 ) - 1 }
        //         }
        //         return item

        //     })
        //     .filter((item) => item.qty > 0)

        //     return (
        //         {
        //             ...state,
        //             products: deccartitem
        //         }

        //     )

        default:
            return state

    }


}

export default productreducer
