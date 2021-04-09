import { getCustomRepository } from 'typeorm';
import bcrypt from 'bcryptjs';

import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
  password: string;
}

class SignUpService {
  public async execute({
    name,
    email,
    cpf,
    phone_number,
    password,
  }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const emailExists = await userRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError(
        'O e-mail já está sendo utilizado por outro usuário',
        400,
      );
    }

    const passwordHashed = await bcrypt.hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      cpf,
      phone_number,
      password: passwordHashed,
    });

    await userRepository.save(user);

    return user;
  }
}

export default SignUpService;
