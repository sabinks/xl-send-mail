import { Module } from '@nestjs/common';
import { ContactFormSendMailService } from './contact-form-send-mail.service';
import { ContactFormSendMailController } from './contact-form-send-mail.controller';
import { MailModule } from 'src/mail/mail.module';
import { MailService } from 'src/mail/mail.service';

@Module({
    imports: [],
    controllers: [ContactFormSendMailController],
    providers: [ContactFormSendMailService, MailService],
})
export class ContactFormSendMailModule { }
