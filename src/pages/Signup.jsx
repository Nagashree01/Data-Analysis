import { useState } from "react";

const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupInput);
  };

  return (
    <div className="flex justify-center">
      <section className="mt-40 border-black border px-8 py-8">
        <form onSubmit={handleSubmit} className="text-xl flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="fullname">FullName</label>
            <input
              type="text"
              name="fullname"
              value={signupInput.fullname}
              placeholder="Enter your fullname"
              className="border p-1"
              onChange={handleSignupInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={signupInput.email}
              placeholder="Enter your email"
              className="border p-1"
              onChange={handleSignupInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={signupInput.password}
              placeholder="Enter your password"
              onChange={handleSignupInputChange}
              className="border p-1"
              required
            />
          </div>
          <button className="border bg-black text-white py-2">Signup</button>
        </form>
      </section>
    </div>
  );
};

export default Signup;
