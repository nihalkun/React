import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import ViewArticle from './components/ViewArticle/ViewArticle';

function Profile(props) {

function renderLogout() {
  if(props.location.pathname === '/profile'){
      return(
          <div className="ml-auto">
              <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
          </div>
      )
  }
}
function handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN_NAME)
    props.history.push('/Login')
}

const [data, setData] = React.useState([]);

React.useEffect(() => {
  fetch("/articles")
    .then((res) => res.json())
    .then((data) => setData(arr => [...arr, ...data]));
}, []);

  return (
    <><nav className="navbar navbar-dark bg-primary">
        <div className="row col-12 d-flex justify-content-center text-white">
          <span className="h3">{props.name}</span>
          {renderLogout()}
        </div>
      </nav>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="card-columns">
          {!data ? "Loading..." : data.map((num) => (
          <ViewArticle key={num.title} article={num} />
          ))}
        </div>
      </div></>
    
  );
};

export default Profile;