import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest, actFetchProductsRequest } from './../../actions';





class ProductActionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        };

        if (id) {
            this.props.onUpdateProduct(product);
            this.props.fetchAllProducts();
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();

    }

    componentDidMount() {
        //console.log('componentDidMount');
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }

    }



    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('UNSAFE_componentWillReceiveProps');
    //     if (nextProps && nextProps.itemEditing) {
    //         var { itemEditing } = nextProps;
    //         this.setState({
    //             id: itemEditing.id,
    //             txtName: itemEditing.name,
    //             txtPrice: itemEditing.price,
    //             chkbStatus: itemEditing.status
    //         });
    //     }
    // }

    //    static getDerivedStateFromProps(props, state) {
    //         console.log('getDerivedStateFromProps');
    //         if (props.itemEditing !== state.itemEditing) {
    //             return {
    //                 id: props.itemEditing.id,
    //                 txtName: props.itemEditing.name,
    //                 txtPrice: props.itemEditing.price,
    //                 chkbStatus: props.itemEditing.status
    //             }; 
    //         }
    //         return null;
    //     }

    componentDidUpdate(prevProps, prevState) {
        //console.log('componentDidUpdate');
        if (this.props.itemEditing !== prevProps.itemEditing) {
            var { itemEditing } = this.props;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            });
        }
    }



    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        var iconPanel = txtName || "" !== '' ? 'fas fa-edit mr-5' : 'fas fa-plus-circle mr-5';
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <div className="panel panel-success">
                            <div className="panel-heading">
                                <h3 className="panel-title"><span className={iconPanel}></span>{txtName || "" !== '' ? 'Sửa Sản Phẩm' : 'Thêm Sản Phẩm'}</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label>Tên Sản Phẩm</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập tên sản phẩm"
                                            name="txtName"
                                            value={txtName || ""}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Giá</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập giá sản phẩm"
                                            name="txtPrice"
                                            value={txtPrice || ""}
                                            onChange={this.onChange}
                                        />

                                    </div>
                                    <div className="form-group">
                                        <label>Trạng Thái</label>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="chkbStatus"
                                                onChange={this.onChange}
                                                checked={chkbStatus || ""}
                                            />
                                            Còn Hàng
                                        </label>
                                    </div>
                                    <Link to="/product-list" className="btn btn-danger"><span className="fas fa-undo-alt mr-5"></span>Quay Lại</Link>
                                    <button type="submit" className="btn btn-primary ml-10"><span className="fas fa-save mr-5"></span>Lưu Lại</button>
                                </form>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEditing: state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actEditProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        },
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
