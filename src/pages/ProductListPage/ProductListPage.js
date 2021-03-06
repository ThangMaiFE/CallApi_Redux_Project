import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from './../../components/ProductList/ProductList'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest,actEditProductRequest } from './../../actions/index';


class ProductListPage extends React.Component {

    componentDidMount() {
        this.props.fetchAllProducts()
    }

    onDelete = (id) => {
        // var { products } = this.state;
        // callApi(`products/${id}`, 'DELETE', null).then(res => {
        //     if (res.status === 200) {
        //         var index = this.findIndex(products, id)
        //         if (index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products: products
        //             });
        //         }
        //     }
        // });
        this.props.onDeleteProduct(id);

    }

    render() {
        var { products } = this.props;
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/product/add" className="btn btn-info mb-10" >Thêm Sản Phẩm<span className="fas fa-plus-square ml-5"></span></Link>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </div>
        );
    }
   
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        },
        onEditProduct: (id) => {
            dispatch(actEditProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
