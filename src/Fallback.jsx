/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Fallback({ error }) {
    return (
      <div>
        <h2>Something went wrong.</h2>
        <p>{error.message}</p>
      </div>
    );
  }
  
  export default Fallback;