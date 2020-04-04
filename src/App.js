import React from "react";
import Axios from "axios";
import "./style.css";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.getCountryData = this.getCountryData.bind(this);
    }
//initial set state
    state = {
        confirmed: 0,
        recovered: 0,
        deaths: 0,
        countries: []
    }

    componentDidMount() {
        this.getData();
    }

    

//fetch data
    async getData() {
        const resApi = await Axios.get("https://covid19.mathdro.id/api");
        const resCountries = await Axios.get("https://covid19.mathdro.id/api/countries");
        const countries = [];
            for (var i=0; i < resCountries.data.countries.length; i++) {
                countries.push(resCountries.data.countries[i].name);
            }
        
        this.setState({
            confirmed: resApi.data.confirmed.value,
            recovered: resApi.data.recovered.value,
            deaths: resApi.data.deaths.value,
            countries
        }); 
    }

    // Error Management
async getCountryData(event){
    try {
    const res = await Axios.get(`https://covid19.mathdro.id/api/countries/${event.target.value}`);
    this.setState({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value
    })}
    catch (err) {
        if(err.response.status === 404)
        this.setState({
            confirmed: "No data available",
            recovered: "No data available",
            deaths: "No data available"
        })
    }
}

//function to choose country in the list
renderCountryOptions() {
    
    // return this.state.countries.map((name, iso2) => {
        return this.state.countries.map((name, i) => {
        return <option key={name}>{name}</option> 
    });
}

    render() {
        return ( 
        <div className="container">
            <h1>Corona update</h1>

        <select className="dropDown" onChange={this.getCountryData}>
           {this.renderCountryOptions()}
        </select>

           <div className="flex">
            <div className="box confirmed">
                <h3>Confirmed cases: </h3>
                <h4>{this.state.confirmed}</h4>
            </div>
            <div className="box recovered">
                <h3>Recovered cases: </h3>
                <h4>{this.state.recovered}</h4>
            </div>
            <div className="box deaths">
                <h3>In another world cases: </h3>
                <h4>{this.state.deaths}</h4>
            </div>
            </div> 
        </div> );
    }
}