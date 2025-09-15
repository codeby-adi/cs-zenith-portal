import { useState } from 'react';
import { GraduationCap, Code, Database, Shield, Brain, Cpu, Globe, BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  const programs = {
    undergraduate: {
      title: 'Undergraduate Programs',
      subtitle: 'B.Tech in Computer Science & Engineering',
      duration: '4 Years',
      description: 'Comprehensive foundation in computer science with hands-on experience in modern technologies.',
      specializations: [
        {
          icon: Brain,
          name: 'Artificial Intelligence',
          description: 'Machine Learning, Deep Learning, Neural Networks',
          courses: ['Introduction to AI', 'Machine Learning', 'Deep Learning', 'Computer Vision']
        },
        {
          icon: Shield,
          name: 'Cybersecurity',
          description: 'Network Security, Ethical Hacking, Cryptography',
          courses: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Digital Forensics']
        },
        {
          icon: Database,
          name: 'Data Science',
          description: 'Big Data Analytics, Data Mining, Statistics',
          courses: ['Data Mining', 'Big Data Analytics', 'Statistical Methods', 'Data Visualization']
        },
        {
          icon: Globe,
          name: 'Web Development',
          description: 'Full-stack Development, Cloud Computing',
          courses: ['Web Technologies', 'Cloud Computing', 'DevOps', 'Microservices']
        }
      ]
    },
    postgraduate: {
      title: 'Postgraduate Programs',
      subtitle: 'M.Tech in Computer Science & Engineering',
      duration: '2 Years',
      description: 'Advanced studies with research focus and industry collaboration.',
      specializations: [
        {
          icon: Brain,
          name: 'Machine Learning',
          description: 'Advanced ML algorithms, Research projects',
          courses: ['Advanced ML', 'Pattern Recognition', 'Neural Networks', 'Research Methodology']
        },
        {
          icon: Database,
          name: 'Data Analytics',
          description: 'Big Data, Distributed Systems, Analytics',
          courses: ['Distributed Systems', 'Big Data Technologies', 'Advanced Analytics', 'Data Engineering']
        },
        {
          icon: Shield,
          name: 'Information Security',
          description: 'Advanced Security, Blockchain, Privacy',
          courses: ['Advanced Security', 'Blockchain Technology', 'Privacy Engineering', 'Security Analytics']
        },
        {
          icon: Cpu,
          name: 'High Performance Computing',
          description: 'Parallel Computing, GPU Programming',
          courses: ['Parallel Algorithms', 'GPU Computing', 'Distributed Computing', 'Performance Optimization']
        }
      ]
    },
    doctoral: {
      title: 'Doctoral Program',
      subtitle: 'Ph.D in Computer Science & Engineering',
      duration: '3-5 Years',
      description: 'Research-focused program leading to original contributions in computer science.',
      specializations: [
        {
          icon: Brain,
          name: 'AI Research',
          description: 'Cutting-edge AI research, Publications',
          courses: ['Research Methodology', 'Advanced AI Topics', 'Publication Writing', 'Thesis Work']
        },
        {
          icon: Database,
          name: 'Systems Research',
          description: 'Distributed Systems, Cloud Computing',
          courses: ['Advanced Systems', 'Research Seminar', 'Independent Study', 'Dissertation']
        },
        {
          icon: Shield,
          name: 'Security Research',
          description: 'Advanced Security Research, Cryptography',
          courses: ['Advanced Cryptography', 'Security Research', 'Thesis Research', 'Conference Papers']
        },
        {
          icon: Code,
          name: 'Software Engineering',
          description: 'Advanced Software Systems, Methodologies',
          courses: ['Software Architecture', 'Research Methods', 'Advanced Programming', 'Thesis Development']
        }
      ]
    }
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow gradient-primary bg-clip-text text-transparent">
              Academic Programs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to prepare you for success 
            in the rapidly evolving field of computer science and engineering.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 glass">
            <TabsTrigger 
              value="undergraduate"
              className="text-lg py-3 data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground"
            >
              <GraduationCap className="mr-2" size={20} />
              Undergraduate
            </TabsTrigger>
            <TabsTrigger 
              value="postgraduate"
              className="text-lg py-3 data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground"
            >
              <BookOpen className="mr-2" size={20} />
              Postgraduate
            </TabsTrigger>
            <TabsTrigger 
              value="doctoral"
              className="text-lg py-3 data-[state=active]:gradient-primary data-[state=active]:text-primary-foreground"
            >
              <Code className="mr-2" size={20} />
              Doctoral
            </TabsTrigger>
          </TabsList>

          {Object.entries(programs).map(([key, program]) => (
            <TabsContent key={key} value={key} className="space-y-8">
              {/* Program Overview */}
              <div className="glass-card text-center animate-fade-in">
                <h3 className="text-3xl font-bold mb-4 gradient-secondary bg-clip-text text-transparent">
                  {program.title}
                </h3>
                <p className="text-xl font-semibold text-primary mb-2">
                  {program.subtitle}
                </p>
                <p className="text-accent font-medium mb-4">
                  Duration: {program.duration}
                </p>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  {program.description}
                </p>
              </div>

              {/* Specializations Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {program.specializations.map((spec, index) => (
                  <div
                    key={index}
                    className="glass-card hover-lift group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                        <spec.icon size={32} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          {spec.name}
                        </h4>
                        <p className="text-muted-foreground">
                          {spec.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold text-primary mb-3">Core Courses:</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {spec.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="text-sm bg-muted/20 px-3 py-1 rounded-full text-muted-foreground
                                     border border-muted/30 hover:border-primary/30 transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full glass group-hover:glow-primary transition-all"
                    >
                      Learn More
                    </Button>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="text-center glass-card animate-fade-in">
                <h4 className="text-2xl font-bold mb-4 text-foreground">
                  Ready to Start Your Journey?
                </h4>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join thousands of successful graduates who have built amazing careers 
                  in technology and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gradient-primary">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline" className="glass">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CoursesSection;