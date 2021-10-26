import React from 'react';
import { Link } from 'react-router-dom';


class ProductItem extends React.Component {

    onDelete = (id) => {
        if (confirm('Bạn Có Chắc Muốn Xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }

    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'success' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link
                        to={`product/${product.id}/edit`}
                        type="button" 
                        className="btn btn-warning"
                    >
                        <span className="fas fa-pen mr-5"></span>
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger ml-10"
                        onClick={() => this.onDelete(product.id)}
                    >
                        <span className="fas fa-backspace mr-5"></span>
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}


export default ProductItem;
