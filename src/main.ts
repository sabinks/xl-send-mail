import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {

    });
    app.connectMicroservice({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'mail_queue',
            queueOptions: {
                durable: false
            },
        }
    })
    let port = process.env.PORT || 3001;
    await app.startAllMicroservices()
    await app.listen(port);
    console.log('Main App running on:' + port);


}
bootstrap();
