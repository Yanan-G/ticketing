import { Subjects, Publisher, OrderCancelledEvent } from '@ygtix/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
	subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}
