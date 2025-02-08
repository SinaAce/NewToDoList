import { MdRadioButtonUnchecked } from "react-icons/md";

const Task = ({task}) => {
  return (
    <>
      {task.map((e, index) => (
        <div
          key={index}
          className="w-11/12 border border-slate-300 h-16 p-3 shadow-md flexCenter justify-start gap-7 rounded-md"
        >
          <div className="w-5 cursor-pointer">
            <MdRadioButtonUnchecked />
          </div>
          <div className="w-5 flexCenter">{index}</div>
          <div className="w-2/6 flexCenter font-semibold">{e.name}</div>
          <div className="w-2/6 flexCenter">{e.date}</div>
          <div className=" w-[100px] bg-yellow-400 p-1 rounded-md flexCenter">
            {e.status}
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
