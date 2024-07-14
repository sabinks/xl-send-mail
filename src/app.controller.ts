import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @EventPattern('test-message')
    getNotifications(@Payload() data: any, @Ctx() context: RmqContext) {
        console.log(data);

        // console.log(`Pattern: ${context.getPattern()}`);
        // console.log(`Message: ${context.getMessage()}`);
        // console.log(`Channel Ref: ${context.getChannelRef()}`);
    }
}
