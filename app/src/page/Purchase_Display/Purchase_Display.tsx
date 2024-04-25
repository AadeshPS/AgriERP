import { useState, useEffect } from 'react';
import Header from '@/components/Header/Header'
import useFilter from '@/hooks/useFilter';
import useSort from '@/hooks/useSort';
import usePagination from '@/hooks/usePagination';


interface Data {
    [key: string]: string;
}


const Purchase_Display = () => {
    const [data, setData] = useState<Data[]>([{hi: "hello"}]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5050/api/purchase/getDetails/Example_FPO',
                {
                    method: 'GET', // Specify the HTTP method (GET in this case)
                    headers: {
                        // Set the Content-Type header
                        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDNiYTc0YmE1NTkyNTgwY2Y2YTVkZiIsImlhdCI6MTcxMjEyMDgxOSwiZXhwIjoxNzEyMjA3MjE5fQ.cPkVFqzL9qTLPN7NREo6KwavycPXEGd34KvOWpuWPfQ' // Set any other headers you need
                    }
                });
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

 return (
    <div className='w-full'>
      <div className='w-full md:ml-4'>
      <Header text='Staff Details'/>
    </div>
    </div>
)
 
}

export default Purchase_Display;
