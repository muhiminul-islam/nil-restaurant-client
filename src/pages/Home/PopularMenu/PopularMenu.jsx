
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Check it out"
                heading="From our menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to="/menu">
                <button className="btn btn-outline mx-auto md:flex justify-center border-0 border-b-4 mt-8">View Full Menu</button>
            </Link>
        </section>
    );
};

export default PopularMenu;