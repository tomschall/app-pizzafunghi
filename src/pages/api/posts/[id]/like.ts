import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { services } from '../../../../services';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;
	const method = req.method as 'PUT' | 'DELETE';
	const session = await getToken({ req });

	if (!session) {
		return res.status(401).json({
			status: false,
			error: `This is protected content. You can't access this content because you are not signed in.`,
		});
	}

	try {
		await services.likes.like({
			id: id as string,
			method,
			accessToken: session?.accessToken as string,
		});
		res.status(200).json({ status: true });
	} catch (err) {
		res.status(500).json({ status: false, error: err });
	}
}
