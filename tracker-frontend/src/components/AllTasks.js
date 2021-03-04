import React, {useState, useEffect} from 'react';

const AllTasks = () => {
    const [list, setList] = useState([]);
    const [query, setQuery] = useState();

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

    const handleChange = e => {
        const newQuery = e.target.value;
        setQuery(newQuery);
    };

    const queryData = async (query) => {
        const res = await fetch(`http://localhost:5000/find/:${query}`);
        res
        .json()
        .then(res => setList(res))
        .catch(alert);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!query) return fetchData();
        queryData(query);
        setQuery()
    };

    return(
        <div class="d-grid gap-2 col-6 mx-auto my-5">
            <h2 className="d-flex mx-auto my-5">
                Overview for all tracked tasks
            </h2>
            <form className="d-flex my-5" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search description" aria-label="Search" onChange={handleChange} />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
            <table class="table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Duration</th>
                    <th scope="col">Description</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(l => {
                        return(
                        <tr key={l.id}>
                            <td>{l.duration}</td>
                            <td>{l.description}</td>
                            <td>{l.timestamp}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table> 
        </div>
    )
};

export default AllTasks;