import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@ObjectiveType()
export class ErrorType {
    @Field()
    message: string;

    @Field({nullable: true })
    code?: string;
}

@ObjectiveType()
export class RegisterResponse {
    @Field(() => User, {nullable: true})
    user?: User | any;

    @Field(() => ErrorType, { nulable: true })
    error?: ErrorType;
}

@ObjectiveType()
export class LoginResponse {
    @Field(() => User)
    user: User;
    
    @Field(() => ErrorType, { nulable: true })
    error?: ErrorType;
}