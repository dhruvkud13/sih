import React from "react";
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full bg-bgdark">
      <div className="h-96 w-96 rounded-xl bg-purple flex flex-col items-center justify-center">
        <div className="rounded-full">
          <div>
            <div className="text-sm absolute px-2 text-[#979797]">Username</div>
            <input
              type="text"
              className="border-none rounded-xl text-black bg-white outline-none p-2 pt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
