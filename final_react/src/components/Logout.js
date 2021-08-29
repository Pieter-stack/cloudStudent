import logout from '../public/logout.svg';

const Logout = () => {

    return(
        <div className = 'logout'>
            <a href='http://localhost:3000/'><img src= {logout} className= 'logout_img'></img></a>
        </div>

    );
};

export default Logout