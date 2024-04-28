import {  columns } from "./columns"
import React, { useEffect } from "react"
import { DataTable } from "./data-table"
 
interface Data {
    [key: string] : string
}

interface propsTable {
    buttonText: string
    buttonRoute: string
}

const DemoPage: React.FC<propsTable> = ({buttonText, buttonRoute}) =>  {
  const [data, setData] = React.useState<Data[]>([]);

  
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken')
            const response = await fetch('http://localhost:5050/api/farmer/get', {
                headers: {
                    'x-access-token': accessToken ? accessToken : ''
                }
            }
            );
            const jsonData = await response.json();
            console.log(Array.isArray(jsonData.data))
            console.log("farmer details revieved",jsonData)

            setData(jsonData.data);
            console.log("farmerdetailsdisplayed", data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  const handleDelete = async (rowData: Data) => {
    const updatedData = data.filter(item => item !== rowData);  //Remove this when api is successfully connected
    setData(updatedData);
    try {
        // Make API call to delete data from the backend
        const response = await fetch('/deleteData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: rowData.id }) 
        });

        if (response.ok) {
            const updatedData = data.filter(item => item !== rowData);
            setData(updatedData);
        } else {
            throw new Error('Failed to delete data from the backend');
        }
    } catch (error) {
        console.error("Error deleting data:", error);
    }
};
 
  return (
    <div className="container w-11/12 mx-0 py-10 px-0 max-w-[1900px]">
      <DataTable onDelete={handleDelete} columns={columns} data={data} buttonText={buttonText} buttonRoute={buttonRoute} />
    </div>

  )
}
export default DemoPage