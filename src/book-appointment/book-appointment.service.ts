import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class BookAppointmentService {
    constructor(
        private mailService: MailService
    ) { }

    async bookAppointmentCreated(bookAppointment: any) {
        const { name, email, phone, dob, bookingDateTime, description } = bookAppointment
        if (bookAppointment) {
            await this.mailService.sendMailToAdminBookAppoiontmentCreated({
                name, email, phone, dob, bookingDateTime, description,
                adminName: process.env.ADMIN_NAME,
                adminEmail: process.env.ADMIN_EMAIL,
                appName: process.env.APP_NAME
            })
            await this.mailService.sendMailToClientBookAppoiontmentCreated({
                adminName: process.env.ADMIN_NAME,
                adminEmail: process.env.ADMIN_EMAIL,
                bookingDateTime: bookAppointment.bookingDateTime,
                clientName: name,
                appName: process.env.APP_NAME
            })
            console.log('Book Appointment Mail Sent!');
        }
    }

    async bookAppointmentConfirmed(bookAppointment: any) {
        await this.mailService.sendMailToClientBookAppoiontmentConfirmed(bookAppointment)
        console.log('Book Appointment Confirmed Mail Sent!')
    }
    async bookAppointmentCanceled(bookAppointment: any) {
        await this.mailService.sendMailToClientBookAppoiontmentCanceled(bookAppointment)
        console.log('Book Appointment Canceled Mail Sent!');
    }
}
