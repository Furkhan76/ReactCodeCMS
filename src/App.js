import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AdminLogin } from './admincomponent/AdminLogin';
import './App.css';
import { ListClaimComponent } from './claimcomponents/ListAllClaims';
import Header from './HeaderComponent/Header';
import HomeComponent from './homecomponent/Home';
import { AddMemberComponent } from './membercomponenets/AddMemeberComponent';
import { ListMemberComponent } from './membercomponenets/ListMemberComponent';
import { MemberLogin } from './membercomponenets/MemberLogin';
import { UpdateMemberComponent } from './membercomponenets/UpdateMemberComponent';
import { AddplanComponent } from './planComponents/AddPlanDetails';
import { ListPlanComponent } from './planComponents/ListPlanComponent';
import { UpdatePlanComponent } from './planComponents/UpdatePlanComponent';
import { GetMemberById } from './membercomponenets/GetMemberById';
import { getAllAdmins } from './admincomponent/GetAllAdmins';
import { AddClaimComponent } from './claimcomponents/AddClaimComponent';
import Contact from './homecomponent/Contact';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Header/>
     <div className="container-fluid">
      <Switch>
      <Route path="/" exact component={HomeComponent}></Route>
        <Route path="/getallmembers" component={ListMemberComponent}></Route>
        <Route path="/addmember" component={AddMemberComponent}></Route>
        <Route path="/getallplans" component={ListPlanComponent}></Route>
        <Route path="/addplans" component={AddplanComponent}></Route>
        <Route path="/updatemember/:Id" component={UpdateMemberComponent}></Route>
        <Route path="/updateplan/:Id" component={UpdatePlanComponent}></Route>
        <Route path="/ClaimDetails" component={ListClaimComponent}></Route>
        <Route path="/MemberLogin" component={MemberLogin} />
        <Route path="/getmember/:Id" component={GetMemberById}></Route>
        <Route path="/AdminLogin" component={AdminLogin}/>
        <Route path="/getalladmins" component={getAllAdmins}></Route>
        <Route path="/addclaims" component={AddClaimComponent}></Route>
        <Route path="/contact" exact component={Contact}></Route>
      </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
