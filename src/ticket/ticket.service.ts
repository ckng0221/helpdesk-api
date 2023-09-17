import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { getNonNullObject } from '../utils/common';
import { CreateTicketDto, UpdateTicketDto } from './dto/ticket.dto';
import { Ticket } from './schemas/ticket.schema';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<Ticket>) {}

  create(createTicketDto: CreateTicketDto) {
    const ticket = new this.ticketModel(createTicketDto);
    return ticket.save();
  }

  async findAll(queryParams: object): Promise<Ticket[]> {
    const filterOptions = getNonNullObject(queryParams);

    return this.ticketModel.find(filterOptions).exec();
  }

  async findOne(id: string): Promise<Ticket> {
    return this.ticketModel.findById(id).exec();
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    const user = await this.ticketModel.findById(id).exec();
    return await user.updateOne(updateTicketDto);
  }

  async remove(id: string) {
    await this.ticketModel
      .findByIdAndUpdate(id, { deletion_flag: true })
      .exec();
    return `Deleted ticket id: ${id}`;
  }
}
