import { Formik, Field, Form } from "formik";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={({ setSubmitting }) => {
        console.log("Form is validated! Submitting the form...");
        setSubmitting(false);
      }}
    >
      {({isSubmitting}) => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">Ваш ник</label>
            <Field type="email" name="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <Field type="password" name="password" className="form-control" />
          </div>
          <button type="submit" disabled={isSubmitting}>
             Войти
           </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
