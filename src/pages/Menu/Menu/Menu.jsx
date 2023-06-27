import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Nil Restaurant | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="Our menu"></Cover>
            <SectionTitle subHeading="Don't miss" heading="Today's offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} coverImg={dessertImg} title="Desserts"></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} coverImg={pizzaImg} title="Pizza"></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} coverImg={saladImg} title="Salads"></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} coverImg={soupImg} title="Soups"></MenuCategory>

        </div>
    );
};

export default Menu;