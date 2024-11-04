import React from 'react'


function Cards({ story, navigate, index }) {

    console.log("story", story.Storyadvenure);

    return (
        <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
            onClick={() => navigate(`/story/${story?._id}`)}
        >
            <img
                src={`https://ik.imagekit.io/dev24/${story?.Storyadvenure?.content[0]?.Storyimage[0]}`}
                alt={story?.Title}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{story.Title}</h3>
                <span
                    className={`px-2 py-1 text-sm font-medium rounded-full ${story.Status === 'New' ? 'bg-blue-200 text-blue-800' :
                        story.Status === 'In progress' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-green-200 text-green-800'
                        }`}
                >
                    {story.Status}
                </span>
            </div>
        </div>
    )
}

export default Cards