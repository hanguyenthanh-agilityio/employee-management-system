export type CustomClassType = {
  customClass?: string;
};

export type PageErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export type LeaveItem = {
  id: string;
  startDate: string;
  endDate: string;
  employeeName: string;
  type: string;
  reason: string;
  durations: number;
  status: string;
};

export type LeaveApplication = {
  metaData: {
    limit: number;
    page: number;
    totalCount: number;
  };
  results: LeaveItem[];
};
