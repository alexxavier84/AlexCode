// Import React and any other necessary libraries
import Topbar from '@/components/Topbar/Topbar';
import React from 'react';

// Define the prop types for your component (if needed)
interface ProblemPageProps {
  // Define your prop types here
  
}

// Define your functional component with TypeScript
const ProblemPage: React.FC<ProblemPageProps> = () => {
  // Your component logic goes here

  return (
    <div>
      {/* JSX for your component */}
      <Topbar problemPage={true}/>
    </div>
  );
};

// Export your component for use in other files
export default ProblemPage;
