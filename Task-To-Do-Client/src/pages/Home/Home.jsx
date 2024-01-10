import Completed from "../Completed/Completed";
import Doing from "../Doing/Doing";
import IncompleteTask from "../IncompleteTask/IncompleteTask";
import OverDue from "../OverDue/OverDue";
import ToDo from "../ToDo/ToDo";
import UnderReview from "../UnderReview/UnderReview";
import "./Scrollbar.css";

const Home = () => {
  return (
    <div className="pt-8 border-t-[1px] border-r-[1px] border-gray-400">
      <div className="flex gap-4 overflow-x-scroll horizontal-scroll">
        <IncompleteTask />
        <ToDo />
        <Doing />
        <UnderReview />
        <Completed />
        <OverDue />
      </div>
    </div>
  );
};

export default Home;
