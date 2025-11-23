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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="border border-edge dark:border-white/10 rounded-xl overflow-hidden bg-card dark:bg-secondary-400/50">
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
