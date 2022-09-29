
import './App.css';
import Cards from './components/Cards/Cards';
import Selection from './components/Selection/Selection';

function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-2 m-5'>
      <div className='col-span-4'>
        <Cards></Cards>
      </div>
      <Selection></Selection>
    </div>
  );
}

export default App;
