import { Module } from '@nestjs/common';
import { LivekitSdkService } from './livekit_sdk.service';
import { LivekitSdkController } from './livekit_sdk.controller';

@Module({
  controllers: [LivekitSdkController],
  providers: [LivekitSdkService],
})
export class LivekitSdkModule {}
