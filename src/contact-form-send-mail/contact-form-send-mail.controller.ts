import { Controller } from '@nestjs/common';
import { ContactFormSendMailService } from './contact-form-send-mail.service';
import { CreateContactFormSendMailDto } from './dto/create-contact-form-send-mail.dto';
import { EventPattern, Payload } from '@nestjs/microservices';
@Controller()
export class ContactFormSendMailController {
    constructor(private readonly contactFormSendMailService: ContactFormSendMailService) { }

    @EventPattern('contact-form-send-mail')
    sendMail(@Payload() createContactFormSendMailDto: any) {
        this.contactFormSendMailService.sendMail(createContactFormSendMailDto);
    }
}
