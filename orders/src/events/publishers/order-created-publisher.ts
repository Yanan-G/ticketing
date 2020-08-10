import { Publisher, OrderCreatedEvent, Subjects } from '@ygtix/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	subject: Subjects.OrderCreated = Subjects.OrderCreated
}
