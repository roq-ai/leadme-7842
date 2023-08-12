import axios from 'axios';
import queryString from 'query-string';
import { LeadFormInterface, LeadFormGetQueryInterface } from 'interfaces/lead-form';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLeadForms = async (
  query?: LeadFormGetQueryInterface,
): Promise<PaginatedInterface<LeadFormInterface>> => {
  const response = await axios.get('/api/lead-forms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLeadForm = async (leadForm: LeadFormInterface) => {
  const response = await axios.post('/api/lead-forms', leadForm);
  return response.data;
};

export const updateLeadFormById = async (id: string, leadForm: LeadFormInterface) => {
  const response = await axios.put(`/api/lead-forms/${id}`, leadForm);
  return response.data;
};

export const getLeadFormById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/lead-forms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLeadFormById = async (id: string) => {
  const response = await axios.delete(`/api/lead-forms/${id}`);
  return response.data;
};
