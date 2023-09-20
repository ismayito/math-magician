import './Calculator.css';
import { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: { 'X-Api-Key': 'ayzWsTmKJ4x5tjDC6iQ1Bg==eyNY6xpt7Jy0QaR3' },
            contentType: 'application/json',
          });
        const responseData = await data.json();
        setData(responseData);
        setIsLoading(false);
      } catch (error) {
        setHasError(true);
      }
    };
    fetchData();
  }, [setData, setIsLoading]);

  if (isLoading) return <div><h1>Loading...</h1></div>;
  if (hasError) return <div><h1>Sorry error occured while fetching data</h1></div>;
  return (
    <div className="quotes-container">
      {data.map((item) => (
        <div key="index">
          <p>
            <span>
              <strong>Quote:</strong>
              {' '}
            </span>
            {item.quote}
          </p>
          <p style={{ color: 'red' }}>
            <span>
              <strong>Author:</strong>
              {' '}
            </span>
            {item.author}
          </p>
          <p>
            <span>
              <strong>Category:</strong>
              {' '}
            </span>
            {item.category}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FetchData;
