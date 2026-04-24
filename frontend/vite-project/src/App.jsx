import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [saldo, setSaldo] = useState(0);
  const [pengeluaran, setPengeluaran] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setSaldo(data.data.saldo);
        setPengeluaran(data.data.pengeluaran);
      });
  }, []);

  return (
    <div>
      <h1>MoneyTOR App</h1>
      <p>{message}</p>

      <h2>Saldo: {saldo}</h2>
      <h3>Pengeluaran: {pengeluaran}</h3>
    </div>
  );
}

export default App;