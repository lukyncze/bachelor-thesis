import {useState} from 'react';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-gray-200 p-6 rounded-md shadow-md'>
      <p className='text-xl font-semibold mb-4'>Current count: {count}</p>

      <div className='flex gap-4'>
        <Button
          className='bg-blue-500 text-white hover:bg-blue-600'
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>

        <Button
          className='bg-orange-500 text-white hover:bg-orange-600'
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>

        <Button className='bg-gray-500 text-white hover:bg-gray-600' onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Counter;

