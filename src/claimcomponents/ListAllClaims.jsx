import React, { Component } from "react";
import ClaimService from "../service/ClaimService";


export class ListClaimComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            claims: []
        }
    }
    
    componentDidMount(){
        
        ClaimService.getAllClaims().then ((res) =>{
            console.log(res.data);
            this.setState({claims : res.data});
        })
    }
   
    render(){
        return(
            <><h2 className="text-center">Claim List</h2>
            <div className="row">
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Claim Id</th>
                            <th>Claim Date</th>
                            <th>Claim Total Amount</th>
                            <th>Amount To Claim</th>
                            <th>Claim Status</th>
                            <th>Bill details</th>
                            <th>Claim Documents</th>
                            <th>Claim Type</th>
                            <th>Remaining Amount</th>
                            {/* <th>Actions</th> */}
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.claims.map(
                                    Claim =>
                                    <tr key={Claim.claimId}>
                                        <td>{Claim.claimId}</td>
                                        <td>{Claim.claimDate}</td>
                                        <td>{Claim.claimTotalAmount}</td>
                                        <td>{Claim.amountToClaim}</td>
                                        <td>{Claim.claimStatus}</td>
                                        <td>{Claim.billDetails}</td>
                                        <td>{Claim.claimDocuments}</td>
                                        <td>{Claim.claimType}</td>
                                        <td>{Claim.remaining_amount}</td>
                                        {/* <td><button className="btn btn-danger" onClick="#">update</button></td> */}
                                    </tr>
                                )
                            }
                        </tbody>
                </table>
            </div></>      
            )
    }

}