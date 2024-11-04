import React, {  useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Cards.jsx';
import  {StoriesContext} from '../Storiescontext';

const ScienceFictionList = () => {
    const {stories} = useContext(StoriesContext);
    const [currentPage, setCurrentPage] = useState(1);
    const storiesPerPage = 8;
    const navigate = useNavigate();

    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);


    const handleNext = () => {
        if (indexOfLastStory < stories.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-8">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-4">Science Fiction Stories</h1>
                <div className="flex justify-center space-x-4">
                    <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">New</button>
                    <button className="px-4 py-2 bg-yellow-500 rounded-lg hover:bg-yellow-600">In Progress</button>
                    <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">Completed</button>
                    <button className="px-4 py-2 bg-gray-500 rounded-lg hover:bg-gray-600">Clear All</button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentStories.map((story, index) => (
                    <Card key={index} story={story} navigate={navigate} />
                ))}
            </div>

            <div className="flex justify-center mt-[200px] gap-x-11 space-x-4">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mt-6 rounded-lg ${currentPage === 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={indexOfLastStory >= stories.length}
                    className={`px-4 py-2 mt-6 rounded-lg ${indexOfLastStory >= stories.length ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ScienceFictionList;
