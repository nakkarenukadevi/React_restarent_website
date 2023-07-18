function App() {
  return (
    <>
      <div className="title">
        <h1>This is h1 element</h1>
        <h2>This is h2 element</h2>
        <h3>This is h3 element</h3>
      </div>
    </>
  );
}
export default App;

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
