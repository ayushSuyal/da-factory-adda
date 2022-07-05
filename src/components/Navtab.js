import React from "react";
const Navtab = (props) => {
    return (
      
            <nav className="navbar bg-light" >
                <div className="container-fluid">
                    <a className="navbar-brand">Filter..</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type={props.type} placeholder="Search" aria-label="Search" value={props.value} onChange={props.handleOnChange}/>
                            <button className="btn btn-outline-success" onClick={props.handleOnSubmit} type="submit">Search</button>
                    </form>
                </div>
            </nav>
       
    );
}

export default Navtab;