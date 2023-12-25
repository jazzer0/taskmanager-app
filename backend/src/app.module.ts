import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UserModule } from "./user/user.module"
import { ConfigModule } from "@nestjs/config"
import { UserService } from "./user/user.service"
import { UserController } from "./user/user.controller"
import { PrismaService } from "./prisma/prisma.service"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { join } from "path"

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      envFilePath: [".env", ".env.development"],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql")
    }),
  ],
  controllers: [AppController, UserController],
  providers: [PrismaService, AppService, UserService],
})
export class AppModule {}
