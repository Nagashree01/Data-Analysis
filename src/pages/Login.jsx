import { useState } from "react";

const Login = () => {
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginInput);
  };
  return (
    <div className="flex justify-center">
      <section className="mt-40 border-black border px-8 py-8">
        <form onSubmit={handleSubmit} className="text-xl flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={loginInput.email}
              placeholder="Enter your email"
              className="border p-1"
              onChange={handleLoginInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={loginInput.password}
              placeholder="Enter your password"
              onChange={handleLoginInputChange}
              className="border p-1"
              required
            />
          </div>
          <button className="border bg-black text-white py-2">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
