import React, { Component } from 'react'
import ListRow from './ListRow';

export default class List extends Component {
//ham lay thong tin xoa
    deleteClick=(idUser)=>{
        // console.log(idUser);
        this.props.deleteUserInfo(idUser)
    }
    render() {
        // console.log(this.props.dataUserProps);
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.dataUserProps.map((value, key) =>
                            (<ListRow
                                stt={key}
                                id={value.id}
                                userName={value.name}
                                tel={value.tel}
                                permission={value.permission}
                                change={()=>{this.props.change()}}
                                edit={(abc)=>{this.props.edit(value)}}
                                deleteClick={(idUser)=>{this.deleteClick(idUser)}}
                            ></ListRow>)
                            )
                        }
                    </tbody>
                </table>
            </div>

        )
    }
}
