import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl text-bold text-foreground tracking-tight">
          Create An Account
        </h1>
        <p className="mt-2">
          Already Have An Account
          <Link className="font-medium text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
