const Card = ({ title }) => {
  return (
      <div style={{
        border: '1px solid #4b5362',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#31363f'
      }}>
        <h2>{title}</h2>
      </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
      <Card title="Stranger Things" />
      <Card title="The Boys" />
    </div>
  )
}

export default App
