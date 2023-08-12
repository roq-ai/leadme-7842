import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { leadFormValidationSchema } from 'validationSchema/lead-forms';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.lead_form
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getLeadFormById();
    case 'PUT':
      return updateLeadFormById();
    case 'DELETE':
      return deleteLeadFormById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getLeadFormById() {
    const data = await prisma.lead_form.findFirst(convertQueryToPrismaUtil(req.query, 'lead_form'));
    return res.status(200).json(data);
  }

  async function updateLeadFormById() {
    await leadFormValidationSchema.validate(req.body);
    const data = await prisma.lead_form.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteLeadFormById() {
    const data = await prisma.lead_form.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
