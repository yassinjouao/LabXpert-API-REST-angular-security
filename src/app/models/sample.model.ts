import { SampleStatus } from '../enums/sampleStatus.enum';
import { SampleType } from '../enums/sampleType.enum';

export class Sample {
  type?: SampleType;
  status?: SampleStatus;
  date?: string;
  idPatient?: any;
}
