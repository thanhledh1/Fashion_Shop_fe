import axios from "axios";

class OrderModel {
    apiUrl = 'http://127.0.0.1:8000/api';
    // Lấy tất cả dữ liệu
    checkout(data){
        return new Promise( ( resolve,reject ) => {
            axios.post( this.apiUrl+"/checkout" , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
   
}

export default new OrderModel;