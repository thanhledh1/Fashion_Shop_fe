import axios from "axios";
class UserModel {
    apiUrl = 'http://127.0.0.1:8000/api';
    login(data){
        return new Promise( ( resolve,reject ) => {
            axios.post( this.apiUrl+"/users/login" , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    register(data){
        return new Promise( ( resolve,reject ) => {
            axios.post( this.apiUrl+"/users/register" , data).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }

}
export default new UserModel();