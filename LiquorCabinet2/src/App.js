import './App.css';
import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
import ResultCard from './component/ResultCard';
import Modal from './component/Modal';





class App extends Component { 

constructor(props) {
  super(props);

  this.state = {
    input: '',
    cocktailSearch: [],
  }
  this.onChangeInput = this.onChangeInput.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.onRandomSubmit = this.onRandomSubmit.bind(this);
  this.renderCard = this.renderCard.bind(this);

  
}

componentDidMount() {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`)
    .then(res => {
      
    }) 
}


onChangeInput(e) {
  this.setState({
    input: e.target.value
  });
}

onRandomSubmit(e) {
  e.preventDefault();

  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
  .then((response) => {
      // console.log(response);
      response.data.drinks.forEach(element => axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + element.idDrink)
      .then((res) => {
        this.setState({
          cocktailSearch: [...this.state.cocktailSearch, res.data]
        }) 
      }))
    })

    this.setState({
      cocktailSearch: []
    });
}

onSubmit(e) {
  e.preventDefault();
  
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=` + this.state.input)
  .then((response) => {
      if(response.data) {
        response.data.drinks.forEach(element => axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + element.idDrink)
      .then((res) => {
        this.setState({
          cocktailSearch: [...this.state.cocktailSearch, res.data]
        }) 
      }))
      } else {
        return <div>No results.</div>
      }
      
    })

  this.setState({
    cocktailSearch: []
  });
}
renderCard(){
    this.state.cocktailSearch.map((info, key) => { 
      return (
      <div key={key}> 
      <ResultCard 
        name={info.drinks[0].strDrink} 
        img={info.drinks[0].strDrinkThumb} 
        ing1={info.drinks[0].strIngredient1} 
        ing2={info.drinks[0].strIngredient2} 
        ing3={info.drinks[0].strIngredient3} 
        ing4={info.drinks[0].strIngredient4}/> 
      </div>)})
 

  
}




  render() { 
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center', margin: 50}}>
        
        <div>
        <h1>Liquor Cabinet</h1>
        
        <form>
          <input 
          type='text'
          placeholder='Search...'
          value={this.state.input}
          onChange={this.onChangeInput}
          ></input>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <button  className="btn waves-effect waves-light" type="submit"  value='Search' onClick={this.onSubmit}>Submit</button>
            <button  className="btn waves-effect waves-light" type="submit"  value='Search' onClick={this.onRandomSubmit}>Feeling Lucky?</button>
          </div>
        </form>
        </div>
        
        
        <div>
          { //Check if message failed
            (this.state.cocktailSearch.length === 0)
              ? <div> No results </div> 
              : <div style={{width: 1920, display: 'flex', flexFlow:'row wrap', justifyContent: 'center'}}> {this.state.cocktailSearch.map((info, key) => { 
                return (
                <div key={key} > 
                <ResultCard 
                  name={info.drinks[0].strDrink} 
                  img={info.drinks[0].strDrinkThumb} 
                  ing1={info.drinks[0].strIngredient1} 
                  ing2={info.drinks[0].strIngredient2} 
                  ing3={info.drinks[0].strIngredient3} 
                  ing4={info.drinks[0].strIngredient4}/> 
                </div>)}) } </div> 
        }
    
        </div>

        <Modal  />
        </div>
      ); 
  } 
} 
  
export default App;

