import React from 'react';
import { Link } from 'react-router-dom';
import { Pin } from 'lucide-react';

export const PostCard = ({ post }) => {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className="group/post flex flex-col gap-2 p-2 max-sm:screen-line-before max-sm:screen-line-after sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
        >
            <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
                <img
                    alt={post.title}
                    loading="lazy"
                    width="1200"
                    height="630"
                    decoding="async"
                    data-nimg="1"
                    src={post.image}
                    style={{ color: 'transparent' }}
                    className="w-full h-auto object-cover rounded-xl"
                />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10"></div>
                {post.pinned && (
                    <span className="absolute top-1.5 right-1.5 flex size-6 items-center justify-center rounded-md bg-secondary">
                        <Pin className="size-4 rotate-45 text-secondary-foreground" aria-hidden="true" />
                        <span className="sr-only">Pinned</span>
                    </span>
                )}
            </div>
            <div className="flex flex-col gap-1 p-2">
                <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline dark:text-white text-gray-900">
                    {post.title}
                    {post.isNew && (
                        <span className="ml-2 inline-block size-2 -translate-y-px rounded-full bg-blue-500">
                            <span className="sr-only">New</span>
                        </span>
                    )}
                </h3>
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm text-muted-foreground text-gray-500 dark:text-gray-400">
                        <time dateTime={post.date}>{post.displayDate}</time>
                    </dd>
                </dl>
            </div>
        </Link>
    );
};
