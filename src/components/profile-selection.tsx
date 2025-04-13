'use client';

import {useState, useEffect} from 'react';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

export function ProfileSelection() {
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const [availableFonts, setAvailableFonts] = useState<string[]>([]);
    const [selectedFont, setSelectedFont] = useState<string>('');


  useEffect(() => {
    const fetchFonts = async () => {
      // In a real-world scenario, you might fetch this list from an API or a more robust file system scan
      const fonts = ['Font-One', 'Font-Two', 'Font-Three'];
      setAvailableFonts(fonts);
    };

    fetchFonts();
  }, []);

  // Replace with actual profile data from API or database
  const profiles = [
    {id: '1', name: 'Profile 1'},
    {id: '2', name: 'Profile 2'},
    {id: '3', name: 'Profile 3'},
  ];

  return (
    <div>
          <div className="mb-4">
        <label htmlFor="handwritingFonts" className="block text-sm font-medium text-gray-700">
          Handwriting Fonts
        </label>
        <Select onValueChange={setSelectedFont}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            {availableFonts.map(font => (
              <SelectItem key={font} value={font}>
                {font}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {selectedFont && <div className="mt-2">Selected font: {selectedFont}</div>}
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
      {selectedProfile && <div className="mt-2">Selected profile: {selectedProfile}</div>}
    </div>
  );
}

