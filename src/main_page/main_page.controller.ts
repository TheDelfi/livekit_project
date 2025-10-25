import { Controller, Get, Render } from '@nestjs/common';
import { MainPageService } from './main_page.service';

@Controller()
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}


  @Get('create_room')
  @Render('create_room')
  async create_room(){
    return {}
  }
}
