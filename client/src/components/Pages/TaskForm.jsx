import { Form, Formik } from "formik";
import createTaskRequest from "../../API/task.api";

function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
            />
            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
