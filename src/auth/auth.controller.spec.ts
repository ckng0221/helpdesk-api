/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserService } from '../main/main.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../main/schemas/user.schema';
import { UserController } from '../main/main.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  let userController: UserController;
  let userService: UserService;
  const userModel = new User();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController, UserController],
      providers: [
        AuthService,
        UserService,
        JwtService,
        { provide: getModelToken(User.name), useValue: userModel },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  describe('Auths', () => {
    it('should be defined', () => {
      expect(authController).toBeDefined();
    });

    it('User login', async () => {
      const createUser = (erp_name: string, password: string) => {
        const user = new User();
        user.erp_name = erp_name;
        user.password = password;
        return user;
      };
      const usernameTest = 'ck_ng';
      const passwordTest = 'password123';
      const user = createUser(usernameTest, passwordTest);

      jest
        .spyOn(userService, 'findByUsername')
        .mockImplementation(() => Promise.resolve(user));

      const accessToken = await authController.signIn({
        username: usernameTest,
        password: passwordTest,
      });

      expect(accessToken).toBeTruthy();

      expect(authController).toBeDefined();
    });
  });
});
