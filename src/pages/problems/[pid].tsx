// Import React and any other necessary libraries
import Topbar from '@/components/Topbar/Topbar';
import Workspace from '@/components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import React from 'react';

// Define the prop types for your component (if needed)
interface ProblemPageProps {
  // Define your prop types here
  problem: Problem
}

// Define your functional component with TypeScript
const ProblemPage: React.FC<ProblemPageProps> = ({problem}) => {
  // Your component logic goes here

console.log(problem);
  return (
    <div>
      {/* JSX for your component */}
      <Topbar problemPage={true}/>
      <Workspace problem={problem}/>
    </div>
  );
};

// Export your component for use in other files
export default ProblemPage;

export async function getStaticPaths() {
  const path = Object.keys(problems).map(key => ({
    params: {
      pid: key
    }
  }));
  return {
    paths: path,
    fallback: false
  };
}

export async function getStaticProps({ params }: {params: {pid: string}}) {
  const { pid } = params;
  const problem = problems[pid];
  
  if (!problem) {
    return {
      notFound: true
    };
  }

  problem.handlerFunction = problem.handlerFunction.toString();
  return {
    props: {
      problem
    }
  };
}
