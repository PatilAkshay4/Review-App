import Review from './Review';
import './App.css';
import './index.css';


function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2 style={{fontStyle: 'italic'}}>Our Reviews</h2>
          <div className="underline" style={{
            height: "0.25rem",
            width: "5rem",
            background: "var(--clr-primary-5)",
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>_______________</div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
