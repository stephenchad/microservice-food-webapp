/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/04/2024 - 14:55:04
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/04/2024
    * - Author          : 
    * - Modification    : 
**/
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  await app.listen(4001);
}
bootstrap();
