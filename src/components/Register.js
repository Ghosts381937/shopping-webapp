import React from 'react';
import axios from "./Axios";



class APP extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email:"",
            account : "",
            password1 : "",
            confirmpassword : ""
        }
    };

    handleChange = (e) => {
        //Step 1:取得輸入的數值
        const Email = e.target.email;
        const Account = e.target.account;
        const Password = e.target.password;
        const ConfirmPassword = e.target.confirmpassword;
        //Step 2:取得輸入的input名子
        
        //Step 3:更改State數據
        this.setState(
          {
            email:Email ,
            account : Account,
            password1 : Password,
            confirmpassword : ConfirmPassword
          }
        );
    };

    //-------------------------------------------------//
    
    POST = () => {
        //Step 1:取得state數據
        const product = {...this.state};
        //Step 2:新增到JSON-Server數據庫中 
        axios.post("/posts",product);
    };
    


    render () {
        return (
        <div className="container">
            <form>
                
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="InputEmail" value={this.state.email}  onChange={this.handleChange}/>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="InputAccount" className="form-label">Account</label>
                    <input type="text" className="form-control" id="InputAccount" value={this.state.account}  />
                </div>
    
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword"/*value={this.state.password} *//>
                </div>
    
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Confirm Password</label>
                    <input type="confirmpassword" className="form-control" id="InputConfirmPassword"/*value={this.state.confirmpassword}*/ />
                </div>
                
                <button type="submit" className="btn btn-primary" >送出</button>
            </form>
        </div>
    
        )
    } 
}


 


export default APP;