import { LeadFormInterface } from 'interfaces/lead-form';
import { GetQueryInterface } from 'interfaces';

export interface RequestInterface {
  id?: string;
  name: string;
  email: string;
  phone: string;
  additional_info?: string;
  lead_form_id?: string;
  created_at?: any;
  updated_at?: any;

  lead_form?: LeadFormInterface;
  _count?: {};
}

export interface RequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  additional_info?: string;
  lead_form_id?: string;
}
