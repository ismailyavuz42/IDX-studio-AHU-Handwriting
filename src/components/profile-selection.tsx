'use client';

import {useState} from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

export function ProfileSelection() {
  const [selectedProfile, setSelectedProfile] = useState<string>('');

  // Replace with actual profile data from API or database
  const profiles = [
    {id: '1', name: 'Profile 1'},
    {id: '2', name: 'Profile 2'},
    {id: '3', name: 'Profile 3'},
  ];

  return (
    <div>
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
      {selectedProfile && <div className="mt-2">Selected profile: {selectedProfile}</div>}
    </div>
  );
}
