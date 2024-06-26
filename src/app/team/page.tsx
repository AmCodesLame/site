// pages/team.tsx
import Head from 'next/head';
import Header from '../../components/Header';
import TeamCard from '@/components/TeamCard';

const Team: React.FC = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', position: 'CEO', image: '/images/john_doe.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    { id: 2, name: 'Jane Smith', position: 'CTO', image: '/images/jane_smith.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    { id: 3, name: 'Jane Smith', position: 'CTO', image: '/images/jane_smith.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    { id: 4, name: 'Jane Smith', position: 'CTO', image: '/images/jane_smith.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    { id: 5, name: 'Jane Smith', position: 'CTO', image: '/images/jane_smith.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    { id: 6, name: 'Jane Smith', position: 'CTO', image: '/images/jane_smith.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est quam. Sed id libero vel sem pharetra pharetra.' },
    // Add more team members as needed
  ];

  return (
    <div className=" min-h-screen">
      <Head>
        <title>Our Team - TechCompany</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header active='team' />

      <main className="container mx-auto px-4 py-8">
        <div className=" ">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="mt-2 text-sm text-gray-500">Get to know the talented individuals behind TechCompany.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {teamMembers.map((member) => (
              <div key={member.id} >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2022 TechCompany. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Team;
