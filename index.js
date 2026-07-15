<!-- Load React and ReactDOM from CDN -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<script type="text/babel">
  function App() {
    return (
      <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to Webinar App</h1>
        <p>Register and join your session instantly!</p>
      </div>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
</script>
