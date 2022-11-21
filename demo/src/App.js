
import './App.css';
import Adduser from './component/Adduser';
import Header from './component/Header';
import List from './component/List';
import Search from './component/Search';
import { Component } from 'react';
import dl from './component/data.json'


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hienThiForm: false,
      data: dl,
      searchND: '',
      editUserForm: false,
      userEditObject: {}
    }
  }
  toggleForm = () => {
    this.setState({ hienThiForm: !this.state.hienThiForm })
  }
  //ham lay thong tin tu search----------------------
  checkConnect = (dlSearch) => {
    this.setState({ searchND: dlSearch });
    // console.log('du lieu nhan dc la: ' + dlSearch );
  }
  //hàm lấy thông tin từ adduser
  getDataUser = (name, tel, permission) => {
    let item = {};
    item.id = '';
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    let newItem = this.state.data;
    newItem.push(item); //đẩy item vào newitem
    this.setState({ data: newItem });
  }
  //hàm lấy thông tin cần sửa
  editUser = (abc) => {
    this.setState({ userEditObject: abc });
  }
  changeEditUserForm = () => {
    this.setState({
      editUserForm: !this.state.editUserForm
    })
  }
  //ham lay thong tin tu list
  deleteUserInfo = (idUser) => {
    // console.log(idUser);
    let tempData = this.state.data;
    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({ data: tempData });
    // var manga=[1,2,3,4,5]
    // var x=3
    // manga=manga.filter(abc=>abc!=x)
    // console.log(manga);
  }
  getEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      };
    })
  }
  render() {
    var ketqua = []
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchND) !== -1) { ketqua.push(item) } //day du lieu vao trong mang ketqua
    })
    return (
      <div>
        <Header />
        <div className="container">
          <div class="row">
            <Search
              getEditInfoApp={(info) => { this.getEditInfoApp(info) }}
              userEditObject={this.state.userEditObject}
              toggleForm={() => { this.toggleForm() }}
              checkConnectProps={(dlSearch) => this.checkConnect(dlSearch)}
              editUserForm={this.state.editUserForm}
              change={() => { this.changeEditUserForm() }}
            ></Search>
            <List
              deleteUserInfo={(idUser) => { this.deleteUserInfo(idUser) }}
              edit={(abc) => { this.editUser(abc) }}
              checkconnect__1={() => { this.checkconnect() }}
              dataUserProps={ketqua}
              change={() => { this.changeEditUserForm() }}
            ></List>
            <Adduser
              hienThiForm={this.state.hienThiForm}
              add={(name, tel, permission) => this.getDataUser(name, tel, permission)}
            ></Adduser>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
