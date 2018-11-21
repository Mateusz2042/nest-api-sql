import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@ApiUseTags('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('findAll')
  @UseGuards(AuthGuard())
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get('getById/:id')
  @UseGuards(AuthGuard())
  async getById(@Param('id') id: number) {
    return await this.userService.getById(id);
  }

  @Delete('delete/:id')
  @UseGuards(AuthGuard())
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }

  @Patch('update/:id')
  @UseGuards(AuthGuard())
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }
}
