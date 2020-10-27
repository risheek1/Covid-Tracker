import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { fetchData } from './COMPONENTS/api.js';
import Cards from './COMPONENTS/card.js';
import Chart from './COMPONENTS/chart.js'
import CountryPicker from './COMPONENTS/countrypicker.js'
import styles from './App.module.css';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
    console.log(data)
  }
  handleCountryChange=async(country)=>
  {
  	const data=await fetchData(country);

  	this.setState({ data, country: country });
  	console.log(data)
  }
  render(){
   return (
  	<React.Fragment>
    <div className="App" className={styles.container}>
      <Cards confirmed={this.state.data.confirmed} recovered={this.state.data.recovered} deaths={this.state.data.deaths} lastUpdate={this.state.data.lastUpdate}/>
        <img className={styles.image} src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/covid-19-s-crop-crisis-pandemic-poses-major-risk-to-asia-s-food-supply-and-trade-expert/10911691-1-eng-GB/COVID-19-s-crop-crisis-Pandemic-poses-major-risk-to-Asia-s-food-supply-and-trade-expert.jpg"/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart country={this.state.country}  data={this.state.data}/>
    </div>
    </React.Fragment>
  );
}
}
export default App;
