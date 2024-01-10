import img1 from "../assets/man-1.jpg";
import img2 from "../assets/man-2.jpg";
import img3 from "../assets/female-1.jpg";
import img4 from "../assets/icon-1.png";
import { SiEbox } from "react-icons/si";
import { MdAssignment } from "react-icons/md";
import { PiChatsCircleLight } from "react-icons/pi";
import { RiAttachment2 } from "react-icons/ri";
import { MdCalendarMonth } from "react-icons/md";
import PropTypes from "prop-types";
import { useRef } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useFiles from "../hooks/useFiles";

const SingleTask = ({ taskId, taskType }) => {
  const fileName = useRef("");
  const axiosPublic = useAxiosPublic();
  const { taskFile, refetch } = useFiles({ taskType });
  const files = taskFile?.filter(
    (aFile) => aFile.taskId === taskId && aFile.taskType === taskType
  );

  const handleFile = async () => {
    if (!fileName.current.files[0]) {
      return;
    }
    // console.log(fileName.current.files[0]);

    // data send post method
    const data = {
      taskId,
      taskType,
      fileName: fileName.current.files[0].name,
      fileSize: fileName.current.files[0].size,
    };
    await axiosPublic.post("/files", data).then((res) => {
      if (res.data.insertedId) {
        // toast.success("File added successful!!!");
        // console.log("inserted");
        refetch();
      }
    });

    fileName.current.value = "";
    fileName.current.type = "text";
    fileName.current.type = "file";
  };

  return (
    <div className="mt-2 bg-[#FFF] p-3 rounded mr-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src={img1}
            className="h-7 w-7 rounded-full object-cover"
            alt=""
          />
          <h2 className="text-gray-600 font-semibold">Client Name</h2>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={img2}
            className="h-7 w-7 rounded-full object-cover"
            alt=""
          />
          <h2 className="text-gray-600 font-semibold">Sadik Istiak</h2>
        </div>
      </div>
      <div className="mt-2 flex justify-between">
        <div className="flex items-center gap-2">
          <SiEbox className="text-gray-600" />
          <p className="text-sm">Lorem ipsum dolor sit amet curn...</p>
        </div>
        <div className="bg-[#F2F4F7] flex items-center gap-1 p-1 rounded">
          <MdAssignment className="text-gray-600" />
          <p className="text-gray-600 text-sm font-semibold">1/2</p>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <img src={img3} className="h-7 w-7 rounded-full object-cover" alt="" />
        <img src={img4} className="h-6 w-7 rounded-full object-cover" alt="" />
        <div className="flex items-center gap-2">
          <div className="bg-[#F2F4F7] p-1 rounded-full">
            <p className="text-sm font-semibold">12+</p>
          </div>
          <div className="flex items-center gap-1">
            <PiChatsCircleLight className="text-gray-600" />
            <p className="text-gray-600 text-sm font-semibold">15</p>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                document
                  .getElementById(`modal_${taskId}_${taskType}`)
                  .showModal()
              }
            >
              <RiAttachment2 className="text-gray-600" />
            </button>
            {/* Modal start */}
            <dialog id={`modal_${taskId}_${taskType}`} className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <div>
                    <h3 className="font-bold text-lg mb-4">Upload File</h3>
                    <div className="flex items-center gap-4">
                      <input
                        type="file"
                        ref={fileName}
                        className="file-input file-input-bordered file-input-sm w-full"
                      />
                      <button
                        className="border border-gray-500 px-2 py-[3px] rounded hover:bg-gray-800 hover:text-white font-semibold"
                        onClick={handleFile}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </form>
                <div className="Task List">
                  <h3 className="font-bold mt-3">File Lists</h3>
                  <div className="overflow-x-auto">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Name</th>
                          <th>Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        {files.length !== 0 ? (
                          files?.map((file, idx) => (
                            <tr key={file._id}>
                              <th>{idx + 1}</th>
                              <td>{file.fileName}</td>
                              <td>{file.fileSize} kb</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td>No data</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </dialog>
            {/* Modal End */}
            <p className="text-gray-600 text-sm font-semibold">
              {files.length}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <MdCalendarMonth className="text-gray-600" />
            <p className="text-gray-600 text-sm font-semibold">30-12-2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleTask.propTypes = {
  taskId: PropTypes.number,
  taskType: PropTypes.string,
};

export default SingleTask;
