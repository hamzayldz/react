const names = ["Hamza", "Kerem", "Yasin", "Burak"];
const html = [
    <h2>hello world again</h2>,
    <h3>React is awesome</h3>
];


function App() {
    return (
    <div> {html.map((item, index) => {
        return <p key={index}>{item}</p>
    })} 
    <HelloMessage array={html}/> 
    <h2>Hello World from function</h2></div>);
    
}
class HelloNames extends React.Component {
    render() {
      return (
          
        <ol>
        {names.map((name,index) => { 
        return <li key={index} className={index === 0 ? "first" : index === 1 ? 'second' : index === 2 ? 'third' : "second"}>{name}</li>
        })}
    </ol>
      );
    }
  }



class HelloMessage extends React.Component {
    render() {
      return (
        <div> <div className="card">
        <h1 id="head">Hello World</h1>
        <HelloNames namesarr={names}/>
    </div>
    <div>
       {/* this.props.array; */} 
        
        {html.map((item, index) => {
            return <p key={index}>{item}</p>
        })}
        
    </div>
           <h1> hello from compenent</h1>
      </div>
      );
    }
  }

ReactDOM.render(
    <div>
       
       <App/>
        
    </div>
    ,
    document.getElementById('root')
);
