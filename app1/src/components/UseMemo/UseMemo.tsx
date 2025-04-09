import { useMemo, useState } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
}

const ShoppingCard = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1, name: 'pear', price: 1.5
        },
        {
            id: 2, name: 'apple', price: 1
        },
        {
            id: 3, name: 'melon', price: 4
        }
    ]);

    const [discount, setDiscount] = useState<number>(0);

    const totalPrice = useMemo(() => items.reduce((newTotal, item) => newTotal += item.price, 0), [items]); //This will be execute only when "items" change.
    
    // const reducePrice = items.reduce((newArray, item) => {
    //     newArray.push(item.price);
        
    //     return newArray;
    // }, [] as number[])

    // console.log('total price => ', totalPrice);
    // console.log('reducePrice => ', reducePrice);

    const finalPrice = useMemo(() => totalPrice - discount, [totalPrice, discount]); //So if totalPrice or discount change this will execute.

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            name: 'Product ' + items.length + 1,
            price: Math.random() * 5
        }

        setItems([...items, newItem]);
    }


    return (
        <div>
            <h2>List of shopping</h2>

            <ul>
                {
                    items.map(value => (
                        <li key={value.id}>
                            {value.name} : {value.price.toFixed(2)}
                        </li>
                    ))
                } 
            </ul>

            <p>Total Cost: ${totalPrice}</p>

            <p>
                Discount: $<input type = "number" value = {discount} onChange={ e => setDiscount(parseFloat(e.target.value) || 0) } />
            </p>

            <p>Final cost ${finalPrice}</p>

            <button onClick={addItem}>Add product</button>
        </div>
    )
}

export default ShoppingCard;

