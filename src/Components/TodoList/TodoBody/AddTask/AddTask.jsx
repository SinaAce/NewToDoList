import { Field, Form, Formik } from "formik";

const AddTask = ({ whenSub }) => {
  
  return (
    <div className="h-14 w-11/12">
      <Formik
        className="h-full w-full"
        initialValues={{
          task: "",
        }}
        onSubmit={(values, { resetForm }) => {
          if (values.task.trim() === "") return;

          const newTask = {
            name: values.task,
            date: new Date().toLocaleDateString(),
            status: "normal",
          };

          whenSub(newTask);
          resetForm();
        }}
      >
        <Form className="h-full w-full flexCenter gap-1">
          <Field
            name="task"
            type="text"
            className="bg-blue-600 h-full w-10/12 p-3 text-slate-200 outline-none rounded-md placeholder:text-slate-300 placeholder:text-base text-lg"
            placeholder="ADD NEW TASK ..."
          />
          <button
            type="submit"
            className="h-full w-2/12 bg-blue-800 rounded-md text-slate-200 text-xl"
          >
            SUBMIT
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTask;
