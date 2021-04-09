import { Request, Response } from 'express';

import ListUserService from '../services/ListUserService';
import DetailUserService from '../services/DetailUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

class UserController {
  /**
   * GET /users
   */
  public async list(request: Request, response: Response): Promise<Response> {
    const listUserService = new ListUserService();

    const users = await listUserService.execute();

    return response.json(users);
  }

  /**
   * GET /users/:id
   */
  public async detail(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute({ id });

    return response.json(user);
  }

  /**
   * PUT /users/:id
   */
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, cpf, phone_number } = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id,
      name,
      email,
      cpf,
      phone_number,
    });

    return response.json(user);
  }

  /**
   * DELETE /users/:id
   */
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUserService = new DeleteUserService();

    await deleteUserService.execute({ id });

    return response.send(200);
  }
}

export default UserController;
