/** @format */

'use client';
import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout/AuthLayout';
import TextInput from '../../components/atoms/TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { postRegister } from '../../redux/features/register/action';
import Toast from '../../components/atoms/Toast/Toast';
import Spinner from '../../components/atoms/Spinner/Spinner';
import Button from '../../components/atoms/Button/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const [modifiedData, setModifiedData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const { data, loading, error } = useSelector((state) => state.register);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegister(modifiedData));
  };

  useEffect(() => {
    if (data?.status === 'success') {
      router.push('/login');
    }
  }, [data?.status]);

  return (
    <AuthLayout title='Register'>
      <form action='' className='p-8' onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Nama'
          value={modifiedData.name}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, name: e.target.value })
          }
        />
        <TextInput
          type='text'
          placeholder='Email'
          value={modifiedData.email}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, email: e.target.value })
          }
        />
        <TextInput
          type='password'
          placeholder='Password'
          value={modifiedData.password}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, password: e.target.value })
          }
        />
        <Button type='submit' full={true}>
          {loading ? <Spinner /> : <div>DAFTAR</div>}
        </Button>
        <p className='text-center'>
          Sudah punya akun?{' '}
          <Link href='/login' className='text-primary'>
            Masuk disini
          </Link>
        </p>
      </form>
      {error?.status == 'fail' ? (
        <Toast error={true} message={error.message} />
      ) : null}
    </AuthLayout>
  );
};

export default RegisterPage;
