import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { UserService } from "src/user/user.service"
import { User } from "../models/User.model"
import { NewUserInput } from "../dto/NewUserInput.dto"

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async user(@Args("id") id: number): Promise<User> {
    return this.userService.findOne(id)
  }

  @Query((returns) => [User])
  async users(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Mutation((returns) => User)
  async addUser(@Args("newUserData") newUserData: NewUserInput): Promise<User> {
    const user = await this.userService.create(newUserData)
    return user
  }

  @Mutation((returns) => Boolean)
  async removeUser(@Args("id") id: number) {
    return this.userService.remove(id)
  }
}
