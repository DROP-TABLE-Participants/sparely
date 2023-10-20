import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/google.strategy';

@Controller('users')
export class UserController {
  @UseGuards(AuthGuard)
  @Get('profile')
  async login(@Req() request): Promise<any> {
    return {
      id: request.userId,
      firstName: request.user.given_name,
      lastName: request.user.family_name,
      email: request.user.email,
      picture: request.user.picture,
      name: request.user.name,
    };
  }
}
