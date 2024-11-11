import {WorkerStatus} from "../enums/workers-status.enum";

export interface Worker {

  id: number;
  name: string;
  status: WorkerStatus;

}
