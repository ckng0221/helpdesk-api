import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import {
  CreateTicketDto,
  TICKET_MODULES,
  UpdateTicketDto,
} from './dto/ticket.dto';
import { TicketService } from './ticket.service';

@ApiTags('ticket')
@Controller({
  version: '1',
  path: 'ticket/tickets',
})
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Get()
  @ApiQuery({
    name: 'ticket_status',
    required: false,
  })
  @ApiQuery({
    name: 'ticket_module',
    required: false,
    enum: TICKET_MODULES,
  })
  @ApiQuery({
    name: 'open_datetime_start',
    required: false,
  })
  @ApiQuery({
    name: 'open_datetime_end',
    required: false,
  })
  findAll(
    @Query('ticket_status') ticket_status?: string,
    @Query('ticket_module') ticket_module?: string,
    @Query('open_datetime_start') open_datetime_start?: Date,
    @Query('open_datetime_end') open_datetime_end?: Date,
  ) {
    const queryParams = {
      ticket_status,
      ticket_module,
      open_datetime_start,
      open_datetime_end,
    };

    return this.ticketService.findAll(queryParams);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketService.remove(id);
  }
}
