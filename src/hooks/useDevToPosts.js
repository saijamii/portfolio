import { title } from 'framer-motion/client';
import { useState, useEffect } from 'react';

const CACHE_KEY = 'devto_posts_cache';
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export const useDevToPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Check cache first
                const cachedData = localStorage.getItem(CACHE_KEY);
                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData);
                    if (Date.now() - timestamp < CACHE_DURATION) {
                        setPosts(data);
                        setLoading(false);
                        return;
                    }
                }

                // Fetch from API if cache is invalid or missing
                const response = await fetch('https://dev.to/api/articles?username=saijamii&per_page=5');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();

                // Map data to match PostCard requirements
                const mappedPosts = data.map(post => {
                    const { id, title, slug, published_at, readable_publish_date, cover_image, social_image, description, url } = post
                    return {
                        id,
                        title,
                        slug,
                        description,
                        url,
                        date: published_at,
                        displayDate: readable_publish_date,
                        image: cover_image || social_image,
                        // Determine if new (e.g., published within last 7 days)
                        isNew: (new Date() - new Date(post.published_at)) / (1000 * 60 * 60 * 24) < 7
                    }
                });

                // Update state and cache
                setPosts(mappedPosts);
                localStorage.setItem(CACHE_KEY, JSON.stringify({
                    data: mappedPosts,
                    timestamp: Date.now()
                }));
            } catch (err) {
                console.error('Error fetching blog posts:', err);
                setError(err.message);

                // Fallback to cache even if expired if fetch fails
                const cachedData = localStorage.getItem(CACHE_KEY);
                if (cachedData) {
                    const { data } = JSON.parse(cachedData);
                    setPosts(data);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};
