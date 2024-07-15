import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ForgotPasswordService {
    constructor(
        private mailer: MailService
    ) { }
    async forgotPassword(payload: any) {
        this.mailer.resetPasswordMail(payload)
    }
}
