import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Recommendation from "../Recommendation/Recommendation";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Nil Restaurant | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Recommendation></Recommendation>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;