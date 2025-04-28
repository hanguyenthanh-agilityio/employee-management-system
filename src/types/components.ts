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

export type CreateLeavePayload = {
  id?: string;
  startDate: string;
  endDate: string;
  resumptionDate: string;
  employeeName?: string;
  type: string;
  reliefOfficer?: string | null;
  documentPath?: string | null;
  reason: string;
  durations: number;
  reliefOfficerFirstName?: string | null;
  reliefOfficerLastName?: string | null;
  status?: 'Pending' | 'Approved' | 'Rejected';
  recallStatus?: 'Pending' | 'Approved' | 'Rejected';
  recallReason?: string | null;
  recallDate?: string | null;
  isRecalled?: boolean;
  daysRemaining?: number | null;
  createdAt?: string;
  updatedAt?: string;
};
