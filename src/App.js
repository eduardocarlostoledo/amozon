import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      books:[
        {id:0, rating: 5, title: "BERENICE", image: 'BERENICE.jpeg'},
        {id:1, rating: 5, title: "BOURBON", image: 'BOURBON.jpeg'},
        {id:2, rating: 5, title: "CARTA ROBADA", image: 'CARTA.jpeg'},
        {id:3, rating: 5, title: "CORAZON DELATOR", image: 'CORAZON.jpeg'},
        {id:4, rating: 5, title: "EL DORADO", image: 'DORADO.jpeg'},
        {id:5, rating: 5, title: "GRAN CORTE", image: 'GRAN CORTE.jpeg'},
        {id:6, rating: 5, title: "GRAN RESERVA", image: 'GRAN RESERVA.jpeg'},
        {id:7, rating: 5, title: "KENTUCKY", image: 'KENTUCKY.jpeg'},
        {id:8, rating: 5, title: "RESERVE", image: 'RESERVE.jpeg'},
        {id:9, rating: 5, title: "SILENCE", image: 'SILENCE.jpeg'},
        {id:10, rating: 5, title: "COTTON PRIME", image: 'COTTON.jpeg'},
        {id:11, rating: 5, title: "DEAD RABBIT", image: 'DEAD RABBIT.jpeg'},
        {id:12, rating: 5, title: "VGOD RDA", image: 'VGOD.jpeg'},
        {id:13, rating: 5, title: "VLS RDA", image: 'VLS.jpeg'},
        {id:14, rating: 5, title: "WAKE RTA", image: 'WAKE.jpeg'},
        {id:15, rating: 5, title: "COILS", image: 'TWISTED.JPG'}
      ],
      copyBooks: []
    };

    this.onSearch = this.onSearch.bind(this);
    this.addItem = this.addItem.bind(this);
    this.remove = this.remove.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  initBooks(){
    //this.setState({copyBooks: [...this.state.books]});
    this.setState((state,props) => ({
      copyBooks: [...state.books]
    }));
  }

  componentDidMount(){
    this.initBooks();
  }

  onSearch(query){
    if(query === ''){
      this.setState({copyBooks: [...this.state.books]});
    }else{

      const temp = [...this.state.books];
      var res = [];
      temp.forEach(item =>{
        if(item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
    
      this.setState({copyBooks: [...res]});
    }
  }

  addItem(item){
    var temp = [...this.state.books];
    const id = temp[temp.length-1].id + 1;
    item['id'] = id;
    temp.push(item);
    this.setState({books: [...temp]});
    this.initBooks();
  }

  remove(id){
    var temp = [...this.state.books];
    const res = temp.filter(item => item.id != id);
    this.setState({books: [...res]});
    this.initBooks();
  }

  updateRating(item){
    var temp = [...this.state.books];
    const index = temp.findIndex(x => x.id === item.id);
    temp[index].title = item.title;
    temp[index].image = item.image;
    temp[index].rating = item.rating;

    this.setState({books: [...temp]});
    this.initBooks();
  }

  render(){
    return (
      <div className="app">
        <Menu title="El Gato Negro Premium" onsearch={this.onSearch} onadd={this.addItem} />
        <List className="list" items={this.state.copyBooks} onremove={this.remove} onupdaterating={this.updateRating} />
      </div>
    );
  }
}

export default App;
