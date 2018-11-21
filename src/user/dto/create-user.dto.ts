import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty()
   firstName: string;

  @ApiModelProperty()
  lastName: string;

  @ApiModelProperty()
  birthDate: string;

  @ApiModelProperty()
  email: string;

  @ApiModelProperty()
  login: string;

  @ApiModelProperty()
  password: string;

  @ApiModelProperty()
  confirmPassword: string;
}
