import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                subHeading="Check it out"
                heading="From our menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline mx-auto md:flex justify-center border-0 border-b-4 mt-8">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;