import React, { useState } from 'react';

export default function ReceiveData() {
    const [inputData, setInputData] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/data/receive', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({data: inputData})
            })
            const responseData = await response.json();
            setResponse(responseData.message);
            }catch (error) {
                console.error('failed', error);
            }

        }
        return (
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button type='submit'>send data</button>
                </form>
                <p>Server response: {response}</p>
            </div>
        )

    }