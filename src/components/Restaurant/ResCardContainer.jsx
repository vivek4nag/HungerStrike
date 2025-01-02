import ResData from "../../utils/ResData"
import RestaurantCard from "./RestaurantCard"


const ResCardContainer = () => {
  return (
    <div className=" pt-[8rem] pb-[2rem] flex flex-wrap gap-4 justify-center items-center bg-slate-100">
        {ResData.map((res, idx) => <RestaurantCard key={idx} {...res} />)}
      </div>
  )
}

export default ResCardContainer