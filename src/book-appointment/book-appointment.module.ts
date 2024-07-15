import { Module } from '@nestjs/common';
import { BookAppointmentService } from './book-appointment.service';
import { BookAppointmentController } from './book-appointment.controller';
import { MailService } from 'src/mail/mail.service';

@Module({
    controllers: [BookAppointmentController],
    providers: [BookAppointmentService, MailService],
})
export class BookAppointmentModule { }
