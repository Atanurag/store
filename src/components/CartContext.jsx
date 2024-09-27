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
        },{
            name: 'Sambar',
            description: 'Lentil and vegetable stew',
            price: 40,
            isVeg: true,
            tag: 'Abcd tag',
            quantity: 0,
            img: 'https://c1.staticflickr.com/5/4610/27981857169_5234a6db7d_b.jpg',
          },
          {
            name: 'Rasam',
            description: 'Spicy lentil soup',
            price: 35,
            isVeg: true,
            tag: 'Soup',
            quantity: 0,
            img: 'https://media.istockphoto.com/id/1076130942/photo/green-peas-curry-matar-masala-north-indian-punjabi-cuisine-vegetarian-food.jpg?s=612x612&w=0&k=20&c=MfYEe2DJGAzJ7kvNcfhWaqfW1Ci80N-rt5HLImHKlk0=',
          },
          {
            name: 'Uttapam',
            description:
              'Thick pancake made from fermented rice and lentil batter',
            price: 55,
            isVeg: true,
            tag: 'Main Course',
            quantity: 0,
            img: 'https://images.pexels.com/photos/17869140/pexels-photo-17869140/free-photo-of-plate-of-small-uttapam.jpeg',
          },
          {
            name: 'Masala Dosa',
            description: 'Dosa stuffed with spiced potato filling',
            price: 60,
            isVeg: true,
            tag: 'Main Course',
            quantity: 0,
            img: 'https://media.istockphoto.com/id/183321245/photo/south-indian-crepe-masala-dosa.jpg?s=612x612&w=0&k=20&c=c6Z7P5uovp2M9JVS0rlS8nCKRL73QkTYRyL7FK348Os=',
          },
          {
            name: 'Rava Dosa',
            description: 'Dosa made from semolina batter',
            price: 50,
            isVeg: true,
            tag: 'Main Course',
            quantity: 0,
            img: 'https://media.istockphoto.com/id/1460788339/photo/south-indian-vegetarian-breakfast.jpg?s=612x612&w=0&k=20&c=_h9ObiAsvzhew_Mir9JHtSOwlvIUWj8awcvl-uStEfU=',
          },
          {
            name: 'Puri',
            description: 'Deep-fried unleavened bread',
            price: 25,
            isVeg: true,
            tag: 'Side Dish',
            quantity: 0,
            img: 'https://media.istockphoto.com/id/178612386/photo/puri-patty-curry-breakfast.jpg?s=612x612&w=0&k=20&c=NQnyqbzDfFu8o9c-PABAJH0HPEUqfFDDGxZRspoOApo=',
          },
          {
            name: 'Egg Bonda',
            description: 'Bonda stuffed with a boiled egg',
            price: 25,
            isVeg: false,
            tag: 'Non-Veg',
            quantity: 0,
            img: 'https://media.istockphoto.com/id/1128177492/photo/potato-dumpling-stuffed-with-greaves.jpg?s=612x612&w=0&k=20&c=OkoBgV2Jeo9fUDaIl8qRoKZUAjh5Sdn9cVghSwlm60g=',
          },
          {
            name: 'Medu Vada',
            description: 'Urad dal fritters shaped like donuts',
            price: 30,
            isVeg: true,
            tag: 'Side Dish',
            quantity: 0,
            img: 'https://media.istockphoto.com/id/1459336670/photo/image-of-asian-street-food-at-market-stall-for-sale-uludu-wade-dhal-vada-savoury-indian.jpg?s=612x612&w=0&k=20&c=mzbqFp371DUi_0PfHgymmsygTRDNVwFdeU21wtzoJXk=',
          },
          {
            name: 'Chicken ',
            description: 'Spicy chicken dish from the Chettinad region',
            price: 80,
            isVeg: false,
            tag: 'Non-Veg',
            quantity: 0,
            img: 'https://media.istockphoto.com/id/477108743/photo/chettinad-chicken.jpg?s=612x612&w=0&k=20&c=PkKlNaLCdESAmmFyk20LYtbanJaeDn9Ym-FtmHqTV7U=',
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