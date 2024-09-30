
import './App.css';

function App() {
  let score=7;/*parent function*/
  return (
    <div className="App">
      <h1>operators</h1>
      <button type='button' onClick={()=>{
        let a= 20+8;
        console.log(a)
        let b= 20-8;
        console.log(b)
        let c= 20*8;
        console.log(c)
        let d= 20/8;
        console.log(d)
        let e= 20%8;/* remainder*/
        console.log(e)
        score++;
        console.log(score)
        score--;
        console.log(score)

      }}>arithmatic operators</button>
      <button type="button" onClick={()=>{
        let a= 20+8*3;/*bodmas rule*/
        console.log(a)
      }}>precedence or priority</button>
      <br></br>
      <button type='button' onClick={()=>{
        let a= 8;
        a +=28;
        a -=18;
        a *=8;
        a /=8;
        a %=8;
        console.log(a)
      }}>Assignment operators</button>
      <button type='button' onClick={()=>{
        let a= 28;
        let b= 38;
        console.log(a === b);
        console.log(a !== b);
        console.log(a <= b);
        console.log(a >= b);
        console.log(a > b);
        console.log(a < b);
      }}>comparison operators</button>
      <br></br>
      <button type='button' onClick={()=>{
        let telmarks =98;
        if(telmarks >=35){
          console.log("student is passed")

        }else{
          console.log("student is failed")

        }
      }}>if-else</button>
      
    </div>
  );
}

export default App;
