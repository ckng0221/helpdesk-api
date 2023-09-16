import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import Ticket from './schemas/ticket.schema';

describe('TicketController', () => {
  let ticketController: TicketController;
  let ticketService: TicketService;
  const ticketModel = new Ticket();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [
        TicketService,
        { provide: getModelToken(Ticket.name), useValue: ticketModel },
      ],
    }).compile();

    ticketController = module.get<TicketController>(TicketController);
    ticketService = module.get<TicketService>(TicketService);
  });

  describe('Tickets', () => {
    it('should be defined', () => {
      expect(ticketController).toBeDefined();
    });

    describe('findAll', () => {
      it('should return an array of Tickets', async () => {
        const tickets: Ticket[] = [];
        const createTicket = (incident_description: string) => {
          const ticket = new Ticket();
          ticket.incident_description = incident_description;
          return ticket;
        };
        tickets.push(createTicket('ticket1'));
        tickets.push(createTicket('ticket2'));

        jest
          .spyOn(ticketService, 'findAll')
          .mockImplementation(() => Promise.resolve(tickets));

        const findAllResult = await ticketController.findAll();

        expect(findAllResult).toBe(tickets);
      });
    });
  });
});
