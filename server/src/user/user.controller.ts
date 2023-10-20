import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/google.strategy';


@Controller('users')
export class UserController {
  @UseGuards(AuthGuard)
  @Get('profile')
  async login(@Req() request): Promise<any> {
    return {
      message: 'User information from Google',
      user: request.user,
    };
  }
}
