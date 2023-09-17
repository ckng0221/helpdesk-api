import { Test, TestingModule } from '@nestjs/testing';
import { FactoryController, UserController } from './main.controller';
import { FactoryService, UserService } from './main.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Factory } from './schemas/factory.schema';

describe('MainController', () => {
  let userController: UserController;
  let userService: UserService;
  let factoryController: FactoryController;
  let factoryService: FactoryService;
  const userModel = new User();
  const factoryModel = new Factory();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController, FactoryController],
      providers: [
        UserService,
        FactoryService,
        { provide: getModelToken(User.name), useValue: userModel },
        { provide: getModelToken(Factory.name), useValue: factoryModel },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
    factoryController = module.get<FactoryController>(FactoryController);
    factoryService = module.get<FactoryService>(FactoryService);
  });

  describe('Users', () => {
    it('should be defined', () => {
      expect(userController).toBeDefined();
    });

    describe('findAll', () => {
      it('should return an array of Users', async () => {
        const users: User[] = [];
        const createUser = (erp_name: string, name: string) => {
          const user = new User();
          user.erp_name = erp_name;
          user.name = name;
          return user;
        };
        users.push(createUser('ck_ng', 'Ng CK'));
        users.push(createUser('ck_ng2', 'Ng CK 2'));

        jest
          .spyOn(userService, 'findAll')
          .mockImplementation(() => Promise.resolve(users));

        const findAllResult = await userController.findAll();

        expect(findAllResult).toBe(users);
      });
    });
  });

  describe('Factories', () => {
    it('should be defined', () => {
      expect(factoryController).toBeDefined();
    });

    describe('findAll', () => {
      it('should return an array of Factories', async () => {
        const factories: Factory[] = [];
        const createFactory = (fac_code: string, name: string) => {
          const factory = new Factory();
          factory.fac_code = fac_code;
          factory.name = name;
          return factory;
        };
        factories.push(createFactory('0001', 'Factory1'));
        factories.push(createFactory('0001', 'Factory2'));

        jest
          .spyOn(factoryService, 'findAll')
          .mockImplementation(() => Promise.resolve(factories));

        const findAllResult = await factoryController.findAll();

        expect(findAllResult).toBe(factories);
      });
    });
  });
});
