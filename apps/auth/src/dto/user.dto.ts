import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';

@InputType()
export class RegisterDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required!' })
  @IsString({ message: 'Name must be a string!' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Email must be provided!' })
  @IsEmail({}, { message: 'Invalid email!' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: 'Password must be at least 8 characters!' })
  password: string;
}

@InputType()
export class LoginDto {
  @Field()
  @IsNotEmpty({ message: 'Email must be provided!' })
  @IsEmail({}, { message: 'Invalid email!' })
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
