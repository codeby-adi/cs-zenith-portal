import { useEffect, useState } from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';

const AboutSection = () => {
  const [counters, setCounters] = useState({
    students: 0,
    faculty: 0,
    programs: 0,
    years: 0,
  });

  const finalCounts = {
    students: 500,
    faculty: 25,
    programs: 8,
    years: 25,
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(finalCounts.students * progress),
        faculty: Math.floor(finalCounts.faculty * progress),
        programs: Math.floor(finalCounts.programs * progress),
        years: Math.floor(finalCounts.years * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounters(finalCounts);
      }
    }, increment);

    return () => clearInterval(interval);
  }, []);

  const achievements = [
    {
      icon: Award,
      title: 'Excellence in Research',
      description: 'Leading research in AI, Machine Learning, and Cybersecurity',
    },
    {
      icon: Users,
      title: 'Industry Partnerships',
      description: 'Strong ties with top tech companies for internships and placements',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Updated curriculum aligned with industry standards and emerging technologies',
    },
    {
      icon: Target,
      title: 'Student Success',
      description: '95% placement rate with graduates working at Fortune 500 companies',
    },
  ];

  const timeline = [
    { year: '1999', event: 'Department established with first batch of 30 students' },
    { year: '2005', event: 'Launched M.Tech program in Computer Science' },
    { year: '2010', event: 'Established AI & Machine Learning Research Lab' },
    { year: '2015', event: 'Introduced PhD program and Cybersecurity specialization' },
    { year: '2020', event: 'Achieved NAAC A+ accreditation and expanded research facilities' },
    { year: '2024', event: 'Launched interdisciplinary programs and industry partnerships' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-glow gradient-primary bg-clip-text text-transparent">
              About Our Department
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over two decades, we've been at the forefront of computer science education,
            fostering innovation and preparing the next generation of tech leaders.
          </p>
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { key: 'students', label: 'Students', suffix: '+' },
            { key: 'faculty', label: 'Faculty Members', suffix: '+' },
            { key: 'programs', label: 'Programs', suffix: '' },
            { key: 'years', label: 'Years of Excellence', suffix: '' },
          ].map((item, index) => (
            <div
              key={item.key}
              className="glass-card text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-glow gradient-secondary bg-clip-text text-transparent mb-2">
                {counters[item.key as keyof typeof counters]}{item.suffix}
              </div>
              <div className="text-muted-foreground font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="glass-card hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <achievement.icon 
                  size={48} 
                  className="text-primary group-hover:text-secondary transition-colors duration-300" 
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-glow gradient-accent bg-clip-text text-transparent">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="glass-card hover-lift">
                    <div className="text-lg font-bold text-primary mb-2">
                      {item.year}
                    </div>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-6 h-6 bg-gradient-primary rounded-full border-4 border-background animate-pulse-glow"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;