import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Paginate from './pagination';
import './repoList.css'
const token = import.meta.env.VITE_ACCESS_TOKEN
console.log(token)
const fetchRepositories = async () => {
  const response = await fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  if (!response) {
    throw new Error('Failed to fetch repositories');
  }
  return response.json();
};

function RepositoriesList () {
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [perPage, setPerPage] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoading, isError, data } = useQuery(['repositories'],() => fetchRepositories());
  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching repositories</div>;
  // Filter repositories based on search query
  const filteredRepositories = data.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentItems = filteredRepositories.slice(firstIndex, lastIndex)

  return (
  <div className="header">
    <h1>MY PORTFOLIO</h1>
    <section className='repoList'>
      <h2>My Repositories</h2>
      <input
          type="text"
          placeholder="Search repositories..."
          className="search-repo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      <ul>
        {currentItems.map((repo, index) => (
          <li key={index}>
            <span>{repo.name.toUpperCase()}</span>
            <button className='infoBTN'>
              <Link className='link' to={`/repository/${repo.id}`}>DETAILS</Link>
            </button>
          </li>
        ))}
      </ul>
      <Paginate totalItems={filteredRepositories.length} perPage={perPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </section>
  </div>  
  );
}


export default RepositoriesList;
