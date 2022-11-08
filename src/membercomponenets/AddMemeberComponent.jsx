import MemberService from "../service/MemberService";
import React from "react";
import '../css/AddMember.css';
import image1 from '../images/image4.jpg';
export class AddMemberComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            memberName : '',
            memberEmail : '',
            memberContact : '',
            memberAddress : '',
            memberDOB :'',
            memberPass :''
        }

        this.changeMemberNameHandler = this.changeMemberNameHandler.bind(this);
        this.changeMemberEmailHandler = this.changeMemberEmailHandler.bind(this);
        this.changeMemberContactHandler = this.changeMemberContactHandler.bind(this);
        this.changeMemberAddressHandler = this.changeMemberAddressHandler.bind(this);
        this.changeMemberDOBHandler = this.changeMemberDOBHandler.bind(this);
        this.changeMemberPassHandler = this.changeMemberPassHandler.bind(this);

        this.saveMember = this.saveMember.bind(this);
    }
    saveMember = (e) =>{
        e.preventDefault();
        let member = {memberName : this.state.memberName,
                        memberEmail : this.state.memberEmail,
                        memberContact: this.state.memberContact,
                        memberAddress: this.state.memberAddress,
                        memberPass: this.state.memberPass,
                        memberDOB: this.state.memberDOB}
        console.log('member =>'+JSON.stringify(member))
        MemberService.saveMember(member).then(res =>{
            alert("member added succesfully....")
        })
    }

    changeMemberNameHandler(event){
        this.setState({memberName:event.target.value})
    }
    changeMemberPassHandler(event){
        this.setState({memberPass:event.target.value})
    }
    changeMemberEmailHandler(event){
        this.setState({memberEmail:event.target.value})
    }
    changeMemberContactHandler(event){
        this.setState({memberContact:event.target.value})
    }
    changeMemberAddressHandler(event){
        this.setState({memberAddress:event.target.value})
    }
    changeMemberDOBHandler(event){
        this.setState({memberDOB:event.target.value})
    }
    cancel(){
        alert("Member  not added ")
    }
    render(){
        return(
            
            <div>

                <br></br>
                <div className="container-member">
                    <div className="row">
                        <div className="Main">
                            <h2>Member Registration</h2>
                        </div>
                        <div className="image">
                            <img src={image1} alt="life quote" />
                            </div>
                        <div className="form">    
                            <form>
                                <div className="form-group">
                                  <label>Enter Name</label>
                                  <input type="text" name="memberName" id="" className="form-control" placeholder="Name" 
                                  value={this.state.memberName} onChange = {this.changeMemberNameHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter E-Mail</label>
                                  <input type="text" name="memberEmail" id="" className="form-control" placeholder="E-Mail" 
                                  value={this.state.memberEmail} onChange = {this.changeMemberEmailHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Contact</label>
                                  <input type="text" name="memberContact" id="" className="form-control" placeholder="Contact" 
                                  value={this.state.memberContact} onChange = {this.changeMemberContactHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Date Of Biirth</label>
                                  <input type="text" name="memberDOB" id="" className="form-control" placeholder="date of birth" 
                                  value={this.state.memberDOB} onChange = {this.changeMemberDOBHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Address</label>
                                  <input type="text" name="memberAddress" id="" className="form-control" placeholder="Address" 
                                  value={this.state.memberAddress} onChange = {this.changeMemberAddressHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Password</label>
                                  <input type="text" name="memberPass" id="" className="form-control" placeholder="Password" 
                                  value={this.state.memberPass} onChange = {this.changeMemberPassHandler}/>
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={this.saveMember.bind(this)}>Add</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                            
                                </div>
                                <br></br>
                                <div>
                   <footer className="style">
                    © 2022 Claim Management System
                    </footer>
                    </div>

                            </form>
                         
                         </div>
                    </div>
                    </div>
                    
                </div>
          
            
        )
    }
}