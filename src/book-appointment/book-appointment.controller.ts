import { Controller } from '@nestjs/common';
import { BookAppointmentService } from './book-appointment.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('book-appointment')
export class BookAppointmentController {
    constructor(private readonly bookAppointmentService: BookAppointmentService) { }

    @EventPattern('book-appointment.created')
    handleBookAppointmentCreated(@Payload() bookAppointment: any) {
        this.bookAppointmentService.bookAppointmentCreated(bookAppointment)
    }

    @EventPattern('book-appointment.status-confirmed')
    handleBookAppointmentConfirmed(bookAppointment: any) {
        this.bookAppointmentService.bookAppointmentConfirmed(bookAppointment)
    }
    @EventPattern('book-appointment.status-canceled')
    handleBookAppointmentCanceled(bookAppointment: any) {
        this.bookAppointmentService.bookAppointmentCanceled(bookAppointment)
    }
    @EventPattern('book-appointment-payment')
    handleBookAppointmentPayment(data: any) {
        this.bookAppointmentService.bookAppointmentPayment(data)
    }
}
