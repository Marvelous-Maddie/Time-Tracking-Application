import React, {useState, useEffect} from 'react';
import Pagination from './Pagination';

const AllTasks = () => {
    const [list, setList] = useState([]);
    const [query, setQuery] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(2);

    //Fetch all tasks
    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/");
        res
        .json()
        .then(res => setList(res))
        .catch(alert);
    };

    useEffect(() => {
        fetchData();
    },[]);

    // Get current posts
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = list.slice(indexOfFirstTask, indexOfLastTask);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    //Query data by description
    const handleChange = e => {
        const newQuery = e.target.value;
        setQuery(newQuery);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!query) return fetchData();
        queryData(query);
        //setQuery()
    };

    const queryData = async (query) => {
        const res = await fetch(`http://localhost:5000/find/:${query}`);
        res
            .json()
            .then(res => setList(res))
            .catch(alert);
    };
    
    return(
        <div className="d-grid gap-2 col-6 mx-auto my-5">
            <h2 className="d-flex mx-auto my-5">
                Overview for all tracked tasks
            </h2>

            {/*Query*/}
            <form className="d-flex my-5" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search description" aria-label="Search" onChange={handleChange} />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>

            {/*List of all tasks*/}
            <table className="table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Duration</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTasks.map(l => {
                        return(
                        <tr key={l.id}>
                            <td>{l.duration}</td>   {/*Ändern: hours, minutes, seconds*/}
                            <td>{l.description}</td>
                            <td>{l.timestamp}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table> 

            <Pagination
                tasksPerPage={tasksPerPage}
                totalTasks={list.length}
                paginate={paginate}
            />
            
        </div>
    )
};

export default AllTasks;