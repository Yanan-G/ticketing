import { Publisher, Subjects, TicketCreatedEvent } from '@ygtix/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	subject: Subjects.TicketCreated = Subjects.TicketCreated
}
