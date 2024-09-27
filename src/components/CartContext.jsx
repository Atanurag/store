import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items,setItems] = useState([{
        name: 'Masala Dosa',
        description: 'Dosa stuffed with spiced potato filling',
        price: 60,
        isVeg: true,
        tag: 'Main Course',
        quantity: 0,
        gram:'100 g',
        img: 'https://media.istockphoto.com/id/183321245/photo/south-indian-crepe-masala-dosa.jpg?s=612x612&w=0&k=20&c=c6Z7P5uovp2M9JVS0rlS8nCKRL73QkTYRyL7FK348Os=',
      },
        {
          name: 'Pav Bhaji',
          description: 'Spiced mixture of mashed vegetables in a thick gravy served with pav',
          price: 40,
          isVeg: true,
          tag: 'Classic',
          quantity: 0,
          gram:'100 g',
          img: 'https://w0.peakpx.com/wallpaper/805/956/HD-wallpaper-food-delicious-food-food-holidays-indian-indian-food-pav-bhaji-spicy-food-street-food.jpg',
        },
        {
          name: 'Filter Coffee',
          description:
            'Strong coffee brewed in a traditional South Indian filter',
          price: 1,
          isVeg: true,
          tag: 'Beverage',
          quantity: 0,
          gram:'20 g',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJz_8ItU9p_au1RhX_uEZXEXpaAOB1nSCPQ&s'
        }])
    const [cart, setCart] = useState([]);
    const totalItems = cart.reduce((ac, cu) => ac += cu.quantity, 0);
    const totalAmount = cart.reduce((ac, cu) => ac += (cu.quantity * cu.price),0)
    useEffect(() => {
        console.log(cart)
    }, [cart])
    const addToCart = (item) => {
        const existingItem = cart.find((i) => i.name === item.name);
        if (existingItem) {
            setCart(
                cart.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity += 1 } : i))
            );
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const increaseItemToOne = (e) =>{
        setItems((js)=>
        js.map((si,ind)=>{
          if(si.name === e.name){
            return {
              ...si,
              quantity : 1
            }
          }
          return si;
        })
        )
    }
    const increaseItem = (e) =>{
        setItems((js)=>
        js.map((si,ind)=>{
          if(si.name === e.name){
            return {
              ...si,
              quantity : si.quantity+=1
            }
          }
          return si;
        })
        )
    }
    const decreaseItem = (e) =>{
        setItems((js)=>
        js.map((si,ind)=>{
          if(si.name === e.name){
            return {
              ...si,
              quantity : si.quantity-=1
            }
          }
          return si;
        })
        )
    }
    const removeFromCart = (item) => {
        setCart((prevCart) =>
            prevCart.map((data) => {
                if (data.name === item.name) {
                    return { ...data, quantity: data.quantity - 1 };
                }
                return data;
            }).filter((data) => data.quantity > 0)
        );
    };


    const updateQuantity = (itemId, quantity) => {
        setCart(
            cart.map((i) => (i.id === itemId ? { ...i, quantity } : i))
        );
    };

    return (
        <CartContext.Provider value={{ items,cart, totalItems, totalAmount, addToCart, removeFromCart, updateQuantity ,increaseItemToOne,increaseItem ,decreaseItem}}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };