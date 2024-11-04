import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StoryDetail = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [activeTab, setActiveTab] = useState('summary');

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.get(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
                setStory(response.data);
            } catch (error) {
                console.error("Error fetching story:", error);
            }
        };
        fetchStory();
    }, [id]);

    if (!story) return <div className="text-center flex justify-center align-center py-10">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto p-5">
            <div className='mt-9 '>
                <img
                    src={`https://ik.imagekit.io/dev24/${story?.Image[0]}`}
                    alt={story.Title}
                    className="h-40% w-50% rounded-lg shadow-lg"
                />
            </div>
            <h2 className="text-3xl font-bold mt-4">{story?.Title}</h2>
            <p className='underline flex flex-col gap-y-7'>Paragraph <br />
                <p className='text-xs font-mono mt-2'>{story?.Wordexplore[0]?.Storyitext}</p></p>
            <div className="mt-4 flex space-x-4">
                <button
                    onClick={() => setActiveTab('summary')}
                    className={`flex-1 py-2 rounded-lg ${activeTab === 'summary' ? 'bg-green-400 text-black' : 'bg-gray-200 text-green-400'} hover:bg-blue-400`}
                >
                    Summary
                </button>
                <button
                    onClick={() => setActiveTab('characters')}
                    className={`flex-1 py-2 rounded-lg ${activeTab === 'characters' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'} hover:bg-blue-400`}
                >
                    Characters
                </button>
                <button
                    onClick={() => setActiveTab('reviews')}
                    className={`flex-1 py-2 rounded-lg ${activeTab === 'reviews' ? 'bg-blue-500 text-red-400' : 'bg-gray-200 text-red-700'} hover:bg-blue-400`}
                >Reviews
                </button>
            </div>
            <div className="mt-6">
                {activeTab === 'summary' && <p className="text-red-700 py-5 text-wrap">
                    {story?.Storyadvenure?.content[0]?.Paragraph[1]}</p>}
                {activeTab === 'characters' && <p className="text-blue-700 text-wrap">{story?.Wordexplore[0]?.Storyttext}</p>}
                {activeTab === 'reviews' && <p className="text-yellow-700 text-wrap">{story?.Wordexplore[0]?.Noun}</p>}
            </div>
        </div>
    );
};

export default StoryDetail;
