import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md: ml-10">
                    <p>June 24, 2050</p>
                    <h2 className="uppercase">Where can I get some?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt ad nam consectetur magni ullam? Ut nesciunt, corrupti iusto vel animi sunt, deserunt doloribus voluptatum, commodi enim tenetur doloremque? Amet illo minima itaque dolore accusamus molestias voluptatibus magni a eaque.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-8">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;