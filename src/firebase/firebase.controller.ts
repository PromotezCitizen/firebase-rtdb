import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('/push')
  async push(@Body() b) {
    this.firebaseService.push('test/testing', b);
  }

  @Post('/set')
  async set(@Body() b) {
    this.firebaseService.set('test/testing', b);
  }

  @Delete('')
  async del(@Query('path') p) {
    this.firebaseService.remove(p);
  }

  @Put('')
  async put(@Body() b) {
    this.firebaseService.update('test', b);
  }

  @Get('')
  async get(@Query('path') p) {
    return this.firebaseService.get(p);
  }
}
