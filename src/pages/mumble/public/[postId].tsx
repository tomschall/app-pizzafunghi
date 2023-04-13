import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useSession } from 'next-auth/react';
import { FC, useState } from 'react';
import NextLink from 'next/link';

import { MainLayout } from '../../../components/layoutComponents/MainLayout';
import { PostDetail } from '../../../components/post/PostDetail';
import { services } from '../../../services';
import { TPost, TUser } from '../../../types';
import { Grid, Headline, Label, Link } from '@smartive-education/pizza-hawaii';
import router from 'next/router';

type TUserPage = {
	post: TPost;
};

const DetailPage: FC<TUserPage> = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { data: session } = useSession();
	const currentUser = session?.user as TUser;

	// redirect if current user is available
	if (currentUser) {
		router.push(`/mumble/${post.id}`);
	}

	return (
		<MainLayout
			title={`Mumble von ${post?.user.userName}`}
			seo={{
				description: `${post?.user.userName} schrieb: ${post?.text}`,
				image: { url: post?.mediaUrl as string, type: post?.mediaType },
				pageType: 'article',
			}}
		>
			<>
				<div className="mb-6 text-violet-600">
					<Headline level={1} as="h1">
						Welcome to Mumble
					</Headline>
				</div>
				<div className="text-slate-500 mb-8">
					<Grid variant="col" gap="M">
						<Label as="p" size="XL">
							Angemeldete Nutzer haben die Möglichkeit, vollständige Beiträge und Nutzerdetails zu sehen.
						</Label>
						<Label as="p" size="L">
							Zusätzlich kannst du eigene Beiträge erstellen, auf andere Beiträge antworten und anderen Nutzern
							folgen.
						</Label>
						<Label as="p" size="L">
							Werde Teil der Mumble Community und melde dich an! Wir freuen uns auf dich!
						</Label>

						<Link href="/auth/signup" component={NextLink}>
							Jetzt registrieren
						</Link>
					</Grid>
				</div>
				<PostDetail post={post} />

				{post?.replyCount + post?.likeCount > 0 && (
					<div className="text-slate-500 mt-8">
						<Label as="p" size="L">
							{post?.replyCount + post?.likeCount < 5 ? 'Dieser Mumble hat bereits einige Reaktionen. ' : `Dieser Mumble ist sehr beliebt. `}
							Melde dich an, um nichts zu verpassen!
						</Label>
					</div>
				)}
			</>
		</MainLayout>
	);
};

export default DetailPage;

export const getStaticProps: GetStaticProps<{ post: TPost }> = async (context) => {
	const postId = context.params?.postId;

	const post: TPost = await services.posts.getPost({
		id: postId as string,
		loadReplies: false,
	});


	return {
		props: {
			post,
		},
		revalidate: 60, // 60 seconds
	};
};

export const getStaticPaths = async (): Promise<{ paths: { params: { id: string } }[]; fallback: string }> => {
	return {
		paths: [],
		fallback: 'blocking', // wait for data to be fetched
	};
};

