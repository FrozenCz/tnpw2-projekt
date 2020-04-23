import {Module} from "@nestjs/common";
import {UsersController} from "./controllers/users.controller";
import {MongooseModule} from "@nestjs/mongoose"
import {UsersSchema} from "./schemas/users.schema";
import {UsersRepository} from "./repositories/users.repository";


@Module({
  imports: [
    MongooseModule.forFeature([
        {
          name: "User", schema: UsersSchema
        }
      ]
    )
  ],
  controllers: [UsersController],
  providers: [
    UsersRepository
  ]
})
export class UsersModule {

}
