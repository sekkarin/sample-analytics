import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  private readonly analytic: any[] = [];
  getHello(): string {
    return 'Hello World!';
  }
  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated  - ANYAYRIC', data);
    this.analytic.push({
      email: data.email,
      timestamp: new Date(),
    });
  }
  getAnalytics() {
    return this.analytic;
  }
}
