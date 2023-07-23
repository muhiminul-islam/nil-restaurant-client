import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import salad from '../../../assets/others/salad.jpg'
import pizza from '../../../assets/others/pizza.jpg'
import soup from '../../../assets/others/soup.jpg'


const Recommendation = () => {
    return (
        <section>
            <SectionTitle
                subHeading="Should Try"
                heading="Chef Recommends"
            >
            </SectionTitle>
            <div className="avatar flex text-center">
                
                    <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={salad} alt="" />
                    </div>
                    <h2 className='mt-5 text-2xl font-bold text-fuchsia-600'>Salad</h2>
                
                
                <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={pizza} alt="" />
                    </div>
                    <h2 className='mt-5 text-2xl font-bold text-fuchsia-600'>Pizza</h2>
                
                
                <div className="w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={soup} alt="" />
                    </div>
                    <h2 className='mt-5 text-2xl font-bold text-fuchsia-600'>Soup</h2>
            </div>
        </section>
    );
};

export default Recommendation;