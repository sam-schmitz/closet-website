import logo from './logo.svg';
import './App.css';
import dresser from './images/dresser.jpg'

function App() {
  return (
      <>
          <div className="Room">
              <Product
                  type={"dresser"}
              />
          </div></>
  );
}

function Product({ type }) {
    return (
        <>
            <a href="https://www.google.com" className="Product">
                <img src={dresser} alt={type} />
            </a>
        </>
    );
}

export default App;
