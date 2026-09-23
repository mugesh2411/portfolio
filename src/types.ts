export type ProjectCategory = 
  | 'All' 
  | 'AI / ML' 
  | 'Computer Vision' 
  | 'NLP' 
  | 'Full Stack' 
  | 'IoT' 
  | 'Data Science';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory[];
  shortDescription: string;
  problem: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  architectureOrWorkflow?: string;
  workflowSteps?: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string; // 'CGPA' or 'Percentage'
  location?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; level?: string }[];
}

export interface ExperienceStage {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}
