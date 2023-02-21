import React from 'react';

class CartItem extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         price : 99,
    //         title: "Mobile Phone",
    //         qty: 1
    //     }
    // }

    //event-function we use arrow function so that value of "this" not get lost
    // increaseQuantity = () => {
        // this.state.qty += 1;    
        // console.log('test',this.state);

        // setState form -1  ---> object passing methoid ..In this you can not pass more than one same object ....It(react) will form a batch a send to render...the object that is present at last will render ..all previous will be neglected..

        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // for increseing 3 at one click we cannot do like this...>

        // this.setState({
        //     qty: this.state.qty + 1
        // });
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        //last object qty will be render only and all the prev state  will be forgetten ...if we put qty increse by 3 at last then it will work ...like-->
        
            // this.setState({
            //     qty: this.state.qty + 3
            // });

        // setState form-2 --> function methoid ..here you can pass one or more function ..it will form a queue and put all the request as sa function in that ...and render one by one all ...

        // this.setState((prevState) => {
        //     return {
        //         qty : prevState.qty +1
        //     }
        // })
//To increase 3 by clicking once we can pass two more function ..but we cannot pass two more object.
        // this.setState((prevState) => {
        //     return {
        //         qty : prevState.qty +1
        //     }
        // })

        // this.setState((prevState) => {
        //     return {
        //         qty : prevState.qty +1
        //     }
        // })

        // or we can directly do --> 

        // this.setState((prevState) => {
            //     return {
            //         qty : prevState.qty +3
            //     }
            // })

    // }
     
    // decreaseQuantity=()=>{
    //     const {qty} = this.state;
    //     if(qty === 0){
    //         return;
    //     }
    //     this.setState((prevState)=> { 
    //         return {
    //             qty : prevState.qty -1
    //         }
    //     })
    // }


    //


    render() {

        const {price,title,qty} = this.props.items;
        const {items,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = this.props
        return (
            <div className='cart-item'> 

                <div className='left-block'>

                <img style={styles.image} />


                </div>

            <div className='right-block'>

                <div style={{fontSize:25}}>{title}</div>
                <div style={{color : 'grey'}}>{price}</div>
                <div style={{color:'#777'}}>{qty}</div> 
                <div className='cart-item-action'>
                    {/* buttons section*/} 
                    {/* comment is written inside curli braces  */}
                    <img
                    alt='increase' 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/4315/4315609.png'
                    onClick={() =>onIncreaseQuantity(items)}
                    />
                    <img 
                    alt='decrease' 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                    onClick={() => onDecreaseQuantity(items)}
                    />
                    <img 
                    alt='delete' 
                    className='action-icons'
                     src='https://cdn-icons-png.flaticon.com/512/3096/3096687.png'
                     onClick={() => onDeleteProduct(items.id)}
                     />

                </div>

            </div>

            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius :4,
        backgroundColor : '#ccc'
    }
}

export default CartItem;