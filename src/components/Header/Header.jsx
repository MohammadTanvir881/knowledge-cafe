
import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between bg-slate-100 items-center py-4 px-5 border-b-2 container mx-auto '>
            <h1 className='text-4xl font-bold '>React knowledge cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;