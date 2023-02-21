import React from 'react';
import CartItem from './Cartitem';

class Cart extends React.Component {
    constructor(){
        super();
        this.state ={
        products : [
            {
              title : "Mobile",
              price : 9999,
              qty : 3,
              id : 1
            },
            {
              title : "Laptop",
              price : 50000,
              qty : 6,
              id: 2
            },
            {
              title : "Watch",
              price : 999,
              qty : 3,
              id : 3
            }
        ]
    }}

    handleIncreaseQuantity=(items)=> {
         const {products} = this.state;
         const index = products.indexOf(items);
         products[index].qty +=1;

         this.setState({products});
    }
    handleDecreaseQuantity=(items)=> {
         const {products} = this.state;
         const index = products.indexOf(items);
         if(products[index].qty ===0){
            return;
         }
         products[index].qty -=1;

         this.setState({products});
    }

    handleDeleteProduct = (id)=> {
        const {products} = this.state
        const newProducts = products.filter((item) => 
            item.id !== id
        );
        this.setState({
            products : newProducts
        })
    }

    render(){
        const {products} = this.state
        return (
            <div className='cart'>
                {products.map((items) => {
                    return(
                     <CartItem 
                     items = {items} 
                     key = {items.id}
                     onIncreaseQuantity = {this.handleIncreaseQuantity}
                     onDecreaseQuantity = {this.handleDecreaseQuantity}
                     onDeleteProduct = {this.handleDeleteProduct}
                     />
                )})}
                
                

            </div>
        )
    }
}

export default Cart ;