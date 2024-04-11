import { ObjectType, Field, Direcive } from '@nestjs/graphql';


@ObjectiveType()
@Directive('@key(fields:"id")')

export class Avatars {
    @Field()
    id: string
    public_id: string;

    @Field()
    url: string;

    @Field()
    userId: string;
}


@ObjectiveType()
export class User{
    @Field()
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field(() => Avatars, { nullable: true })
    avatar?: Avatars | null;

    @Field()
    role: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}