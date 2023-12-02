import Header from "../components/Header";
import LoginBanner from "../components/LoginBanner";
import SideNavigation from "../components/SideNavigation";
const Home = () =>{
return(
    <section className="home-main-content">
    <LoginBanner srcUrl={"https://assets.tatacliq.com/medias/sys_master/images/49520053649438.jpg"}/>
    <h1 className="offer-heading">Offers for You</h1>
    <LoginBanner srcUrl={"https://assets.tatacliq.com/medias/sys_master/images/49444379885598.jpg"}/>
    <LoginBanner srcUrl={"https://assets.tatacliq.com/medias/sys_master/images/49538918154270.jpg"} />
    <LoginBanner srcUrl="https://assets.tatacliq.com/medias/sys_master/images/49520487039006.jpg" />
    <LoginBanner  srcUrl={"https://assets.tatacliq.com/medias/sys_master/images/49493561540638.jpg"}/>

    
    </section>
)
}

export default Home;