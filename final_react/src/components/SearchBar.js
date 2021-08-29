import search from '../public/search.svg';

const SearchBar = () => {

    return(
        <div >
            <input type='text' className='SearchBar'></input>
            <div className = 'search_icon'>
            <img src= {search} className= 'search-img'></img>
            </div>
        </div>

    );
};

export default SearchBar