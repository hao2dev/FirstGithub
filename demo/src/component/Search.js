import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            trangthainutthem: true,
            nd: "",
            userObj: {}
        }
    }
    hienNut = () => {
        if (this.state.trangthainutthem === true)
            return <div onClick={() => { this.xulyTrangThai() }} className="btn btn-outline-info btn-block">Thêm mới</div>
        else
            return <div onClick={() => { this.xulyTrangThai() }} className="btn btn-outline-secondary btn-block">Đóng</div>
    }
    //hàm thay đổi trạng thái nút thêm
    xulyTrangThai = () => {
        this.setState({ trangthainutthem: !this.state.trangthainutthem });
        this.props.toggleForm()
    }
    //ham lay thong tin tu input
    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({ nd: event.target.value })
    }
    activeEditForm = () => {
        if (this.props.editUserForm === true)
            return <EditUser change={()=>{this.props.change()}} getEditInfo={(info) => { this.getEditInfo(info) }} userEditObject={this.props.userEditObject} />
    }
    getEditInfo = (info) => {
        this.setState({ userObj: info });
        this.props.getEditInfoApp(info);
    }
    render() {

        return (
            <div className="col-12">
                <div className='row'>
                    <div className="searchForm col-9">
                        <div className="input-group mb-3">
                            <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Nhập từ khoá" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <button onClick={(dlSearch) => this.props.checkConnectProps(this.state.nd)} className="btn btn-outline-secondary" type="button">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        {this.hienNut()}
                    </div>
                    {this.activeEditForm()}
                </div>
            </div>
        )
    }
}
