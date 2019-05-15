import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ProductCosumer} from '../../context'
import CartList from './CartList'
import CartTotal from './CartTotal'
export default class Cart extends Component {
    render(){
        return (
           <section>
               <ProductCosumer>
                   {
                       (value) => {
                           const { cart } = value;
                           if(cart.length){
                             return (
                             <React.Fragment>
                                <Title name="your" title="cart" />
                                <CartColumns/>
                                <CartList value={value} />
                                <CartTotal value={value} />
                             </React.Fragment>
                             )
                           }

                           return <EmptyCart />
                       }
                   }                   
                   
               </ProductCosumer>
           </section>
        );
    }
}