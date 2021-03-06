import React from 'react';



class ProductList extends React.Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title"><span className="fas fa-bars mr-5"></span>Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">

                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã</th>
                                <th>Tên SP</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.props.children}
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}


export default ProductList;
