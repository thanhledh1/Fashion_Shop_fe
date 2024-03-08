import axios from "axios";

class ProductModel {
    apiUrl = 'http://127.0.0.1:8000/api';
    // Lấy tất cả dữ liệu
    all(){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl+"/products" ).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    // lấy 1 dữ liệu
    find( id ){
        return new Promise( ( resolve,reject ) => {
            axios.get( this.apiUrl + '/products/' + id).then( function(data){
                resolve(data)
            }).catch( function( error ){
                reject(error)
            })
        })
    }
    async destroy(id){
        return await axios.delete( this.apiUrl + '/' + id )
    }
   
}

export default new ProductModel;