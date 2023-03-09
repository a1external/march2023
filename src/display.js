.main{width:100%;
    height:100%;}
    
    .hello{
      position:sticky;
      top:0;
      z-index: 1;
    }
    .sidenav{
      font-family: sans-serif;
      display:flex;
      justify-content: space-between;
      background-color: aquamarine;
      height: 40px;
      align-items: center;
       }
       
    
    
    .sidenav ul{
    display:flex;
    justify-content: space-evenly;
    width: 60%;
    background-color:red;
      }
    .sidenav ul li{
      list-style: none;
      
       }
    .sidenav ul li a{
      text-decoration: none;
      font-size:14px;
      font-family: verdana;
      color:brown;
      background-color:cadetblue;
     
    
    }
    .sidenav button{
      border-radius: 4px;
      background-color:coral;
      padding:1px 10px;
      border:none;
    }
    .imgmain{
      display:flex;
      justify-content:center;
      align-items: center;
      
    
    }
    
    
    .imgsub{
    width:300px;
    
    height:170px;
    background-color: coral;
    border-radius: 10px;
    display:flex;
    justify-content:center;
    
    }
    
    img{
        width:80px;
        margin-left:4px;
        border-radius: 10px;
    }
    
    .head{
      margin-left:7px;
      margin-top:10px;
    }
    .head h1{
      font-size:15px;
      font-family:verdana;
      padding:0px;
      margin:0px;
    }
    .head p{
      font-size: 10px;
    }
    .headbox{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-evenly;
      ;
    }
    .circlebox{
    width:50px;
    height:50px;
    background-color:darkblue;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom: 3px;
    }
    .circlebox i{
      font-size: 100px;
    }
    .circlebox h1{
      font-size: 10px;
    }






    //this app.js
    import "./styles.css";
import "animate.css";
export default function App() {
  return (
    <div className="main" class="animate__animated animate__zoomIn ">
     <div className ="hello"> 
      <div class="sidenav">
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">service</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
        <button>submit</button>
      </div>
      </div>
      
      <div className="imgmain">
        <div className="imgsub">
          <img
            id="img"
            src="https://images.pexels.com/photos/14324906/pexels-photo-14324906.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="unload"
            className="animate__animated animate__bounce animate__delay-3s"
          ></img>
          <div className="head">
            <h1 class="animate__animated animate__bounce ">Developer</h1>
            <p>
              dshfjkasfjkhdshfdalhfsdfdsjkhfjjklfdj jkdfjkdfhjdskhfjkhdsfhdsjkhf
              jkjhfkjhdsjkfahjkdskjfhdhfkds hfjkdshfhafjkdsfh hello
            </p>
          </div>
        </div>
      </div>
      <div className="headbox">
        <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
        </div>
      
      
        <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
        </div>
    
      
        <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
        </div>
      
      
        <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
        </div>
      
      
        <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
        </div>
      
      
        <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
    </div>
    <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
    </div>
    <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
    </div>
    <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
    </div>
    <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
    </div>
    <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
    </div>
    <div className="circlebox">
          <i className="fa fa-praying-hands"></i>
       <h1>helloworld</h1>
    </div>

    </div>
    </div>
  );
}
