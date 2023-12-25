import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "user "})
export class User {
    @Field(() => ID)
    id: number

    @Field(() => String)
    username: string

    @Field({nullable: true })
    email?: string

    @Field(() => String)
    password: string

    @Field(() => String)
    screenName: string
}