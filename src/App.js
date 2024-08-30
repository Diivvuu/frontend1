import React from 'react';
import IconCloud from './components/magicui/icon-cloud';
import { AnimatedSubscribeButton } from './components/magicui/animated-subscribe-button';
import { useNavigate } from 'react-router-dom';

export function App() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-gradient-to-br from-teal-100 to-teal-300 p-8">
      {/* Hero Section */}
      <div className="text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to DoWell Random Graph API
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Generate random points within a Cartesian plane or Excel-like grid
          with ease. Perfect for data simulations, visualizations, and more.
        </p>
      </div>

      {/* Icon Cloud */}
      <div className="max-w-96 mx-auto my-16">
        <IconCloud
          iconSlugs={[
            'react',
            'nextdotjs',
            'express',
            'nodejs',
            'javascript',
            'mongodb',
            'mysql',
            'postgresql',
            'redis',
            'docker',
            'kubernetes',
            'amazonaws',
            'android',
            'ios',
            'flutter',
            'swift',
            'java',
            'python',
            'ruby',
            'php',
            'androidstudio',
            'typescript',
            'vercel',
            'visualstudiocode',
            'github',
            'figma',
            'angular',
          ]}
        />
      </div>

      {/* Call to Action Buttons */}
      <div className="flex space-x-6 mt-8">
        <div onClick={() => navigate('/field-random-points')}>
          <AnimatedSubscribeButton
            buttonColor="#1E3A8A"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={<span>Field Random Points</span>}
            changeText={
              <span className="group inline-flex items-center">Loading...</span>
            }
            className="hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          />
        </div>
        <div onClick={() => navigate('/excel-random-points')}>
          <AnimatedSubscribeButton
            buttonColor="#1E3A8A"
            buttonTextColor="#ffffff"
            subscribeStatus={false}
            initialText={<span>Excel Random Points</span>}
            changeText={
              <span className="group inline-flex items-center">Loading...</span>
            }
            className="hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
