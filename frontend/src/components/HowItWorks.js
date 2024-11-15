import React from 'react';
import '../style/HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        { title: "Step 1", description: "Understand the mission." },
        { title: "Step 2", description: "Ask for joining." },
        { title: "Step 3", description: "Fill the form." },
        { title: "Step 4", description: "Got Accepted as a member." },
        { title: "Step 5", description: " Stay engaged and informed." },
        { title: "Step 6", description: "Contribute what you're expected to do when it's needed." },
        { title: "Step 7", description: "Access resources and support" },
        { title: "Step 8", description: "Receive benefits in times of need." }
    ];

    return (
        <div className="how-it-works bg-custom-dark text-light">
            <h2>How It Works</h2>
            <ul>
                {steps.map((step, index) => (
                    <li key={index} className="step">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HowItWorks;