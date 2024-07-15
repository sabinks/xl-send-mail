import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail/mail.service';
import { ContactFormSendMailModule } from './contact-form-send-mail/contact-form-send-mail.module';
import { MailModule } from './mail/mail.module';
import { BookAppointmentModule } from './book-appointment/book-appointment.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env'],
            isGlobal: true
        }),
        ContactFormSendMailModule,
        MailerModule.forRoot({
            transport: {
                host: process.env.EMAIL_HOST,
                port: Number(process.env.MAIL_PORT),
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD,
                },
            },
            defaults: {
                from: '"No Reply" <noreply@example.com>',
            },
            template: {
                dir: join(__dirname, 'mail/templates'),
                adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
                options: {
                    strict: true,
                },
            },
        }),
        MailModule,
        ContactFormSendMailModule,
        ClientsModule.register([
            {
                name: 'MAIL_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'mail_queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ]),
        BookAppointmentModule,
        ForgotPasswordModule,
    ],
    controllers: [AppController,],
    providers: [AppService, MailService],
    exports: [MailService]
})
export class AppModule { }
