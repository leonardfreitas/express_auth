import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface UpdateUserParams {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone_number: string;
}

class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    cpf,
    phone_number,
  }: UpdateUserParams): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne(id);

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    user.name = name;
    user.email = email;
    user.cpf = cpf;
    user.phone_number = phone_number;

    await userRepository.save(user);

    return user;
  }
}

export default UpdateUserService;
