import { Controller } from '@nestjs/common';
import { ForgotPasswordService } from './forgot-password.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('forgot-password')
export class ForgotPasswordController {
    constructor(private readonly forgotPasswordService: ForgotPasswordService) { }

    @EventPattern('reset-password')
    handleResetPassword(payload: any) {
        this.forgotPasswordService.forgotPassword(payload)
    }
}
