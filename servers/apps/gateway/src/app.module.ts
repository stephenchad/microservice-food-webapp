/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 09/04/2024 - 14:59:20
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 09/04/2024
    * - Author          :
    * - Modification    :
**/
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new  IntrospectAndCompose({
          subgraphs: [],
        }),
      },
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
