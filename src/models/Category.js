import axios from "axios";

class CategoryModel {
    apiUrl = 'http://127.0.0.1:8000/api';
    // Lấy tất cả dữ liệu
    all(){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl+"/categories" ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
   
}

export default new CategoryModel;