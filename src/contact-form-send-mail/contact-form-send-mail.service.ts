import { Inject, Injectable } from '@nestjs/common';
import { CreateContactFormSendMailDto } from './dto/create-contact-form-send-mail.dto';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class ContactFormSendMailService {
    constructor(private mailService: MailService,
    ) {
    }

    sendMail(createContactFormSendMailDto: CreateContactFormSendMailDto) {
        this.mailService.contactFormSendAdmin(createContactFormSendMailDto)
        console.log('Contact Form Mail Sent!');
    }
}
