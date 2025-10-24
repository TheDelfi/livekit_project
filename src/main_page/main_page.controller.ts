import { Controller } from '@nestjs/common';
import { MainPageService } from './main_page.service';

@Controller()
export class MainPageController {
  constructor(private readonly mainPageService: MainPageService) {}
}
