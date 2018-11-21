import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiModelProperty()
  readonly firstName: string;

  @ApiModelProperty()
  readonly lastName: string;

  @ApiModelProperty()
  readonly birthDate: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly login: string;

  @ApiModelProperty()
  readonly password: string;

  @ApiModelProperty()
  readonly confirmPassword: string;
}
