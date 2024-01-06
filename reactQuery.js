//npm install react-query

import { useQuery } from 'react-query';

function MyComponent() {
  const { data, error } = useQuery('myData', async () => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        // Render your component with the fetched data
        <p>{data}</p>
      )}
    </div>
  );
}
