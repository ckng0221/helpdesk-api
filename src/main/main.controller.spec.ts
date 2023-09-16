import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './main.controller';
import { UserService } from './main.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './schemas/main.schema';

describe('MainController', () => {
  let controller: UserController;
  const userModel = new User();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        { provide: getModelToken(User.name), useValue: userModel },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // it('Create user', async () => {
  //   const payload = new User({
  //     erp_name: 'ck_ng',
  //     name: 'CK',
  //     email: 'sdf@email.com',
  //   });
  //   const user = await controller.create(payload);
  //   expect(user).toMatchObject(payload);
  // });

  // describe('findAll', () => {
  //   it('should return an array of tags', async () => {
  //     const tags: TagEntity[] = [];
  //     const createTag = (id, name) => {
  //       const tag = new TagEntity();
  //       tag.id = id;
  //       tag.tag = name;
  //       return tag;
  //     };
  //     tags.push(createTag(1, 'angularjs'));
  //     tags.push(createTag(2, 'reactjs'));

  //     jest
  //       .spyOn(tagService, 'findAll')
  //       .mockImplementation(() => Promise.resolve(tags));

  //     const findAllResult = await tagController.findAll();
  //     expect(findAllResult).toBe(tags);
  //   });
  // });
});
