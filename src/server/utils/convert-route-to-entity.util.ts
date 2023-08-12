const mapping: Record<string, string> = {
  'lead-forms': 'lead_form',
  organizations: 'organization',
  requests: 'request',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
