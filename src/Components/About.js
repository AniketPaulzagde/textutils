import React from 'react';

export default function About(props) {
    return (
        <div className="container">
            <h2 className="my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                About Us
            </h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                {/* Text Formatting */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            <strong>Text Formatting:</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    <strong>Overview:</strong> Enhance the visual appeal of your text with TextUtil's powerful formatting tools.
                                </li>
                                <li>
                                    <strong>Features:</strong>
                                    <ul>
                                        <li>Bold, Italics, Underline: Apply emphasis to your words with easy-to-use formatting options.</li>
                                        <li>Font Styles: Choose from a variety of font styles to personalize your text.</li>
                                        <li>Color Palette: Add vibrancy by selecting custom text colors.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Document Organization */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            <strong>Document Organization:</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    <strong>Overview:</strong> Keep your work organized and accessible with TextUtil's document management features.
                                </li>
                                <li>
                                    <strong>Features:</strong>
                                    <ul>
                                        <li>Folders and Categories: Create folders to categorize and organize your documents efficiently.</li>
                                        <li>Tagging System: Easily tag and label documents for quick retrieval.</li>
                                        <li>Search Function: Instantly find what you need with a powerful search functionality.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Collaborative Editing */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            <strong>Collaborative Editing:</strong>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <p>
                                <strong>Overview:</strong> Foster teamwork and streamline collaboration with TextUtil's collaborative editing capabilities.
                            </p>
                            <ul>
                                <li>Real-time Editing: Collaborate seamlessly with others, seeing changes in real-time.</li>
                                <li>Comments and Annotations: Provide feedback and suggestions using comments and annotations.</li>
                                <li>Version History: Track changes and revert to previous versions when needed.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
