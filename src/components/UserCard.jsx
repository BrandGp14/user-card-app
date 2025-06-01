import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  BriefcaseIcon,
  UserIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import CardContainer from './CardContainer';
import Button from './Button';

const UserCard = ({ user, variant = 'default' }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <CardContainer variant={variant} className="max-w-sm mx-auto animate-slide-up">
      {/* Header con avatar */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <img
            src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=667eea&color=fff&size=120`}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
          />
          {user.status && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white">
              <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mt-3 text-center">
          {user.name}
        </h3>
        
        {user.role && (
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1">
            {user.role}
          </span>
        )}

        {user.rating && (
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < user.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-1 text-sm text-gray-600">({user.rating})</span>
          </div>
        )}
      </div>

      {/* Información de contacto */}
      <div className="space-y-3 mb-6">
        {user.email && (
          <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            <EnvelopeIcon className="w-4 h-4 mr-3 text-blue-500" />
            <span className="text-sm truncate">{user.email}</span>
          </div>
        )}
        
        {user.phone && (
          <div className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
            <PhoneIcon className="w-4 h-4 mr-3 text-green-500" />
            <span className="text-sm">{user.phone}</span>
          </div>
        )}
        
        {user.location && (
          <div className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
            <MapPinIcon className="w-4 h-4 mr-3 text-red-500" />
            <span className="text-sm truncate">{user.location}</span>
          </div>
        )}

        {user.company && (
          <div className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
            <BriefcaseIcon className="w-4 h-4 mr-3 text-purple-500" />
            <span className="text-sm truncate">{user.company}</span>
          </div>
        )}
      </div>

      {/* Detalles adicionales (colapsables) */}
      {showDetails && user.bio && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg animate-fade-in">
          <p className="text-sm text-gray-700 leading-relaxed">{user.bio}</p>
        </div>
      )}

      {/* Skills/Tags */}
      {user.skills && user.skills.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {user.skills.slice(0, showDetails ? user.skills.length : 3).map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            {!showDetails && user.skills.length > 3 && (
              <span className="text-xs text-gray-500">+{user.skills.length - 3} más</span>
            )}
          </div>
        </div>
      )}

      {/* Botones de acción */}
      <div className="flex gap-2">
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          icon={<UserIcon className="w-4 h-4" />}
          onClick={handleShowDetails}
        >
          {showDetails ? 'Menos' : 'Ver más'}
        </Button>
        
        <Button
          variant={isLiked ? 'danger' : 'ghost'}
          size="sm"
          onClick={handleLike}
          className="px-3"
          icon={isLiked ? <HeartSolid className="w-4 h-4" /> : <HeartIcon className="w-4 h-4" />}
        >
          {isLiked ? '♥' : '♡'}
        </Button>
      </div>

      {/* Estadísticas del usuario */}
      {user.stats && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            {Object.entries(user.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-gray-800">{value}</div>
                <div className="text-xs text-gray-500 capitalize">{key}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </CardContainer>
  );
};

export default UserCard;