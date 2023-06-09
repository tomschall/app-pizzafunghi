import { TPost } from '../../../types';

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

type TGetPost = {
	id: string;
};

/**
 * Get a single post by id
 * @param {string} id
 */

export const get = async ({ id }: TGetPost): Promise<TPost> => {
	const res = await fetch(`${BASE_URL}/api/posts/${id}/`);
	return (await res.json()) as TPost;
};
