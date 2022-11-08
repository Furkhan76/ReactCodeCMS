import axios from "axios";

class AdminService{

    getAllAdmins(){
        
        return axios.get("http://localhost:8080/claim/ClaimManagementSystem/getalladmins");
    }
}

export default new AdminService();