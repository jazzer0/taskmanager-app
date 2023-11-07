import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common"
import { User } from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(userData: Omit<User, "id">) {
    try {
      const user = await this.prismaService.user.create({
        data: userData,
      })

      Logger.debug(`Username ${user.username} has been created with id ${user.id}`)

      return user
    } catch (error) {
      Logger.error(`${JSON.stringify(error, null, 2)}`)
      throw new InternalServerErrorException("Could not create user")
    }
  }

  /*async findAll() {
    const users = await this.prismaService.user.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }*/

  async updateUser(id: number, userData: User) {
    const { id: userID } = await this.prismaService.user.findFirstOrThrow({
      where: { id: id },
      select: {
        id: true,
      },
    })

    Logger.debug(`Updating user of id ${id}`)

    try {
      return await this.prismaService.user.update({
        where: {
          id: userID,
        },
        data: userData,
      })
    } catch (error) {
      Logger.error(`${JSON.stringify(error, null, 2)}`)
      throw new InternalServerErrorException("Could not update user")
    }
  }

  async remove(id: number) {
    try {
      const user = await this.prismaService.user.delete({
        where: { id: id },
      })

      Logger.debug(`User ${id} has been deleted`)

      return user
    } catch (error) {
      Logger.error(`${JSON.stringify(error, null, 2)}`)
      throw new InternalServerErrorException("Could not remove user")
    }
  }
}
