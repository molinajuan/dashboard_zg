import React, { Component } from 'react';
import SmallCard from './SmallCard';

// let productInDataBase = {
//     color:   "primary",
//     titulo: "Movies in Data Base",
//     valor: 21,
//     icono: "fas fa-film",
// }

// let amount ={
//     color:   "success",
//     titulo: "Total awards",
//     valor: 79,
//     icono: "fas fa-award",
// }

// let user = {
//     color:   "warning",
//     titulo: "Actors quantity",
//     valor: 49,
//     icono: "fas fa-user",
// }

// let cardProps = [productInDataBase,amount,user];


class ContentRowGeneral extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalProducts: 0,
            totalUsers: 0,
            totalCategories: 0,
        }
    }

    totalProducts = (data) => {
        // console.log(data)
        this.setState({
            total: data.meta.total  // en el state de este comnponente seteale en la propiedad  total el valor data.meta.total

        })
    }

    totalUsers = (data) => {
        this.setState({
            user: data.meta.total
        })
    }

    totalCategories = (data) => {
        this.setState({
            category: data.meta.countByCategory
        })
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(e => console.log(e))
    }

    componentDidMount(){
        this.apiCall("http://localhost:3000/api/products", this.totalProducts, this.totalCategories)
        this.apiCall("http://localhost:3000/api/users", this.totalUsers)
    }

    render(){
        return (
            <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
               
               <SmallCard  totalProducts  
                           totalUsers 
                           totalCategories />
                   
            </div>
            </React.Fragment>
        )
    }
}
export default ContentRowGeneral;