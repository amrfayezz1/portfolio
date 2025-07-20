import { Service, NavItem, SocialLink, FormField } from '../types';

export const services: Service[] = [
  {
    id: 'frontend',
    title: 'Front-end Development',
    description: 'Creating responsive, user-friendly interfaces with a focus on clean design and seamless user experiences.',
    icon: 'fas fa-code',
    hoverIcon: 'fas fa-hand-pointer',
    delay: 0
  },
  {
    id: 'backend',
    title: 'Back-end Development',
    description: 'Building robust and scalable back-end systems, ensuring data integrity and performance across various platforms.',
    icon: 'fas fa-database',
    hoverIcon: 'fas fa-hand-pointer',
    delay: 100
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Solutions',
    description: 'Developing innovative AI and machine learning solutions, transforming data into actionable insights and smart applications.',
    icon: 'fas fa-brain',
    hoverIcon: 'fas fa-hand-pointer',
    delay: 200
  }
];

export const navItems: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/amrfayezz1',
    icon: 'fab fa-linkedin'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/amrfayezz1',
    icon: 'fab fa-github'
  },
  {
    platform: 'Email',
    url: 'mailto:amrfayez.247@gmail.com',
    icon: 'fas fa-envelope'
  }
];

export const contactFormFields: FormField[] = [
  {
    id: 'name',
    name: 'name',
    label: 'Your Name',
    type: 'text',
    required: true
  },
  {
    id: 'email',
    name: 'email',
    label: 'Your Email',
    type: 'email',
    required: true
  },
  {
    id: 'subject',
    name: 'subject',
    label: 'Subject',
    type: 'text',
    required: true
  },
  {
    id: 'message',
    name: 'message',
    label: 'Message',
    type: 'textarea',
    required: true,
    rows: 6
  }
];