import { Module } from '@nestjs/common';
import { MainPageModule } from './main_page/main_page.module';
import { LivekitSdkModule } from './livekit_sdk/livekit_sdk.module';


@Module({
  imports: [MainPageModule, LivekitSdkModule],
})
export class AppModule {}
