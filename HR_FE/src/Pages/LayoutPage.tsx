import LayoutFooter from "../Components/LayoutComponentes/LayoutFooter";
import LayoutHeader from "../Components/LayoutComponentes/LayoutHeader";
import LayoutSideBar from "../Components/LayoutComponentes/LayoutSideBar";

function LayoutPage() {
    return (
        <>
            <LayoutHeader></LayoutHeader>
            <LayoutSideBar></LayoutSideBar>
            <LayoutFooter></LayoutFooter>
        </>
    );
}

export default LayoutPage;