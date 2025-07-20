import React, { useState, useEffect } from 'react';
import { 
  ServiceCard, 
  ProjectCard, 
  Navigation, 
  Button, 
  FormGroup, 
  Modal,
  MobileMenu,
  ScrollNavbar
} from './components';
import { 
  services, 
  navItems, 
  socialLinks, 
  contactFormFields 
} from './data/constants';
import { Project } from './types';
import './App.css';

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load projects data
  useEffect(() => {
    fetch('/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error loading projects:', error));
  }, []);

  // Initialize form data
  useEffect(() => {
    const initialFormData: Record<string, string> = {};
    contactFormFields.forEach(field => {
      initialFormData[field.name] = '';
    });
    setFormData(initialFormData);
  }, []);

  const handleFormChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual EmailJS integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccessModalOpen(true);
      setFormData({});
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVideoModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setCurrentVideo('');
  };

  return (
    <div className="App">
      {/* Header */}
      <ScrollNavbar>
        <header>
          <nav className="navbar">
            <div className="logo">
              <a href="/" onClick={(e) => e.preventDefault()}>
                <img src="imgs/logo.png" alt="Logo" />
              </a>
            </div>
            <Navigation items={navItems} className="nav-links" />
            <div className="contact-button">
              <Button href="#contact">Contact Me</Button>
            </div>
            <MobileMenu navItems={navItems} />
          </nav>
        </header>
      </ScrollNavbar>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content" data-aos="fade-right">
            <h1>Amr Fayez Alahwany</h1>
            <h2>- Software Developer<br />- Aspiring AI Engineer</h2>
            <p>Building innovative solutions and contributing to the future of technology.</p>
            <Button 
              href="#contact" 
              icon="fa-solid fa-message"
            >
              Get in Touch
            </Button>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <img src="imgs/prof.jpg" alt="Amr Fayez Alahwany" />
          </div>
        </section>

        {/* About Section */}
        <section className="about" id="about">
          <div className="about-content" data-aos="fade-up">
            <h2>About Me</h2>
            <p>
              I am a committed software and AI engineer with a strong track record of delivering high-quality code
              and innovative solutions. I excel in front-end and back-end development, leading projects from concept to
              completion. Passionate about learning and collaboration, I consistently exceed expectations and add value to team projects.
            </p>
            <Button 
              href="#work" 
              variant="secondary"
              icon="fa-solid fa-briefcase"
            >
              My Work
            </Button>
          </div>
          <div className="about-image" data-aos="fade-left">
            <img src="imgs/laptop.webp" alt="Floating Laptops Graphic" />
          </div>
        </section>

        {/* Services Section */}
        <section className="services" id="services">
          <h2>My Services</h2>
          <div className="service-cards">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <hr />

        {/* Work Section */}
        <section className="work" id="work">
          <h2>My Work</h2>
          <div className="project-cards">
            {projects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onVideoModal={handleVideoModal}
              />
            ))}
          </div>
        </section>

        <hr style={{ margin: '1rem 0 3rem' }} />

        {/* Contact Section */}
        <section className="contact-me" id="contact">
          <h2>Let's Connect!
            <div className="icon-container">
              <i className="fas fa-envelope"></i>
              <i className="fas fa-comments"></i>
              <i className="fas fa-paper-plane"></i>
              <i className="fas fa-smile"></i>
            </div>
          </h2>
          <p>
            I'm excited to hear about your projects and ideas. Whether you have a question, want to collaborate, or
            just want to say hi, feel free to drop a message. I'll get back to you as soon as I can!
          </p>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            {contactFormFields.map(field => (
              <FormGroup
                key={field.id}
                field={field}
                value={formData[field.name] || ''}
                onChange={(value) => handleFormChange(field.name, value)}
              />
            ))}
            <Button 
              type="submit" 
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Send Message
            </Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-logo">
          <img src="imgs/logo.png" alt="Logo" />
        </div>
        <div className="footer-nav">
          <Navigation items={navItems} variant="horizontal" />
          <div className="footer-social">
            {socialLinks.map(link => (
              <a 
                key={link.platform}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <Modal
        isOpen={videoModalOpen}
        onClose={closeVideoModal}
        title="Project Demo"
        size="large"
      >
        <video controls style={{ width: '100%' }}>
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={successModalOpen}
        onClose={() => setSuccessModalOpen(false)}
        title="Message Sent"
        showFooter
        footer={
          <Button onClick={() => setSuccessModalOpen(false)}>
            Close
          </Button>
        }
      >
        <p>
          Thank you for reaching out!
          <br />
          I'll get back to you as soon as possible.
        </p>
      </Modal>
    </div>
  );
}

export default App;
