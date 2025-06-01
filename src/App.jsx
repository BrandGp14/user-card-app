import React, { useState } from 'react';
import UserCard from './components/UserCard';
import Button from './components/Button';
import CardContainer from './components/CardContainer';
import { 
  UsersIcon, 
  ViewColumnsIcon, 
  QueueListIcon,
  PlusIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

function App() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVariant, setSelectedVariant] = useState('default');

  // Array de usuarios de ejemplo
  const users = [
    {
      id: 1,
      name: 'Ana García',
      role: 'Frontend Developer',
      email: 'ana.garcia@email.com',
      phone: '+34 666 123 456',
      location: 'Madrid, España',
      company: 'TechCorp',
      rating: 5,
      status: true,
      bio: 'Desarrolladora frontend apasionada por crear experiencias de usuario excepcionales. Especializada en React y Vue.js.',
      skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      stats: {
        proyectos: 45,
        clientes: 12,
        años: 5
      }
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      role: 'UX Designer',
      email: 'carlos.ruiz@email.com',
      phone: '+34 677 987 654',
      location: 'Barcelona, España',
      company: 'Design Studio',
      rating: 4,
      status: false,
      bio: 'Diseñador UX/UI con más de 7 años de experiencia creando interfaces intuitivas y atractivas.',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
      stats: {
        diseños: 120,
        premios: 8,
        años: 7
      }
    },
    {
      id: 3,
      name: 'María López',
      role: 'Backend Developer',
      email: 'maria.lopez@email.com',
      phone: '+34 688 456 789',
      location: 'Valencia, España',
      company: 'CloudTech',
      rating: 5,
      status: true,
      bio: 'Desarrolladora backend especializada en arquitecturas escalables y sistemas distribuidos.',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
      stats: {
        apis: 30,
        servidores: 15,
        años: 6
      }
    },
    {
      id: 4,
      name: 'David Martín',
      role: 'DevOps Engineer',
      email: 'david.martin@email.com',
      phone: '+34 699 321 654',
      location: 'Sevilla, España',
      company: 'InfraTech',
      rating: 4,
      status: true,
      bio: 'Ingeniero DevOps enfocado en automatización, CI/CD y infraestructura como código.',
      skills: ['Kubernetes', 'Terraform', 'Jenkins', 'Ansible', 'Monitoring'],
      stats: {
        deploys: 200,
        uptime: 99.9,
        años: 4
      }
    },
    {
      id: 5,
      name: 'Laura Sánchez',
      role: 'Product Manager',
      email: 'laura.sanchez@email.com',
      phone: '+34 611 789 456',
      location: 'Bilbao, España',
      company: 'ProductCo',
      rating: 5,
      status: false,
      bio: 'Product Manager con experiencia en metodologías ágiles y gestión de equipos multidisciplinarios.',
      skills: ['Scrum', 'Kanban', 'Jira', 'Analytics', 'Strategy'],
      stats: {
        productos: 12,
        equipos: 25,
        años: 8
      }
    },
    {
      id: 6,
      name: 'Roberto Torres',
      role: 'Full Stack Developer',
      email: 'roberto.torres@email.com',
      phone: '+34 622 654 987',
      location: 'Zaragoza, España',
      company: 'FullStack Inc',
      rating: 4,
      status: true,
      bio: 'Desarrollador full stack con amplia experiencia en tecnologías web modernas y bases de datos.',
      skills: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'GraphQL'],
      stats: {
        commits: 2500,
        repos: 50,
        años: 3
      }
    }
  ];

  // Filtrar usuarios basado en el término de búsqueda
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = () => {
    alert('Funcionalidad para agregar usuario - En desarrollo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-3">
              <UsersIcon className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900">User Cards App</h1>
                <p className="text-gray-600 mt-1">Gestión moderna de usuarios con React y Tailwind</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                variant="gradient"
                size="md"
                icon={<PlusIcon className="w-5 h-5" />}
                onClick={handleAddUser}
              >
                Agregar Usuario
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Controles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <CardContainer variant="glass" className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Búsqueda */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar usuarios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Controles de vista */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Vista:</span>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <ViewColumnsIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <QueueListIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Estilo:</span>
                <select
                  value={selectedVariant}
                  onChange={(e) => setSelectedVariant(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500"
                >
                  <option value="default">Default</option>
                  <option value="glass">Glass</option>
                  <option value="gradient">Gradient</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{filteredUsers.length}</div>
                <div className="text-sm text-gray-600">Usuarios mostrados</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {filteredUsers.filter(u => u.status).length}
                </div>
                <div className="text-sm text-gray-600">En línea</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600">
                  {Math.round(filteredUsers.reduce((acc, u) => acc + u.rating, 0) / filteredUsers.length * 10) / 10 || 0}
                </div>
                <div className="text-sm text-gray-600">Rating promedio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{users.length}</div>
                <div className="text-sm text-gray-600">Total usuarios</div>
              </div>
            </div>
          </div>
        </CardContainer>

        {/* Grid de usuarios */}
        <div className={`
          ${viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'space-y-4'
          }
        `}>
          {filteredUsers.map((user, index) => (
            <div 
              key={user.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <UserCard 
                user={user} 
                variant={selectedVariant}
              />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredUsers.length === 0 && (
          <CardContainer className="text-center py-12">
            <UsersIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No se encontraron usuarios
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta ajustar tus criterios de búsqueda
            </p>
            <Button
              variant="primary"
              onClick={() => setSearchTerm('')}
            >
              Limpiar búsqueda
            </Button>
          </CardContainer>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600">
            <p>Desarrollado por Brandon Gomez usando React, Tailwind CSS y Heroicons</p>
            <p className="text-sm mt-1">
              Componentes modulares • CSS Modules • Props.children • Responsive Design
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;