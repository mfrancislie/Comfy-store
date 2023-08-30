import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

const Login = () => {
  return (
    <section className="grid place-items-center h-screen">
      <Form
        method="post"
        className="card w-[30%] p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput type="password" label="password" name="password" />
        <SubmitBtn text="Login" />
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
