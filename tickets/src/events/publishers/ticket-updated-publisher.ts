import { Publisher, Subjects, TicketUpdatedEvent } from '@ygtix/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
	subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
