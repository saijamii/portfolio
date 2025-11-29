import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PostCard } from '../Blog/PostCard';
import { posts } from '../../data/posts';
import { Panel, PanelHeader, PanelTitle } from '../ui/Panel';

export const Blog = () => {
    const recentPosts = posts.slice(0, 4);

    return (
        <Panel id="blog">
            <PanelHeader>
                <PanelTitle className="dark:text-white text-gray-900">Blog</PanelTitle>
            </PanelHeader>
            <div className="relative py-4">
                <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                    <div className="border-r border-edge dark:border-white/10"></div>
                    <div className="border-l border-edge dark:border-white/10"></div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {recentPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            <div className="screen-line-before flex justify-center py-2">
                <Link
                    className="inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium whitespace-nowrap transition-[background-color] outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-4 bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                    to="/blog"
                >
                    All Posts
                    <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
            </div>
        </Panel>
    );
};
