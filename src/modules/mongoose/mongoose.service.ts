import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongooseService {
  constructor(private readonly configService: ConfigService) {}

  getConfig() {
    return this.configService.get<string>('monogo');
  }
}
