import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './main.controller';
import { UserService } from './main.service';

describe('MainController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

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
