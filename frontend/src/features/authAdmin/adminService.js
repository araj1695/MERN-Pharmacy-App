import axios from "axios"

const API_URL = "http://localhost:3001/api/users/"

// Login Admin
const loginAdmin = async (userData) => {
    const response = await axios.post(API_URL + "admin-login", userData)

    if(response.data){
        localStorage.setItem("admin", JSON.stringify(response.data))
    }
    return response.data  
}

// Logout Admin
const logoutAdmin = () => {
    localStorage.removeItem('admin')
}


const adminService = {
    logoutAdmin,
    loginAdmin,
}

export default adminService