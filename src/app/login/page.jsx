/** @format */
"use client";

import TextInput from "../../components/atoms/TextInput/TextInput";
import AuthLayout from "../../components/layout/AuthLayout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearLogin, postLogin } from "../../redux/features/login/action";
import Spinner from "../../components/atoms/Spinner/Spinner";
import Button from "../../components/atoms/Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  const [modifiedData, setModifiedData] = useState({
    email: "",
    password: "",
  });

  const { data, loading } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(modifiedData));
  };

  useEffect(() => {
    if (data?.status === "success") {
      localStorage.setItem("token", data.data.token);
      router.replace("/");
    }
  }, [data?.status]);

  useEffect(() => {
    return () => {
      dispatch(clearLogin());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModifiedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit} className="p-8">
        <TextInput
          type="email"
          name="email"
          placeholder="Email"
          value={modifiedData.email}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          name="password"
          placeholder="Password"
          value={modifiedData.password}
          onChange={handleChange}
        />
        <Button type="submit" full>
          {loading ? <Spinner /> : <div>MASUK</div>}
        </Button>
        <p className="text-center">
          Belum punya akun?{" "}
          <Link href="/register" className="text-primary">
            Daftar disini
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
