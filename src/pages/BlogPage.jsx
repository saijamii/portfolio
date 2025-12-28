import React from 'react';
import { PostCard } from '../components/Blog/PostCard';
import { posts } from '../data/posts';

const BlogPage = () => {
    return (
        <div className="container mx-auto px-4 py-12 min-h-screen pt-24">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4 dark:text-white text-gray-900">Blog</h1>
                <p className="text-lg text-muted-foreground dark:text-gray-400 text-gray-600">
                    Thoughts, tutorials, and updates.
                </p>
            </header>

            <div className="relative pt-4">
                <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                    <div className="border-r border-edge" />
                    <div className="border-l border-edge" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {posts.map((post, index) => (
                        <PostCard
                            key={post.id}
                            post={post}
                        />
                    ))}

                    {posts.length === 0 && (
                        <div className="screen-line-before screen-line-after p-4">
                            <p className="font-mono text-sm">No posts found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
