// eslint-disable-next-line react/prop-types
function Paginate({totalItems, perPage, setCurrentPage,currentPage}){
    let pages =[];
    for(let i=1; i<=Math.ceil(totalItems/perPage) ; i++){
      pages.push(i);
    }
    return(
      <div className="navBar">{
        pages.map((page, index)=>
         <button key={index} onClick={()=> setCurrentPage(page)} className={page==currentPage? 'active':''} >
          {page}
          </button>
        )}</div>
   )
  }
  export default Paginate