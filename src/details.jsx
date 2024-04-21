import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './details.css'
import ErrorPage from './404';

function Details() {
  const { id } = useParams();
  const [repository, setRepository] = useState(null);
  useEffect(() => {
    axios.get(`https://api.github.com/repositories/${id}`)
      .then(response => {
        setRepository(response.data);
      })
      .catch(error => {
        console.error('Error fetching repository:', error);
      });
  }, [id]);
  console.log(repository)

  if (!repository) {
    return <div>
      <ErrorPage/>
    </div>;
  }

  return (
    <section className='details-container'>
      <h1 className='repository-name'>{repository.name}</h1>
      <p className='repository-description'>{repository.description}</p>
      <div className='repository-details'>
      <p>Stars: {repository.stargazers_count}</p>
      <p>Language: {repository.language}</p>
      <p>Forks: {repository.forks_count}</p>
      <p>Owner: {repository.owner.login}</p>
      <p>ID: {repository.id}</p>
      <p>size : {repository.size}</p>
      <p>Description : {repository.description}</p>
      <p>Clone Url: {repository.clone_url}</p>
      <p>Website: {repository.homepage}</p>
      <p>license:{repository.license}</p>        
      </div>
      <Link to={'/'} className="go-home-link">GO HOME</Link>
    </section>
  );
}
export default Details