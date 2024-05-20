import LayoutContent from "../Components/LayoutComponentes/LayoutContent";
import LayoutFooter from "../Components/LayoutComponentes/LayoutFooter";
import LayoutHeader from "../Components/LayoutComponentes/LayoutHeader";
import LayoutSideBar from "../Components/LayoutComponentes/LayoutSideBar";
import '../Styles/LayoutPage.css'

function LayoutPage() {
    return (
        <div className="wrapper">
            <LayoutHeader></LayoutHeader>

            <div className="content">
                <LayoutSideBar></LayoutSideBar>
                <LayoutContent></LayoutContent>
            </div>

            <LayoutFooter></LayoutFooter>
        </div>
    );
}

export default LayoutPage;