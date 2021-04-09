import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import UserRepository from '../typeorm/repositories/UserRepository';

interface DeleteUserParams {
  id: string;
}

class DeleteUserService {
  public async execute({ id }: DeleteUserParams): Promise<void> {
    const userRepositry = getCustomRepository(UserRepository);

    const user = await userRepositry.findOne(id);

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    await userRepositry.remove(user);
  }
}

export default DeleteUserService;
