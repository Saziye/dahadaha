
    import logo from '../assests/images/dahadaha.jpg';
function Main() {
    return(
        <div>
            <div style={{height:40 , top:40 , left:15, right:15,position:"absolute",display:"flex",justifyContent:"space-between"}}>
                <img src={logo} width="100" height="50" alt="logo" />
                <div style={{width:141, height:40 ,display:"flex",justifyContent:"space-between" }}>
                <img src={logo} width="100" height="50" alt="logo" />
                <img src={logo} width="100" height="50" alt="logo" />

                </div>
            </div>
        </div>
    );
};

export default Main;