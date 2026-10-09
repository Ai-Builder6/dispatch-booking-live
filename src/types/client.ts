export type ClientVerdict = 'Client' | 'Good lead' | 'Bad lead' | 'Spam';

export interface ClientRecord {
  id: string;
  name: string;
  phone: string;
  secondaryPhone?: string;
  email?: string;
  address: string;
  city?: string;
  province?: string;
  postalCode?: string;
  verdict: ClientVerdict;
  tags: string[];
  isJobberLinked: boolean;
  jobberId?: string;
  totalJobs?: number;
  latestServiceDate?: string;
  notes?: string;
  source?: 'Jobber' | 'Booking' | 'Lead' | 'Manual';
  createdAt?: string;
  updatedAt?: string;
}

export interface ClientFilters {
  searchQuery: string;
  verdictFilter: 'ALL' | ClientVerdict | 'JOBBER_LINKED';
  fromDate?: string;
  toDate?: string;
}
