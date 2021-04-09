import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import SignInService from '../services/SignInService';
import SignUpService from '../services/SignUpService';

class AuthController {
  /**
   * POST /auth/signup
   */
  public async signup(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, phone_number, password } = request.body;

    const signupService = new SignUpService();

    const user = await signupService.execute({
      name,
      email,
      cpf,
      phone_number,
      password,
    });

    return response.json(classToClass(user));
  }

  /**
   * POST /auth/sigin
   */
  public async signin(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const signinService = new SignInService();

    const payload = await signinService.execute({
      email,
      password,
    });

    return response.json(classToClass(payload));
  }
}

export default AuthController;
