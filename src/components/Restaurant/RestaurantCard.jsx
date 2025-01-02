/* eslint-disable react/prop-types */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantCard = ({ name, rating, address, outcode, postcode, type_of_food }) => {

    const renderStars = (rating) => {
        // const stars = [];
        // for (let i = 1; i <= 5; i++) {
        //     stars.push(i <= rating ? <faStar key={i} className="text-yellow-500" /> : <faStar key={i} className="text-gray-300" />);
        // }
        // console.log(stars);
        
        // return stars;

        for (let i = 1; i <= Math.floor(rating); i++){
            return <FontAwesomeIcon icon={faStar} key ={i} className = "text-yellow-500"/>
        }
    };


    return (
        <div className="p-4 bg-slate-100 rounded-md shadow-md w-80 text-gray-800 hover:scale-95 cursor-pointer transition-all duration-200 ">
            
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{name}</h2>
                {/* <div className="flex">{renderStars(rating)}</div> */}
            </div>

            <div className="mb-2">
                <p className="text-sm">{address}</p>
            </div>

            <div className="mb-2">
                <p className="text-sm">
                    <span className="font-medium">Outcode:</span> {outcode}
                </p>
                <p className="text-sm">
                    <span className="font-medium">Postcode:</span> {postcode}
                </p>
            </div>

            <div className="text-sm italic text-gray-600">
                <p>{type_of_food}</p>
            </div>
        </div>
    );
};

export default RestaurantCard