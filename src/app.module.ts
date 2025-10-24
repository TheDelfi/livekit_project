import { Module } from '@nestjs/common';
import { MainPageModule } from './main_page/main_page.module';


@Module({
  imports: [MainPageModule],
})
export class AppModule {}
