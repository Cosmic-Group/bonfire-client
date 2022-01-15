import React from 'react';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  FormProvider,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { createUser } from './use-cases';
import { validations } from './validations';
import { Button } from '../../../atoms';
import { InputField } from '../../../molecules';
import { Form } from './styles';

export const RegisterForm: React.FC = () => {
  const methods = useForm<IUser>({
    resolver: yupResolver(validations),
  });

  const { errors } = methods.formState;

  const onSubmit: SubmitHandler<IUser> = data => {
    createUser(data);
  };

  const onError: SubmitErrorHandler<IUser> = error => {
    console.log(error);
  };

  return (
    <Form onSubmit={methods.handleSubmit(onSubmit, onError)}>
      <FormProvider {...methods}>
        <InputField
          label="Name"
          name="name"
          icon={faUser}
          error={errors.name?.message}
        />
        <InputField
          label="Email"
          name="email"
          icon={faEnvelope}
          error={errors.email?.message}
        />
        <InputField
          label="Password"
          icon={faKey}
          type="password"
          name="password"
          error={errors.password?.message}
        />
        <InputField
          label="Repeat password"
          icon={faKey}
          type="password"
          name="password"
          error={errors.passwordConfirmation?.message}
        />
      </FormProvider>
      <Button type="submit" label="Register" />
    </Form>
  );
};
