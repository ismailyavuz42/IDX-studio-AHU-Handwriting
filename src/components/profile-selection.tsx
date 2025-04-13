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
      const fonts = ['Amperzand', 'NewBerolineMT', 'cygnetrount'];
      setAvailableFonts(fonts);
    };

    fetchFonts();
  }, []);

  // Replace with actual profile data from API or database
  const profiles = [
    {id: 'Amperzand', name: 'Amperzand'},
    {id: 'NewBerolineMT', name: 'NewBerolineMT'},
    {id: 'cygnetrount', name: 'cygnetrount'},
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
        {selectedFont && (
          <div className="mt-2">
            Selected font: {selectedFont}
            <img
              src={`/fonts/${selectedFont}.png`} // Assuming font images are named like Font-One.png
              alt={`Preview of ${selectedFont}`}
              className="mt-2 rounded-md shadow-sm"
              style={{maxWidth: '100px', maxHeight: '100px'}}
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
        <div className="mt-2">
          Selected profile: {selectedProfile}
          {selectedProfile && (
            <div className="mt-2">
              <img
                src={`/fonts/${selectedProfile}.png`} // Assuming profile images are named like Profile-One.png
                alt={`Preview of ${selectedProfile}`}
                className="mt-2 rounded-md shadow-sm"
                style={{maxWidth: '100px', maxHeight: '100px'}}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
