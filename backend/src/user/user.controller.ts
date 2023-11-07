import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from "@nestjs/common"
import { UserService } from "./user.service"
import { User } from "@prisma/client"

/*
id         Int     @id @default(autoincrement())
  username   String
  password   String
  email      String?
  screenName String? @map("screen_map")
  tasks      Task[]  @relation("user_has_tasks")
  */
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create")
  create(
    @Body()
    userData: Omit<User, "id">,
  ) {
    return this.userService.create(userData)
  }

  /*@Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id)
  }*/

  @Patch(":id")
  update(@Param("id") id: number, @Body() userData: User) {
    return this.userService.updateUser(+id, userData)
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.userService.remove(+id)
  }
}
