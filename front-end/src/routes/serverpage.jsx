import React, {useState, useEffect} from 'react';

export default function ServerPage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/data');
                if (!response.ok) {
                    throw new Error('response not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false)
            }catch (error) {
                console.error('Error fetching data: ', error);
                setLoading(false);
            }
        }
        fetchData();

    }, [])

    return (
        <div>
            <h1>data from server</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (<pre>{JSON.stringify(data.message)}</pre>)}
        </div>
    )
}


