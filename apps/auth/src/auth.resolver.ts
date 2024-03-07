import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { RegisterResponse } from './constants/user.constant';
import { RegisterDto } from './dto/user.dto';
import { Response } from 'express';
import { BadRequestException, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
@Resolver('User')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => RegisterResponse)
  async register(
    @Args('regInput') registerDto: RegisterDto,
    @Context() context: { res: Response },
  ): Promise<RegisterResponse> {
    if (!registerDto.name || !registerDto.email || !registerDto.password) {
      throw new BadRequestException('Please fill all fieldds');
    }
    const user = await this.authService.register(registerDto);
    return { user };
  }

  // @Query(()=>[User])
}
