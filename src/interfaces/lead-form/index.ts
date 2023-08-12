import { RequestInterface } from 'interfaces/request';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface LeadFormInterface {
  id?: string;
  name: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  request?: RequestInterface[];
  organization?: OrganizationInterface;
  _count?: {
    request?: number;
  };
}

export interface LeadFormGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  organization_id?: string;
}
