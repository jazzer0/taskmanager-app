import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UserModule } from "./user/user.module"
import { ConfigModule } from "@nestjs/config"
import { UserService } from "./user/user.service"
import { UserController } from "./user/user.controller"
import { PrismaService } from "./prisma/prisma.service"

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.development"],
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [PrismaService, AppService, UserService],
})
export class AppModule {}
