import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/GetMemberById.css';
import MemberService from "../service/MemberService";


export class GetMemberById extends Component{
    constructor(props){
        super(props);
        this.state = {
            members: []
        }
        this.deleteMember = this.deleteMember.bind(this);
    }
    
    componentDidMount(){
        
        MemberService.getMemberById(this.props.match.params.Id).then ((res) =>{
            console.log(res.data);
            this.setState({members : res.data});
        })
    }
    deleteMember(memberId){
        MemberService.deleteMember(memberId).then(res => {
            this.setState({members:this.state.members.filter(member =>member.memberId !== memberId)});
        })
    }

    render(){
        return(
            <><h2 className="text-center">Member List</h2>

            <div class="options">
            <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-expanded="false">
                MENU
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left">
                <Link class="dropdown-item" type="button">Claim History</Link>
                <Link to={"/addclaims/"} class="dropdown-item" type="button">Submit New Claim</Link>
                <Link to={"/getallplans/"} class="dropdown-item" type="button">View all Plans</Link>
                <Link  to={"/updatemember/" + this.state.members.memberId} class="dropdown-item" type="button">Update Details</Link>
                <Link  to={"/addplans/"} class="dropdown-item" type="button">Add New Plan</Link>

            </div>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                        <tr>
                            <th>Member Id</th>
                            <td>{this.state.members.memberId}</td>
                        </tr>
                            <tr><th>Member Name</th>
                            <td>{this.state.members.memberName}</td>
                        </tr>
                        <tr>
                            <th>Member E-Mail</th>
                            <td>{this.state.members.memberEmail}</td>
                        </tr>
                        <tr>
                            <th>Member Contact</th>
                            <td>{this.state.members.memberContact}</td>
                        </tr>
                        <tr>
                            <th>Member Address</th>
                            <td>{this.state.members.memberAddress}</td>
                        </tr>
                        <tr>
                            <th>Member DOB</th>
                            <td>{this.state.members.memberDOB}</td>
                        </tr>                                                
                </table>
            </div></>      
            )
    }

}