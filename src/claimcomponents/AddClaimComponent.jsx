import ClaimService from "../service/ClaimService";
import React from "react";
import image1 from '../images/image4.jpg';
export class AddClaimComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            claimStatus:'',
            amountToClaim : '',
            claimType : '',
            claimDocuments : '',
            billDetails : '',
            claimDate :'',
            claimTotalAmount :''
        }

        this.changeClaimStatusHandler = this.changeClaimStatusHandler.bind(this);
        this.changeAmountToClaimHandler = this.changeAmountToClaimHandler.bind(this);
        this.changeClaimTypeHandler = this.changeClaimTypeHandler.bind(this);
        this.changeClaimDocumentsHandler = this.changeClaimDocumentsHandler.bind(this);
        this.changeClaimDateHandler = this.changeClaimDateHandler.bind(this);
        this.changeBillDetailsHandler = this.changeBillDetailsHandler.bind(this);
        this.changeClaimTotalAmountHandler = this.changeClaimTotalAmountHandler.bind(this);

        this.saveClaim = this.saveClaim.bind(this);
    }
    saveClaim = (e) =>{
        e.preventDefault();
        let claim = {claimStatus : this.state.claimStatus,
                        amountToClaim : this.state.amountToClaim,
                        claimType: this.state.claimType,
                        claimDocuments: this.state.claimDocuments,
                        billDetails: this.state.billDetails,
                        claimDate: this.state.claimDate,
                        claimTotalAmount: this.state.claimTotalAmount}
        console.log('claim =>'+JSON.stringify(claim))
        ClaimService.saveClaim(claim).then(res =>{
            alert("claim added succesfully....")
        })
    }

    changeClaimTotalAmountHandler(event){
        this.setState({claimTotalAmount:event.target.value})
    }

    changeClaimStatusHandler(event){
        this.setState({claimStatus:event.target.value})
    }
    changeBillDetailsHandler(event){
        this.setState({billDetails:event.target.value})
    }
    changeAmountToClaimHandler(event){
        this.setState({amountToClaim:event.target.value})
    }
    changeClaimTypeHandler(event){
        this.setState({claimType:event.target.value})
    }
    changeClaimDocumentsHandler(event){
        this.setState({claimDocuments:event.target.value})
    }
    changeClaimDateHandler(event){
        this.setState({claimDate:event.target.value})
    }
    cancel(){
        alert("Claim  not added ")
    }
    render(){
        return(
            
            <div>

                <br></br>
                <div className="container-claim">
                    <div className="row">
                        <div className="Main">
                            <h2>Claim Registration</h2>
                        </div>
                        <div className="image">
                            <img src={image1} alt="life quote" />
                            </div>
                        <div className="form">    
                            <form>
                                <div className="form-group">
                                  <label>Enter claimStatus</label>
                                  <input type="text" name="claimStatus" id="" className="form-control" placeholder="claimStatus" 
                                  value={this.state.claimStatus} onChange = {this.changeClaimStatusHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter amountToClaim</label>
                                  <input type="number" name="amountToClaim" id="" className="form-control" placeholder="amountToClaim" 
                                  value={this.state.amountToClaim} onChange = {this.changeAmountToClaimHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Claim Type</label>
                                  <input type="text" name="claimType" id="" className="form-control" placeholder="claimType" 
                                  value={this.state.claimType} onChange = {this.changeClaimTypeHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Date</label>
                                  <input type="text" name="claimDate" id="" className="form-control" placeholder="claimDate" 
                                  value={this.state.claimDate} onChange = {this.changeClaimDateHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter Documents</label>
                                  <input type="text" name="claimDocuments" id="" className="form-control" placeholder="Documents" 
                                  value={this.state.claimDocuments} onChange = {this.changeClaimDocumentsHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter billDetails</label>
                                  <input type="text" name="billDetails" id="" className="form-control" placeholder="billDetails" 
                                  value={this.state.billDetails} onChange = {this.changeBillDetailsHandler}/>
                                </div>
                                <div className="form-group">
                                <label>Enter TotalAmount</label>
                                  <input type="number" name="claimTotalAmount" id="" className="form-control" placeholder="TotalAmount" 
                                  value={this.state.claimTotalAmount} onChange = {this.changeClaimTotalAmountHandler}/>
                                </div>
                                <div>
                                    <button className="btn btn-primary" onClick={this.saveClaim.bind(this)}>Add</button>
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