import { Module } from '@nestjs/common';
import { ForgotPasswordService } from './forgot-password.service';
import { ForgotPasswordController } from './forgot-password.controller';
import { MailService } from 'src/mail/mail.service';

@Module({
    controllers: [ForgotPasswordController],
    providers: [ForgotPasswordService, MailService],
})
export class ForgotPasswordModule { }
