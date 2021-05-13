// The request that is coming is defined here in a DTO
// DTO - Data Transfer Object - an object that defines how the data will be sent across the network.
// This gets passed to the controller, and then to service(provider) of the Tasks Module

export class CreateTaskDto {
  title: string;
  description: string;
}
