import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 mb-2">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
