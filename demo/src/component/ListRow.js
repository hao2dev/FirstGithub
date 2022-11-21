import React, { Component } from 'react';

class ListRow extends Component {
    cacQuyen = () => {
        if (this.props.permission === 1) { return "Admin"; }
        else if (this.props.permission === 2) { return "User"; }
        else { return "Modrater"; }
    }
    editClick = () => {
        this.props.edit()
        this.props.change()
    }
//ham lay thong tin can xoa
    deleteUser=(idUser)=>{
        // console.log(idUser);
        this.props.deleteClick(idUser);
    }
    render() {
        return (
            <tr>
                <td scope="row">{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.cacQuyen()}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={() => this.editClick()} className="btn btn-warning sua"><i className="fa fa-pencil m-1" aria-hidden="true" />Sửa
                        </div>
                        <div onClick={(idUser)=>{this.deleteUser(this.props.id)}} className="btn btn-danger xoa"><i className="fa fa-minus m-1" aria-hidden="true" /> Xóa
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ListRow;