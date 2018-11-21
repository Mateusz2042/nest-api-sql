import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { userProviders } from './user.providers';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepositoryToken')
    private readonly userRepository: Repository<User>,
  ) { }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password === createUserDto.confirmPassword) {
      await this.userRepository.save(createUserDto);
    }
  }

  async getById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }
}
