'use client';

import { useState, useEffect } from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

export function ProfileSelection() {
  const [selectedProfile, setSelectedProfile] = useState<string>('');

  // Define the available profiles and their corresponding images
  const profiles = [
    { id: 'Amperzand', name: 'Amperzand' },
    { id: 'His Heart Is Mine', name: 'His Heart Is Mine' },
    { id: 'KG Lovin On Me', name: 'KG Lovin On Me' },
  ];

  const [selectedFont, setSelectedFont] = useState<string | null>(null);

  useEffect(() => {
    // Reset selected font when component mounts or profiles change
    setSelectedFont(null);
  }, []);

  const fontValue = selectedFont || undefined;
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="profiles" className="block text-sm font-medium text-gray-700 mb-2">
          Profiles
        </label>
        <Select value={fontValue} onValueChange={setSelectedFont}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a profile" />
          </SelectTrigger>
          <SelectContent>
            {profiles.map(profile => (
              <SelectItem key={profile.id} value={profile.id}>
                {profile.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedFont && (
          <div className="mt-2">
            Selected profile: {selectedFont}
            <img
              src={`/fonts/${selectedFont}.png`}
              alt={`Preview of ${selectedFont}`}
              className="mt-2 rounded-md shadow-sm"
              style={{ maxWidth: '100px', maxHeight: '100px' }}
              />
           </div>
        )}
      </div>
      <Select value={selectedProfile} onValueChange={setSelectedProfile}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a profile" />
        </SelectTrigger>
        <SelectContent>
          {profiles.map(profile => (
            <SelectItem key={profile.id} value={profile.id}>
              {profile.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedProfile && (
        <div className="mt-2">Selected profile: {selectedProfile}
            <div className="mt-2">
            <img src={`/fonts/${selectedProfile}.png`} alt={`Preview of ${selectedProfile}`} className="mt-2 rounded-md shadow-sm" style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </div>
        </div>
      )}
    </div>
  );
}
