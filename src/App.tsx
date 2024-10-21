
function App() {
  const title = import.meta.env.VITE_APP_TITLE;

  return (
    <div className="text-red-500 text-2xl text-center">
      <h1>{title}</h1>
    </div>
  )
}

export default App
