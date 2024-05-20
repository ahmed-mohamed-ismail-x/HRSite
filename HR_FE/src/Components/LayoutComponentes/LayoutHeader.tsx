import logo from '../../assets/HR_Logo.png';
function LayoutHeader() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo" className="img-logo"></img>
                <strong>Company HR Portal</strong>
            </header>

        </>
    );
}

export default LayoutHeader;