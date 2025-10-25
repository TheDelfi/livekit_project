import { Body, Controller, Post } from '@nestjs/common';
import { LivekitSdkService } from './livekit_sdk.service';

@Controller('livekit')
export class LivekitSdkController {
  constructor(private readonly livekitSdkService: LivekitSdkService) {}

  @Post('create_room')
  async create_room(@Body() body:any){
    console.log(body)
  }
}
