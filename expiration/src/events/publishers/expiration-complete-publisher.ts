import { Subjects, Publisher, ExpirationCompleteEvent } from '@ygtix/common'

export class ExpirationCompletePublisher extends Publisher<
	ExpirationCompleteEvent
> {
	subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
