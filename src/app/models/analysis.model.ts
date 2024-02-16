import { AnalysisStatus } from '../enums/analysisStatus.enum';

export class Analysis {
  id?: any;
  startDate?: string;
  endDate?: string;
  resultAnalysis?: boolean;
  status?: AnalysisStatus;
}
