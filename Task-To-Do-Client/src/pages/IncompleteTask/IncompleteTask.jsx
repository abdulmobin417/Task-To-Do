import SingleTask from "../../components/SingleTask";
import "../Home/Scrollbar.css";

const IncompleteTask = () => {
  const totalTask = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="min-w-[346px] bg-[#F2F4F7] py-3 px-2 mb-auto ml-2">
      <div className="flex items-center justify-between ml-2">
        <div className="flex gap-2 items-center">
          <div className="bg-red-600 h-6 w-5 rounded-l-full"></div>
          <div>
            <h2 className="text-gray-600 text-lg font-semibold">Incomplete</h2>
          </div>
        </div>
        <div className="bg-[#E8EEF3] px-2 rounded">
          <h2 className="text-gray-600 text-lg font-semibold">0</h2>
        </div>
      </div>
      <div className="mt-3 max-h-[720px] 2xl:max-h-[800px] overflow-y-scroll task-scroll">
        {totalTask?.map((id) => (
          <SingleTask key={id} taskId={id} taskType={"IncompleteTask"} />
        ))}
      </div>
    </div>
  );
};

export default IncompleteTask;
