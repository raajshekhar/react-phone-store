import React, { Component } from 'react';
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'
import { ProductCosumer } from '../context'

export default class ProductList extends Component {
    state = {
        products: [...storeProducts]
    };

    render(){
        console.log(this.state)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="out" title="products"/>
                        <div className="row">
                            <ProductCosumer>
                                {(data) => {
                                    return data.products.map( product => {
                                        return <Product key={product.id}
                                         product={product}  />
                                    })
                                }}
                            </ProductCosumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
