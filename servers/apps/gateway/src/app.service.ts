/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 09/04/2024 - 14:57:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/04/2024
    * - Author          : 
    * - Modification    : 
**/
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Stephen Chad Ethan!';
  }
}
