import React, { Component } from 'react'

export default class Adduser extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
        var pt = {};
        pt.id = this.state.id;
        pt.name = this.state.name;
        pt.tel = this.state.tel;
        pt.permission = this.state.permission;
    }
    hienForm = () => {
        if (this.props.hienThiForm === true)
            return (
                <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                    <div className="card-header">Thêm thành viên</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} type="text" className="form-control" name="name" placeholder="Tên user" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => { this.isChange(event) }} type="text" className="form-control" name="tel" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => { this.isChange(event) }} className="form-control" name="permission">
                                <option selected>Choose...</option>
                                <option value={1}>Admin</option>
                                <option value={2}>User</option>
                                <option value={3}>Modrater</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} className="btn btn-block btn-primary">Thêm</div>
                        </div>
                    </div>
                </div>
            )

    }
    render() {

        return (
            <div className="col-3">
                {this.hienForm()}
            </div>
        )
    }
}
