import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  HttpCode,
  HttpStatus,
  Res,
  Patch,
  Delete,
} from '@nestjs/common';
import { CourseService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CourseService) {}

  @Get() // rota alinhada com o paramentro list
  // metodo findAll
  findAll(@Res() response) {
    return response.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body('name') body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Àtualizacao do curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Exclusao do Curso #${id}`;
  }
}
